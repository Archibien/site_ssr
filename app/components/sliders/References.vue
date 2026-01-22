<template>
  <SectionsCarousel>
    <CardsReference
      v-for="(ref, index) in references"
      :key="index"
      :data="ref"
      class="basis-[140px] sm:basis-[170px] mr-5 container-slide" />
  </SectionsCarousel>
</template>

<script setup lang="ts">
import type { ReferenceWithMeta } from '~/types/reference'
defineProps<{
  references: ReferenceWithMeta[] | undefined
}>()
</script>
