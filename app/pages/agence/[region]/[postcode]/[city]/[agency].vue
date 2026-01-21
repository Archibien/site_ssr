<script setup lang="ts">
// import { useRoute } from "#imports"

const route = useRoute()
const config = useRuntimeConfig()

// const agencyUrl = `/agence/${route.params.agency}/`;
const agencyUrl = route.path

const { data: agency, error } = await useFetch('/api/agency', {
  server: true,
  query: { url: agencyUrl },
})
/**
 * Handle deleted agencies correctly (SEO)
 */
if (error.value?.statusCode === 410) {
  throw createError({
    statusCode: 410,
    statusMessage: 'Agency no longer exists',
  })
}

if (error.value) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Unable to load agency',
  })
}

const renderedAt = useState('rendered-at', () => new Date().toISOString())
</script>

<template>
  <main v-if="agency">
    <h1>{{ agency.name }}</h1>
    <p>{{ agency.description }}</p>
    <div><SlidersReferences :references="agency.references" /></div>
    <p><strong>Rendered at:</strong> {{ renderedAt }}</p>
  </main>
</template>
