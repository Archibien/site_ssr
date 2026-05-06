<template>
  <div class="flex flex-col items-center text-center px-6 py-8 bg-white rounded-xl shadow-sm max-w-[280px] sm:max-w-[340px]">
    <h5 class="text-title-s font-semibold text-darkblue mb-xs">
      {{ data.first_name }} {{ data.last_name }}
    </h5>
    <p class="text-gray-600 text-sm leading-relaxed">
      {{ data.comment }}
    </p>
  </div>
</template>

<script setup lang="ts">
import type { AgencyRating } from '~/types/agency'
defineProps<{
  data: AgencyRating
}>()
</script>
