<template>
  <section>
    <div v-for="reference in references" :key="reference.url">
      <NuxtLink :to="reference.url">
        {{ reference.title }}
      </NuxtLink>
      <p>{{ reference.agency }}</p>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { ReferenceWithMeta } from '~/types/reference'
defineProps<{
  references: ReferenceWithMeta[] | undefined
}>()
</script>
