<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useGoogleMaps } from '~/composables/useGoogleMaps'

type CoverageArea = {
  lat: number
  lng: number
  radius: number // real-world meters
}

const props = defineProps<{
  areas: CoverageArea[]
}>()

const mapEl = ref<HTMLDivElement | null>(null)

let map: google.maps.Map | null = null
let circles: google.maps.Circle[] = []
let currentZoom = 6

/* ----------------------------------
   Map lifecycle
---------------------------------- */

onMounted(async () => {
  const google = await useGoogleMaps()
  if (!mapEl.value) return

  map = new google.maps.Map(mapEl.value, {
    center: { lat: 46.6, lng: 1.9 },
    zoom: currentZoom,
    disableDefaultUI: true,
    draggable: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    gestureHandling: 'none',

    styles: [
      { featureType: 'poi', stylers: [{ visibility: 'off' }] },
      { featureType: 'transit', stylers: [{ visibility: 'off' }] },
      { featureType: 'road', stylers: [{ visibility: 'off' }] },
      //   { featureType: 'administrative', stylers: [{ visibility: 'off' }] },
    ],
  })

  renderCircles(google)
})

watch(
  () => props.areas,
  () => {
    if (!map) return
    renderCircles(window.google)
  },
  { deep: true }
)

/* ----------------------------------
 * Helpers
 * ---------------------------------- */

const clearCircles = () => {
  circles.forEach((circle) => circle.setMap(null))
  circles = []
}

/* ----------------------------------
   Rendering logic
---------------------------------- */

const renderCircles = (google: typeof window.google) => {
  if (!map) return

  clearCircles()

  const bounds = new google.maps.LatLngBounds()

  props.areas.forEach((zone) => {
    if (!zone.lat || !zone.lng) return
    const circle = new google.maps.Circle({
      map: map!,
      center: {
        lat: Number(zone.lat),
        lng: Number(zone.lng),
      },
      radius: zone.radius * 200,
      strokeColor: '#2563eb',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#3b82f6',
      fillOpacity: 0.15,
    })

    circles.push(circle)

    // 🔑 THIS is the important part
    const circleBounds = circle.getBounds()
    if (circleBounds) {
      bounds.union(circleBounds)
    }
  })

  // Fit map to all circle radii
  if (!bounds.isEmpty()) {
    map.fitBounds(bounds)
  }
}
</script>

<template>
  <ClientOnly>
    <div ref="mapEl" class="coverage-map" />
  </ClientOnly>
</template>

<style scoped>
.coverage-map {
  width: 100%;
  height: 420px;
  border-radius: 12px;
  background: #f3f4f6;
}
</style>
