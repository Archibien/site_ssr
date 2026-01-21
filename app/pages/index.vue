<template>
  <h2>Test Home :</h2>
  <ul>
    <li>
      <NuxtLink to="/typologies/extension-maison/" no-prefetch>Typology Extension Maison</NuxtLink>
    </li>
    <li>
      <NuxtLink to="/france/bretagne/22-cotes-darmor/" no-prefetch
        >Department Côtes d'Armor</NuxtLink
      >
    </li>
    <li>
      <NuxtLink
        to="/france/provence-alpes-cote-dazur/13-bouches-du-rhone/13001-marseille/architectes/"
        no-prefetch
        >Architectes Marseille</NuxtLink
      >
    </li>
  </ul>
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
