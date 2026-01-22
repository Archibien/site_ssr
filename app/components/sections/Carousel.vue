<template>
  <div ref="carouselRef" class="overflow-hidden">
    <div class="flex">
      <slot />
    </div>
    <div class="flex items-center justify-center space-x-6 mt-4">
      <button v-if="canScrollPrev" aria-label="Précédent" @click="scrollPrev">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-black fill-current hover:text-gray-500 cursor-pointer"
          viewBox="0 0 22 14">
          <path
            d="M21.5 7a.75.75 0 0 1-.75.75H3.06l4.721 4.719a.751.751 0 0 1-1.062 1.062l-6-6a.75.75 0 0 1 0-1.062l6-6a.751.751 0 0 1 1.062 1.062L3.061 6.25H20.75a.75.75 0 0 1 .75.75Z"
            clip-rule="evenodd" />
        </svg>
      </button>
      <button v-if="canScrollNext" aria-label="Suivant" @click="scrollNext">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 22 14"
          class="h-6 w-6 text-black fill-current hover:text-gray-500 cursor-pointer">
          <path
            fill-rule="evenodd"
            d="M.5 7a.75.75 0 0 1 .75-.75h17.69l-4.721-4.719A.751.751 0 0 1 15.281.469l6 6a.75.75 0 0 1 0 1.062l-6 6a.75.75 0 0 1-1.062-1.062l4.72-4.719H1.25A.75.75 0 0 1 .5 7Z"
            clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import emblaCarouselVue from 'embla-carousel-vue'
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures'

const [carouselRef, carouselApi] = emblaCarouselVue({ dragFree: true, align: 'start' }, [
  WheelGesturesPlugin(),
])
const scrollNext = () => {
  carouselApi.value?.scrollNext(true)
}

const scrollPrev = () => {
  carouselApi.value?.scrollPrev(true)
}

const canScrollNext = computed(() => {
  return carouselApi.value?.canScrollNext() ?? false
})

const canScrollPrev = computed(() => {
  return carouselApi.value?.canScrollPrev() ?? false
})
</script>
