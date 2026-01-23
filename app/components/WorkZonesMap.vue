<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useGoogleMaps } from '~/composables/useGoogleMaps'

type CoverageArea = {
  lat: number
  lng: number
  radius: number // meters
}

const props = defineProps<{
  areas: CoverageArea[]
}>()

const mapEl = ref<HTMLDivElement | null>(null)

let map: google.maps.Map | null = null
let circles: google.maps.Circle[] = []

onMounted(async () => {
  const google = await useGoogleMaps()
  if (!mapEl.value) return

  map = new google.maps.Map(mapEl.value, {
    center: { lat: 46.6, lng: 1.9 }, // France fallback
    zoom: 5,
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
  async () => {
    if (!map) return
    const google = window.google
    renderCircles(google)
  },
  { deep: true }
)

function renderCircles(google: typeof window.google) {
  if (!map) return

  // Clear old circles
  circles.forEach((c) => c.setMap(null))
  circles = []

  const bounds = new google.maps.LatLngBounds()

  props.areas.forEach((area) => {
    const center = new google.maps.LatLng(area.lat, area.lng)

    bounds.extend(center)

    const circle = new google.maps.Circle({
      map,
      center,
      radius: area.radius * 50,
      strokeColor: '#2469FF',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#2469FF',
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
  background: #f3f4f6; /* fallback while loading */
}
</style>
