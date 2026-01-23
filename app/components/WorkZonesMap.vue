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
   Radius scaling logic
---------------------------------- */

function scaleRadiusByZoom(baseRadius: number, zoom: number) {
  // Tunable values — tweak once if needed
  const minZoom = 5
  const maxZoom = 10

  const minScale = 0.6
  const maxScale = 1.8

  const clampedZoom = Math.min(Math.max(zoom, minZoom), maxZoom)

  const t = (clampedZoom - minZoom) / (maxZoom - minZoom)

  const scale = minScale + t * (maxScale - minScale)

  return baseRadius * 200 * scale
}

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

  map.addListener('zoom_changed', () => {
    if (!map) return
    currentZoom = map.getZoom() ?? currentZoom
    updateCircleRadii()
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
   Rendering logic
---------------------------------- */

function renderCircles(google: typeof window.google) {
  if (!map) return

  // Clear previous circles
  circles.forEach((c) => c.setMap(null))
  circles = []

  const bounds = new google.maps.LatLngBounds()

  props.areas.forEach((area) => {
    const center = new google.maps.LatLng(area.lat, area.lng)
    bounds.extend(center)
    const radius = scaleRadiusByZoom(area.radius, currentZoom)
    console.log('Rendering circle at', center.toString(), 'with radius', radius)
    const circle = new google.maps.Circle({
      map,
      center,
      radius,
      strokeColor: '#2563eb',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#2563eb',
      fillOpacity: 0.25,
    })

    circles.push(circle)
  })

  if (!bounds.isEmpty()) {
    map.fitBounds(bounds, {
      top: 40,
      bottom: 40,
      left: 40,
      right: 40,
    })
  }

  // fitBounds changes zoom → force radius update
  currentZoom = map.getZoom() ?? currentZoom
  updateCircleRadii()
}

function updateCircleRadii() {
  if (!map) return

  circles.forEach((circle, index) => {
    const baseRadius = props.areas[index].radius
    circle.setRadius(scaleRadiusByZoom(baseRadius, currentZoom))
  })
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
