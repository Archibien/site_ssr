<template>
  <div class="mt-4 sm:mt-16">
    <div class="px-4 sm:px-8 my-xxl lg:my-maximum">
      <h1 class="text-title-xl text-darkblue font-semibold text-center">Médias</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-l sm:my-xl">
        <CardsMedia v-for="(media, index) in medias" :key="index" :media="media" />
      </div>
      <p class="text-gray-600 text-center">
        Vous êtes journaliste ou influenceur ? Nous pouvons vous rencontrer et vous présenter des
        projets en exclusivité ! 👉&nbsp;
        <a
          href="mailto:communication@archibien.com"
          class="hover:text-blue-600 text-blue font-semibold"
          >communication@archibien.com</a
        >
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import medias from '~/data/medias.json'
const description =
  'Archibien dans les médias : dans les journaux, sur internet, à la radio, à la télévision… Découvrez ce que la presse dit de nos activités.'

useSeoMeta({
  title: 'Archibien dans les médias',
  ogTitle: 'Archibien dans les médias',
  twitterTitle: 'Archibien dans les médias',
  description,
  ogDescription: description,
  twitterDescription: description,
})
</script>
