<script setup lang="ts">
import type { ReferenceDetails } from '~/types/reference'

const route = useRoute()
const config = useRuntimeConfig()

// const agencyUrl = `/agence/${route.params.agency}/`;
const referenceUrl = route.path

const { data, error } = await useFetch<ReferenceDetails>('/api/reference', {
  server: true,
  query: { url: referenceUrl },
})
/**
 * Handle deleted agencies correctly (SEO)
 */
if (error.value?.statusCode === 410) {
  throw createError({
    statusCode: 410,
    statusMessage: 'Reference no longer exists',
  })
}

if (error.value) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Unable to load reference',
  })
}

const renderedAt = useState('rendered-at', () => new Date().toISOString())
</script>

<template>
  <main v-if="data">
    <h1>{{ data.reference.title }}</h1>
    <p>{{ data.reference.description }}</p>

    <p>Autres refs:</p>
    <SlidersReferences :references="data.similar_references" />

    <p>Autres agences:</p>
    <SlidersAgencies :agencies="data.near_agencies" />
    <p><strong>Rendered at:</strong> {{ renderedAt }}</p>
  </main>
</template>
