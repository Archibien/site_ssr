<script setup lang="ts">
import type { NuxtError } from '#app'

const props = defineProps({
  error: Object as () => NuxtError,
})
</script>

<template>
  <section class="app-container my-xxl py-xxl text-center">
    <div class="relative w-80 h-52 mb-xl md:mb-l mx-auto">
      <svg
        width="140"
        height="48"
        viewBox="0 0 140 48"
        class="absolute top-0 left-0 w-full h-full fill-current text-blue-200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0)">
          <path
            d="M49.7503 7.50696L49.603 20.397V48.0001H90.3969V20.397L49.7503 7.50696Z"
            fill="#9EBDFF" />
          <path
            d="M20.895 0.540161L0.498047 20.3969V48H41.2858V20.3969L20.895 0.540161Z"
            fill="#9EBDFF" />
          <path
            d="M116.551 0.159554C106.203 1.41173 98.708 10.7232 98.708 21.158V47.9877H139.496V20.3662C139.497 17.4707 138.883 14.608 137.693 11.9684C136.503 9.32878 134.765 6.97267 132.594 5.05667C130.423 3.14068 127.869 1.70868 125.102 0.855866C122.335 0.00304985 119.418 -0.251051 116.545 0.110448"
            fill="#9EBDFF" />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect width="139.004" height="48" fill="white" transform="translate(0.498047)" />
          </clipPath>
        </defs>
      </svg>

      <svg
        width="122"
        height="122"
        viewBox="0 0 122 122"
        class="glass-icon absolute bottom-0 left-8 fill-current text-darkblue h-28 w-28"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M98.6484 84.3516C95.7891 81.4922 92.5326 80.6185 88.8789 81.7305L81.2539 74.1055C88.0846 65.6862 91.5 56.2344 91.5 45.75C91.5 33.0417 87.0521 22.2396 78.1562 13.3438C69.2604 4.44792 58.4583 0 45.75 0C33.0417 0 22.2396 4.44792 13.3438 13.3438C4.44792 22.2396 0 33.0417 0 45.75C0 58.4583 4.44792 69.2604 13.3438 78.1562C22.2396 87.0521 33.0417 91.5 45.75 91.5C56.8698 91.5 66.3216 88.0846 74.1055 81.2539L81.7305 88.8789C80.7773 92.6914 81.651 95.9479 84.3516 98.6484L104.605 118.902C106.671 120.967 109.053 122 111.754 122C114.613 122 116.996 120.967 118.902 118.902C120.967 116.837 122 114.454 122 111.754C122 109.053 120.967 106.671 118.902 104.605L98.6484 84.3516ZM45.75 81.2539C35.901 81.2539 27.5215 77.7988 20.6113 70.8887C13.7012 63.9785 10.2461 55.599 10.2461 45.75C10.2461 35.901 13.7012 27.5215 20.6113 20.6113C27.5215 13.7012 35.901 10.2461 45.75 10.2461C55.599 10.2461 63.9785 13.7012 70.8887 20.6113C77.7988 27.5215 81.2539 35.901 81.2539 45.75C81.2539 55.599 77.7988 63.9785 70.8887 70.8887C63.9785 77.7988 55.599 81.2539 45.75 81.2539Z"
          fill="currentColor" />
      </svg>
    </div>
    <div class="mb-m md:mb-l">
      <h1 class="font-semibold text-title-l text-darkblue">
        Oups, la page recherchée n'est pas disponible.
      </h1>
      <p class="text-gray-600">
        Il est possible que vous ayez mal saisi l’adresse ou que la page ait été déplacée.
      </p>
    </div>
    <UiButton size="l" class="mb-xxl" block type="nuxt-link" to="/">
      Revenir à la page d'accueil
    </UiButton>
  </section>
</template>

<style scoped>
.glass-icon {
  animation: 2.5s infinite moveGlass;
  transform-origin: center;
}

@media (prefers-reduced-motion: reduce) {
  .glass-icon {
    animation: none;
  }
}

@keyframes moveGlass {
  0% {
    transform: scale(0);
    left: 2rem;
  }

  15% {
    transform: scale(1);
    left: 2rem;
  }

  20% {
    transform: scale(1);
    left: 2rem;
  }

  50% {
    transform: scale(0.8) rotate(60deg);
    left: 40%;
  }

  60% {
    transform: scale(0.8) rotate(60deg);
    left: 40%;
  }

  70% {
    transform: scale(0) rotate(60deg);
    left: 40%;
  }

  100% {
    transform: scale(0) rotate(60deg);
    left: 40%;
  }
}
</style>
