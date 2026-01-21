<script setup lang="ts">
import type { AgencyWithMeta } from '~/types/agency'
import { departments } from '~/data/departments'
import type { Department } from '~/types/places'
import { useIntersectionObserver } from '@vueuse/core'

function boundsToBbox(bounds: { north: number; south: number; east: number; west: number }) {
  return `${bounds.west},${bounds.south},${bounds.east},${bounds.north}`
}

const route = useRoute()
const code = route.params?.department.split('-')[0]
const dep = departments[code] as Department

const depWithPrefix = computed(() => {
  return dep.prefix1.endsWith("'")
    ? `${dep.prefix1}${dep.department}`
    : `${dep.prefix1} ${dep.department}`
})
const title = ref(`Notre sélection des meilleurs architectes ${depWithPrefix.value} (${code})`)
type DepResponse = {
  agencies: AgencyWithMeta[]
  references: any[]
}
const { data } = await useAsyncData<DepResponse>(
  `departments:${code}`,
  () =>
    $fetch(`/api/departments`, {
      query: { code },
    }),
  { server: true }
)
// Client-side map logic
/* -----------------------
   State
------------------------ */
const mapContainer = ref<HTMLElement | null>(null)
const mapVisible = ref(false)
const bbox = ref(boundsToBbox(dep.bounds))

/* -----------------------
   Pins fetch (client-only)
------------------------ */
const {
  data: pins,
  refresh: refreshPins,
  pending,
} = useFetch('/api/map-pins', {
  server: false, // 🚨 REQUIRED
  immediate: false, // do NOT fetch until visible
  query: { bbox },
})

/* -----------------------
   Load map only when visible
------------------------ */
useIntersectionObserver(
  mapContainer,
  ([entry]) => {
    if (entry.isIntersecting) {
      mapVisible.value = true
      refreshPins() // initial fetch
    }
  },
  { threshold: 0.1 }
)

/* -----------------------
   Re-fetch when bbox changes
------------------------ */
watch(bbox, () => {
  if (mapVisible.value) {
    refreshPins()
  }
})

/* -----------------------
   Handler from map component
------------------------ */
function onBoundsChanged(newBounds: { north: number; south: number; east: number; west: number }) {
  bbox.value = boundsToBbox(newBounds)
}
</script>

<template>
  <div>
    <h1 class="font-semibold text-title-xl max-w-title">
      {{ title }}
    </h1>
    <h2 class="text-darkblue font-semibold text-title-l mb-min sm:mb-xs text-center">
      Comparez et choisissez votre architecte {{ dep.prefix2 }} {{ dep.department }} avec Archibien
    </h2>
  </div>
  <div>
    <SlidersAgencies v-if="data && data.agencies.length > 0" :agencies="data.agencies" />
  </div>
  <div v-for="n in 30" :key="n">
    <p>
      Some fake content Some fake content Some fake content Some fake content Some fake content Some
      fake content
    </p>
  </div>
  <div>
    <div ref="mapContainer" style="min-height: 400px">
      <ClientOnly>
        <MapView
          v-if="mapVisible"
          :pins="pins"
          :loading="pending"
          :initial-bounds="dep.bounds"
          @bounds-changed="bbox = $event" />
      </ClientOnly>
    </div>
  </div>
</template>
