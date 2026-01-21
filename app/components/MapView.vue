<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useGoogleMaps } from '@/composables/useGoogleMaps'

/* ───────────────── props / emits ───────────────── */

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
}

const props = defineProps<{
  initialBounds: Bounds
  pins: Pin[]
  loading: boolean
}>()

const emit = defineEmits<{
  (e: 'bounds-changed', bbox: string): void
}>()

/* ───────────────── refs ───────────────── */

const mapEl = ref<HTMLDivElement | null>(null)
const inputEl = ref<HTMLInputElement | null>(null)

let map: google.maps.Map | null = null
let autocomplete: google.maps.places.Autocomplete | null = null
let markers = new Map<string | number, google.maps.Marker>()

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

/* ───────────────── markers sync ───────────────── */

function syncMarkers(google: typeof window.google) {
  console.log('Syncing markers, incoming pins:', props.pins)
  if (!map || !props.pins) return

  const incomingIds = new Set(props.pins.map((p) => p.id))

  // Remove markers no longer present
  for (const [id, marker] of markers) {
    if (!incomingIds.has(id)) {
      marker.setMap(null)
      markers.delete(id)
    }
  }

  // Add / update markers
  for (const pin of props.pins) {
    if (markers.has(pin.id)) continue

    const marker = new google.maps.Marker({
      position: { lat: pin.lat, lng: pin.lng },
      map,
      optimized: true,
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

  map.fitBounds(boundsToGoogle(props.initialBounds))

  /* Address autocomplete */
  autocomplete = new google.maps.places.Autocomplete(inputEl.value!, {
    fields: ['geometry'],
  })

  autocomplete.addListener('place_changed', () => {
    const place = autocomplete!.getPlace()
    if (!place.geometry) return

    if (place.geometry.viewport) {
      map!.fitBounds(place.geometry.viewport)
      emit('bounds-changed', googleBoundsToBbox(place.geometry.viewport))
    }
  })

  /* Map move → bbox update */
  map.addListener('idle', () => {
    const bounds = map!.getBounds()
    if (!bounds) return
    emit('bounds-changed', googleBoundsToBbox(bounds))
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
  () => props.pins,
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

      <div v-if="loading" class="map-loading">Chargement…</div>
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
</style>
