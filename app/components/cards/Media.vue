<template>
  <div class="flex items-center space-x-4">
    <img
      :src="`/img/medias/${media.logo.url_square}`"
      :alt="media.logo.alt"
      :title="media.logo.title"
      class="max-w-[100px] h-[100px] object-contain" />
    <div>
      <p class="text-darkblue text-title-m font-semibold mb-xs">
        {{ media.name }}
      </p>
      <a
        class="hover:text-blue-600 text-blue font-semibold"
        target="_blank"
        rel="noopener"
        title="Lire l'article sur {{ media.name }}"
        :href="media.url"
        >Voir l'article</a
      >
      <p class="italic text-gray-600">"{{ media.description }}"</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Media } from '~/types/media'
defineProps<{ media: Media }>()
</script>
