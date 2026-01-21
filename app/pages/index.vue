<template>
  <h2>Test Home :</h2>
  <NuxtLink to="/typologies/extension-maison/" no-prefetch>Typology Extension Maison</NuxtLink>
  <!-- Data is fetched server side so no Lazy here. What's important can be to lazy-load images. -->
  <div><SlidersAgencies :agencies="agencies" /></div>
</template>

<script setup lang="ts">
// key: This prevents Nuxt from accidentally reusing or re-triggering fetches across routes.
const { data: agencies } = await useAsyncData(
  `agencies-carousel:home`,
  () => $fetch('/api/agencies'),
  { server: true }
)
</script>
