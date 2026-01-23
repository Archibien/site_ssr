<template>
  <NuxtLoadingIndicator color="#2469ff" />

  <UiNavbar />
  <NuxtPage />
  <UiFooter />
</template>

<script setup lang="ts">
const description =
  'Un projet de construction, rénovation, extension ? Avec Archibien, trois architectes dessinent et chiffrent votre projet. Comparez, choisissez !'
const img = '/img/logo-archibien.jpg'
const title = 'Trois architectes dessinent votre projet'
const route = useRoute()
useSeoMeta({
  title,
  titleTemplate: '%s | Archibien',
  robots: 'index, follow',
  description,
  ogTitle: title,
  ogSiteName: 'Archibien',
  ogUrl: route.fullPath,
  ogDescription: description,
  ogImage: img,
  ogImageAlt: 'Le logo Archibien',
  ogLocale: 'fr_FR',
  twitterImage: img,
  twitterTitle: title,
  twitterDescription: description,
  twitterImageAlt: 'Le logo Archibien',
  twitterCard: 'summary_large_image',
})
</script>
