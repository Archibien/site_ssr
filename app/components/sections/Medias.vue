<template>
  <div class="pt-5 py-l md:pt-xxl md:pb-l">
    <div class="app-container flex flex-wrap items-center justify-between">
      <p class="text-darkblue sm:w-auto w-full text-center sm:text-left mb-s sm:mb-0">
        Les médias parlent d'Archibien !
      </p>
      <NuxtLink to="/medias/" aria-label="Voir tous les articles de presse parlant d'Archibien">
        <img
          src="/img/medias/logo-lefigaro.png"
          alt="Logo du Figaro, journal Français."
          title="Archibien sur le Figaro en 2019"
          class="h-7 sm:h-8"
          fetch-priority="medium"
          decoding="async" />
      </NuxtLink>
      <NuxtLink to="/medias/" aria-label="Voir tous les articles de presse parlant d'Archibien">
        <img
          src="/img/medias/Logo-Liberation.png"
          alt="Logo de Liberation, journal Français."
          title="Archibien dans la presse Libération en 2019"
          class="h-7 sm:h-8"
          fetch-priority="medium"
          decoding="async" />
      </NuxtLink>
      <NuxtLink to="/medias/" aria-label="Voir tous les articles de presse parlant d'Archibien">
        <img
          src="/img/medias/Logo-RTL.png"
          alt="Logo de RTL"
          title="Archibien à la radio sur RTL en 2018"
          class="h-7 sm:h-8"
          fetch-priority="medium"
          decoding="async" />
      </NuxtLink>
      <NuxtLink to="/medias/" aria-label="Voir tous les articles de presse parlant d'Archibien">
        <img
          src="/img/medias/logo-ouest-france.png"
          alt="Logo de Ouest France"
          class="h-7 sm:h-8"
          title="Archibien dans la presse Ouest France en 2018"
          fetch-priority="medium"
          decoding="async" />
      </NuxtLink>
      <NuxtLink to="/medias/" aria-label="Voir tous les articles de presse parlant d'Archibien">
        <img
          src="/img/medias/logo-europe1.png"
          alt="Logo d'Europe 1, radio Française."
          title="Archibien sur Europe 1"
          class="h-7 sm:h-8"
          fetch-priority="medium"
          decoding="async" />
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    loading?: string
  }>(),
  {
    loading: 'eager',
  }
)
</script>
