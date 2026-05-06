<template>
  <SectionsCarousel>
    <CardsRating
      v-for="(item, index) in ratings"
      :key="index"
      :data="item"
      class="basis-[280px] sm:basis-[340px] mr-5 container-slide" />
  </SectionsCarousel>
</template>

<script setup lang="ts">
import type { AgencyRating } from '~/types/agency'
defineProps<{
  ratings: AgencyRating[] | undefined
}>()
</script>
