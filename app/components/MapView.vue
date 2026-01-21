<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useGoogleMaps } from '@/composables/useGoogleMaps'
import { useDebounceFn } from '@vueuse/core'

/* ───────────────── props ───────────────── */

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
}

const props = defineProps<{
  initialBounds: Bounds
}>()

/* ───────────────── refs ───────────────── */

const mapEl = ref<HTMLDivElement | null>(null)
const inputEl = ref<HTMLInputElement | null>(null)

let map: google.maps.Map | null = null
let autocomplete: google.maps.places.Autocomplete | null = null
let markers = new Map<string | number, google.maps.Marker>()
const router = useRouter()
let infoWindow: google.maps.InfoWindow | null = null

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
  // purple for project, red for agency
  return type === 'project' ? '#7e3ff2' : '#ef4444'
}

// Simple SVG paths for house (project) and office (agency)
const HOUSE_PATH = 'M -8,0 L 0,-10 L 8,0 L 8,8 L -8,8 Z'
const OFFICE_PATH = 'M -6,-12 L 6,-12 L 6,12 L -6,12 Z'

function symbolForType(type: Pin['pin_type']): google.maps.Symbol {
  const path = type === 'project' ? HOUSE_PATH : OFFICE_PATH
  return {
    path,
    scale: 1,
    fillColor: colorForType(type),
    fillOpacity: 1,
    strokeColor: '#ffffff',
    strokeOpacity: 1,
    strokeWeight: 2,
    anchor: new google.maps.Point(0, 8),
  }
}

/* ──────────────── pins fetch (client-only) ──────────────── */

const bbox = ref<string>('')
const {
  data: pins,
  refresh: refreshPins,
  pending,
} = useFetch<Pin[]>('/api/map-pins', {
  server: false,
  immediate: false,
  query: { bbox },
})

// Debounced refresh to avoid excessive fetches on map interactions
const refreshPinsDebounced = useDebounceFn(() => {
  refreshPins()
}, 800)

/* ───────────────── markers sync ───────────────── */

function syncMarkers(google: typeof window.google) {
  if (!map || !pins?.value) return

  const incomingIds = new Set(pins.value.map((p) => p.id))

  // Remove markers no longer present
  for (const [id, marker] of markers) {
    if (!incomingIds.has(id)) {
      marker.setMap(null)
      markers.delete(id)
    }
  }

  // Add / update markers
  for (const pin of pins.value) {
    if (markers.has(pin.id)) continue

    const marker = new google.maps.Marker({
      position: { lat: pin.lat, lng: pin.lng },
      map,
      optimized: true,
      icon: symbolForType(pin.pin_type),
    })

    // Navigate to pin.url on click if provided
    marker.addListener('click', () => {
      if (pin.url) {
        router.push(pin.url)
      }
    })

    // Show label above pin on hover using InfoWindow
    marker.addListener('mouseover', () => {
      if (!infoWindow) return
      const el = document.createElement('div')
      el.className = 'pin-label'
      el.textContent = pin.label
      infoWindow.setContent(el)
      infoWindow.open({ map: map!, anchor: marker })
    })
    marker.addListener('mouseout', () => {
      infoWindow?.close()
    })

    markers.set(pin.id, marker)
  }
}

/* ───────────────── lifecycle ───────────────── */

onMounted(async () => {
  const google = await useGoogleMaps()

  /* Map init */
  map = new google.maps.Map(mapEl.value!, {
    gestureHandling: 'greedy',
    mapTypeControl: false,
    streetViewControl: false,
  })

  // Single InfoWindow instance reused for hover labels
  infoWindow = new google.maps.InfoWindow({ disableAutoPan: true })

  map.fitBounds(boundsToGoogle(props.initialBounds))

  /* Initialize bbox and fetch pins */
  const initialBounds = map.getBounds()
  if (initialBounds) {
    bbox.value = googleBoundsToBbox(initialBounds)
    refreshPinsDebounced()
  }

  /* Address autocomplete */
  autocomplete = new google.maps.places.Autocomplete(inputEl.value!, {
    fields: ['geometry'],
    componentRestrictions: { country: 'fr' },
  })

  autocomplete.addListener('place_changed', () => {
    const place = autocomplete!.getPlace()
    if (!place.geometry) return

    if (place.geometry.viewport) {
      map!.fitBounds(place.geometry.viewport)
      bbox.value = googleBoundsToBbox(place.geometry.viewport)
      refreshPinsDebounced()
    }
  })

  /* Map move → bbox update */
  map.addListener('idle', () => {
    const bounds = map!.getBounds()
    if (!bounds) return
    bbox.value = googleBoundsToBbox(bounds)
    refreshPinsDebounced()
  })

  syncMarkers(google)
})

onBeforeUnmount(() => {
  markers.forEach((m) => m.setMap(null))
  markers.clear()
  map = null
})

/* ───────────────── watch pins ───────────────── */

watch(
  () => pins?.value,
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
    <input ref="inputEl" type="text" placeholder="Rechercher une adresse" class="address-input" />

    <div class="map-container">
      <div ref="mapEl" class="map" />

      <!-- <div v-if="pending" class="map-loading">Chargement…</div> -->
    </div>
  </div>
</template>

<style scoped>
.map-container {
  position: relative;
}

.map {
  height: 500px;
  width: 100%;
}

.map-loading {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.6);
  font-weight: 600;
}

.address-input {
  width: 100%;
  padding: 8px;
  margin-bottom: 8px;
}

/* Hide the default Google Maps InfoWindow close icon */
:global(.gm-ui-hover-effect) {
  display: none !important;
}

/* Optional styling for our hover label content */
.pin-label {
  font-weight: 600;
  color: #0a2540;
  padding: 4px 6px;
}
</style>
