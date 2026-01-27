<script setup lang="ts">
/// <reference types="google.maps" />
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useGoogleMaps } from '@/composables/useGoogleMaps'
import { useDebounceFn } from '@vueuse/core'

/* ───────────────── types ───────────────── */

type Bounds = {
  north: number
  south: number
  east: number
  west: number
}

type Pin = {
  id: string | number
  lat: number
  lng: number
  label: string
  pin_type: 'agency' | 'project'
  url?: string
  category?: string
  type?: string
  banner?: string
  description?: string
}

/* ───────────────── props ───────────────── */

const props = defineProps<{ initialBounds: Bounds }>()

/* ───────────────── refs ───────────────── */

const mapEl = ref<HTMLDivElement | null>(null)
const inputEl = ref<HTMLInputElement | null>(null)

let map: google.maps.Map | null = null
let autocomplete: google.maps.places.Autocomplete | null = null
let markers = new Map<
  string | number,
  { marker: google.maps.marker.AdvancedMarkerElement; el: HTMLElement }
>()
let infoWindow: google.maps.InfoWindow | null = null
let PinPopoverClass: ReturnType<typeof createPinPopoverClass> | null = null
let activePopover: InstanceType<ReturnType<typeof createPinPopoverClass>> | null = null
let activeMarkerEl: HTMLElement | null = null
let searchMarker: google.maps.Marker | null = null

const router = useRouter()

/* ───────────────── interaction state ───────────────── */

let isInteracting = false
let needsFetchAfterInteraction = false

/* ───────────────── helpers ───────────────── */

function boundsToGoogle(b: Bounds) {
  return new google.maps.LatLngBounds({ lat: b.south, lng: b.west }, { lat: b.north, lng: b.east })
}

function googleBoundsToBbox(bounds: google.maps.LatLngBounds, precision = 2) {
  const ne = bounds.getNorthEast()
  const sw = bounds.getSouthWest()
  const round = (v: number) => v.toFixed(precision)
  return [round(sw.lng()), round(sw.lat()), round(ne.lng()), round(ne.lat())].join(',')
}

function colorForType(type: Pin['pin_type']) {
  return type === 'project' ? '#2469ff' : '#22204d'
}

function setSearchMarker(position: google.maps.LatLng) {
  if (!map) return

  // Remove previous marker
  if (searchMarker) {
    searchMarker.setMap(null)
    searchMarker = null
  }

  searchMarker = new google.maps.Marker({
    map,
    position,
    clickable: false,
    zIndex: 999, // always above pins
  })
}

/* ───────────────── SVG paths ───────────────── */

const HOUSE_PATH =
  'M8.543 2.232a.75.75 0 0 0-1.085 0l-5.25 5.5A.75.75 0 0 0 2.75 9H4v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-1a1 1 0 1 1 2 0v1a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1V9h1.25a.75.75 0 0 0 .543-1.268z'

const OFFICE_PATH =
  'M8 8a3 3 0 1 0 0-6a3 3 0 0 0 0 6m4.735 6c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139z'

/* ───────────────── marker DOM ───────────────── */

function createMarkerElement(pin: Pin) {
  const el = document.createElement('div')
  el.className = 'pin-marker'
  el.dataset.type = pin.pin_type

  el.innerHTML = `
    <svg viewBox="0 0 16 16" width="20" height="20">
      <path
        d="${pin.pin_type === 'project' ? HOUSE_PATH : OFFICE_PATH}"
        fill="${colorForType(pin.pin_type)}"
      />
    </svg>
  `

  return el
}

/* ──────────────── custom popover (UNCHANGED) ──────────────── */

function createPinPopoverClass(google: typeof window.google) {
  return class PinPopover extends google.maps.OverlayView {
    private div: HTMLDivElement
    private position: google.maps.LatLng
    private onClose: () => void

    constructor(position: google.maps.LatLng, content: HTMLElement, onClose: () => void) {
      super()
      this.position = position
      this.div = document.createElement('div')
      this.div.className = 'pin-popover'
      this.div.appendChild(content)
      this.onClose = onClose
    }

    onAdd() {
      this.getPanes()!.floatPane.appendChild(this.div)
      setTimeout(() => document.addEventListener('click', this.handleOutsideClick))
    }

    onRemove() {
      document.removeEventListener('click', this.handleOutsideClick)
      this.div.remove()
      clearActiveMarker()
    }

    draw() {
      const projection = this.getProjection()
      const point = projection.fromLatLngToDivPixel(this.position)
      if (!point) return
      this.div.style.transform = `translate(${point.x}px, ${point.y - 40}px)`
    }

    private handleOutsideClick = (e: MouseEvent) => {
      if (!this.div.contains(e.target as Node)) this.onClose()
    }
  }
}

function clearActiveMarker() {
  activeMarkerEl?.classList.remove('is-selected')
  activeMarkerEl = null
}

function closePopover() {
  activePopover?.setMap(null)
  activePopover = null
}

/* ──────────────── popover content (UNCHANGED) ──────────────── */

function createPopoverContent(pin: Pin) {
  const el = document.createElement('div')
  el.className = 'popover-card'

  el.innerHTML = `
    <button class="popover-close" aria-label="Fermer">✕</button>

    <div class="popover-image">
      <img src="${pin.banner || '/img/placeholders/logo-archibien.jpg'}"
           height="180"
           class="w-full max-h-[180px] object-cover" />
    </div>

    <div class="popover-footer">
      <div class="text-sm font-regular mb-1.5">${pin.label}</div>

      ${
        pin.pin_type === 'project'
          ? `
            <span class="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium inset-ring inset-ring-gray-300">
              ${pin.type}
            </span>
            <span class="ml-1 inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium inset-ring inset-ring-gray-300">
              ${pin.category}
            </span>
          `
          : `
            <span class="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-xs font-medium inset-ring inset-ring-gray-300">
              ${pin.type}
            </span>
          `
      }
    </div>
  `

  el.querySelector('.popover-close')?.addEventListener('click', (e) => {
    e.stopPropagation()
    closePopover()
  })

  el.addEventListener('click', () => {
    if (pin.url) router.push(pin.url)
  })

  return el
}

/* ──────────────── pins fetch ──────────────── */

const bbox = ref('')
const { data: pins, refresh: refreshPins } = useFetch<Pin[]>('/api/map-pins', {
  server: false,
  immediate: false,
  query: { bbox },
})

const refreshPinsDebounced = useDebounceFn(() => {
  if (!map) return
  const bounds = map.getBounds()
  if (!bounds) return

  const next = googleBoundsToBbox(bounds)
  if (bbox.value === next) return

  bbox.value = next
  refreshPins()
}, 600)

/* ──────────────── markers sync ──────────────── */

function syncMarkers(google: typeof window.google) {
  if (!map || !pins.value) return

  const incomingIds = new Set(pins.value.map((p) => p.id))

  for (const [id, entry] of markers) {
    if (!incomingIds.has(id)) {
      entry.marker.map = null
      markers.delete(id)
    }
  }

  for (const pin of pins.value) {
    if (markers.has(pin.id)) continue

    const el = createMarkerElement(pin)

    const marker = new google.maps.marker.AdvancedMarkerElement({
      map,
      position: { lat: pin.lat, lng: pin.lng },
      content: el,
    })

    marker.addListener('click', () => {
      if (!map || !PinPopoverClass) return

      clearActiveMarker()
      el.classList.add('is-selected')
      activeMarkerEl = el

      closePopover()
      activePopover = new PinPopoverClass(
        new google.maps.LatLng(pin.lat, pin.lng),
        createPopoverContent(pin),
        closePopover
      )
      activePopover.setMap(map)
    })

    markers.set(pin.id, { marker, el })
  }
}

/* ───────────────── lifecycle ───────────────── */

const config = useRuntimeConfig()

onMounted(async () => {
  const google = await useGoogleMaps()
  PinPopoverClass = createPinPopoverClass(google)

  map = new google.maps.Map(mapEl.value!, {
    mapId: config.public.simpleMapId,
    gestureHandling: 'greedy',
    mapTypeControl: false,
    streetViewControl: false,
    fullscreenControl: false,
  })

  map.fitBounds(boundsToGoogle(props.initialBounds))

  map.addListener('dragstart', () => (isInteracting = true))
  map.addListener('zoom_changed', () => (isInteracting = true))
  map.addListener('bounds_changed', () => isInteracting && (needsFetchAfterInteraction = true))

  map.addListener('idle', () => {
    if (!isInteracting) return
    isInteracting = false
    if (needsFetchAfterInteraction) {
      needsFetchAfterInteraction = false
      refreshPinsDebounced()
    }
  })

  const bounds = map.getBounds()
  if (bounds) {
    bbox.value = googleBoundsToBbox(bounds)
    refreshPins()
  }

  autocomplete = new google.maps.places.Autocomplete(inputEl.value!, {
    fields: ['geometry'],
    componentRestrictions: { country: 'fr' },
  })

  autocomplete.addListener('place_changed', () => {
    const place = autocomplete!.getPlace()
    if (!place.geometry) return

    if (place.geometry.viewport) {
      map!.fitBounds(place.geometry.viewport)
    } else if (place.geometry.location) {
      map!.setCenter(place.geometry.location)
      map!.setZoom(15)
    }

    if (place.geometry.location) {
      setSearchMarker(place.geometry.location)
    }
  })
})

onBeforeUnmount(() => {
  closePopover()
  markers.forEach((m) => (m.marker.map = null))
  markers.clear()
  map = null
})

watch(
  () => pins.value,
  async () => {
    if (!map) return
    const google = await useGoogleMaps()
    syncMarkers(google)
  },
  { deep: true }
)
</script>

<template>
  <div class="map-wrapper">
    <input ref="inputEl" class="address-input" placeholder="Rechercher une adresse" />
    <div class="map-container">
      <div ref="mapEl" class="map" />
    </div>
  </div>
</template>

<style>
.map {
  height: 500px;
  width: 100%;
}

.address-input {
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
}

/* ───────── markers ───────── */

.pin-marker {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transform-origin: center;
  transition:
    transform 120ms ease,
    filter 120ms ease;
}

.pin-marker svg {
  transition: transform 120ms ease;
}

/* Hover */
.pin-marker:hover {
  transform: translateY(-2px) scale(1.15);
  filter: drop-shadow(0 6px 10px rgba(0, 0, 0, 0.25));
}

/* Selected */
.pin-marker.is-selected {
  transform: translateY(-4px) scale(1.25);
  filter: drop-shadow(0 8px 14px rgba(0, 0, 0, 0.35));
}

.pin-marker.is-selected::after {
  content: '';
  position: absolute;
  width: 28px;
  height: 28px;
  border-radius: 9999px;
  border: 2px solid currentColor;
  opacity: 0.35;
}

/* ───────── popover ───────── */

.pin-popover {
  position: absolute;
  z-index: 1000;
  pointer-events: auto;
}

.popover-card {
  width: 280px;
  position: relative;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.18);
  transform: translate(-50%, -100%);
  cursor: pointer;
}

.popover-footer {
  padding: 10px 12px;
}

.pin-label {
  font-weight: 600;
  padding: 4px 6px;
}

.popover-close {
  position: absolute;
  top: 8px;
  right: 8px;
  width: 28px;
  height: 28px;
  border-radius: 9999px;
  background: white;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}
</style>
