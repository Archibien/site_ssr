<template>
  <NuxtLoadingIndicator color="#2469ff" />

  <UiNavbar />
  <NuxtPage />
  <UiFooter />
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Trois architectes dessinent votre projet',
  titleTemplate: '%s | Archibien',
  robots: 'index, follow',
  description:
    'Un projet de construction, rénovation, extension ? Avec Archibien, trois architectes dessinent et chiffrent votre projet. Comparez, choisissez !',
  ogImage: '/img/logo-archibien.jpg',
  twitterImage: '/img/logo-archibien.jpg',
  twitterTitle: 'Trois architectes dessinent votre projet',
  twitterDescription:
    'Un projet de construction, rénovation, extension ? Avec Archibien, trois architectes dessinent et chiffrent votre projet. Comparez, choisissez !',
  twitterCard: 'summary_large_image',
  ogLocale: 'fr_FR',
  ogImageAlt: 'Le logo Archibien',
  twitterImageAlt: 'Le logo Archibien',
})
</script>
