<template>
  <section>
    <div class="highlight-top bg-gray-200" />
    <div class="bg-gray-200 py-l sm:py-xl">
      <div class="app-container">
        <h2 class="text-title-m font-semibold text-darkblue mb-l">À propos d'Archibien</h2>
        <h5 class="text-title-s font-semibold text-darkblue mb-m">
          Trouvez le bon Architecte partout en France
        </h5>
        <div class="grid lg:grid-cols-3 grid-cols-2 gap-4">
          <NuxtLink
            v-for="(city, index) in cities"
            :key="index"
            :to="city.url"
            class="text-gray-600 hover:text-link transition-colors duration-200 ease-in-out"
            no-prefetch>
            {{ city.city }}
          </NuxtLink>
        </div>
      </div>
    </div>
    <div class="highlight-bottom bg-gray-200" />
  </section>
</template>

<script setup lang="ts">
import cities from '~/assets/js/cities'
</script>
