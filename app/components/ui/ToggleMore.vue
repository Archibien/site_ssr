<template>
  <div>
    <div class="flex justify-between items-center">
      <slot name="title" />
      <div
        class="text-link cursor-pointer flex items-center hover:text-blue-700 transition-colors duration-200 ease-in-out"
        @click="isFolded = !isFolded">
        <span class="text-sm">En savoir {{ isFolded ? 'plus' : 'moins' }}</span>
        <svg
          v-if="isFolded"
          width="14"
          height="15"
          viewBox="0 0 14 15"
          class="ml-2 fill-current"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.44006 4.70739C1.4807 4.66665 1.52897 4.63432 1.58213 4.61227C1.63528 4.59021 1.69226 4.57886 1.74981 4.57886C1.80735 4.57886 1.86433 4.59021 1.91748 4.61227C1.97064 4.63432 2.01892 4.66665 2.05956 4.70739L6.99981 9.64851L11.9401 4.70739C11.9807 4.66671 12.029 4.63445 12.0822 4.61243C12.1353 4.59042 12.1923 4.57909 12.2498 4.57909C12.3073 4.57909 12.3643 4.59042 12.4174 4.61243C12.4706 4.63445 12.5189 4.66671 12.5596 4.70739C12.6002 4.74807 12.6325 4.79636 12.6545 4.8495C12.6765 4.90265 12.6879 4.95961 12.6879 5.01714C12.6879 5.07467 12.6765 5.13163 12.6545 5.18478C12.6325 5.23792 12.6002 5.28621 12.5596 5.32689L7.30956 10.5769C7.26892 10.6176 7.22064 10.65 7.16748 10.672C7.11433 10.6941 7.05735 10.7054 6.99981 10.7054C6.94226 10.7054 6.88528 10.6941 6.83213 10.672C6.77897 10.65 6.7307 10.6176 6.69006 10.5769L1.44006 5.32689C1.39931 5.28625 1.36699 5.23797 1.34493 5.18482C1.32288 5.13167 1.31152 5.07469 1.31152 5.01714C1.31152 4.95959 1.32288 4.90261 1.34493 4.84946C1.36699 4.79631 1.39931 4.74803 1.44006 4.70739Z" />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          class="ml-2 fill-current"
          viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z" />
        </svg>
      </div>
    </div>
    <slot :show="!isFolded" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const isFolded = ref(true)
</script>
