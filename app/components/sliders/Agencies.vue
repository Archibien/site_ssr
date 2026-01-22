<template>
  <SectionsCarousel>
    <CardsAgency
      v-for="(item, index) in agencies"
      :key="index"
      :data="item"
      class="basis-[140px] sm:basis-[170px] mr-5 container-slide" />
  </SectionsCarousel>
</template>

<script setup lang="ts">
import type { AgencyWithMeta } from '~/types/agency'
defineProps<{
  agencies: AgencyWithMeta[] | undefined
}>()
</script>
