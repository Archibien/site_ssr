<template>
  <section>
    <div v-for="agency in agencies" :key="agency.name">
      <NuxtLink :to="agency.url">
        {{ agency.name }}
      </NuxtLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { AgencyWithMeta } from '~/types/agency'
defineProps<{
  agencies: AgencyWithMeta[] | undefined
}>()
</script>
