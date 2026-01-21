<script setup lang="ts">
import { onMounted } from 'vue'

const props = defineProps<{
  pins: any[]
  loading: boolean
  initialBounds: {
    north: number
    south: number
    east: number
    west: number
  }
}>()

const emit = defineEmits<{
  (
    e: 'bounds-changed',
    bounds: {
      north: number
      south: number
      east: number
      west: number
    }
  ): void
}>()

onMounted(() => {
  // Example: hook into your map library
  // map.on('moveend', () => {
  //   const bounds = map.getBounds()
  //   emit('bounds-changed', {
  //     north: bounds.getNorth(),
  //     south: bounds.getSouth(),
  //     east: bounds.getEast(),
  //     west: bounds.getWest(),
  //   })
  // })
})

const testUpdateBounds = () => {
  // 44
  const newBounds = {
    north: 47.83,
    south: 46.88,
    east: -0.95,
    west: -2.55,
  }
  emit('bounds-changed', newBounds)
}
</script>

<template>
  <div class="map">
    <div v-if="loading">Chargement…</div>
    <div v-else>
      <button @click="testUpdateBounds">Test update bounds</button>
      <!-- render pins -->
      <pre>{{ pins?.length }} pins</pre>
      <pre>{{ pins }}</pre>
    </div>
  </div>
</template>
