<template>
  <NuxtLink
    to="/services/consultation/"
    tag="div"
    :class="`card-${state} cursor-pointer flex bg-white p-8 flex-col lg:flex-row sm:p-l items-start lg:items-center hover:shadow-md transition-shadow duration-300 ease-in-out`">
    <div class="flex-1 w-full mb-m lg:mb-0">
      <div
        class="mt-xs inline-block mb-xs badge-active py-1 px-min sm:py-min sm:px-2 font-semibold text-blue bg-blue-100 rounded-md">
        <p>Courtage en architectes</p>
      </div>

      <h4 class="font-semibold text-title-m text-darkblue mb-xs lg:mb-m mr-xl">
        Trois architectes locaux dessinent et chiffrent votre projet
      </h4>
      <p class="text-sm mb-xs lg:mb-m text-gray-600">
        À partir de <span class="block font-semibold text-title-m text-darkblue">2 900€</span>
      </p>
      <UiButton size="s" :variant="state">En savoir plus</UiButton>
    </div>
    <div class="flex-1 mb-m lg:mb-0 text-gray-600">
      <p class="mb-xs lg:mb-s max-w-title text-base">
        Trois propositions avec plans, images, planning et budget, réalisés par trois agences
        d’architecture locales sur la base d’un cahier des charges, de rencontres et d’échanges.
      </p>
      <ul class="text-sm">
        <li class="flex items-top mb-min">
          <Check class="w-s mr-xs" :font-controlled="false" /> Réalisation de votre cahier des
          charges
        </li>
        <li class="flex items-top mb-min">
          <Check class="w-s mr-xs" :font-controlled="false" /> Rencontre et visite par 3 architectes
          locaux sélectionnés
        </li>
        <li class="flex items-top">
          <Check class="w-s mr-xs" :font-controlled="false" /> Réception des 3 propositions
          sur-mesure pour votre projet
        </li>
      </ul>
    </div>
    <img
      src="/img/illustrations/services/image-service-1.png"
      alt="Trois architectes présentant un projet"
      class="block max-h-64 lg:ml-xl order-first lg:order-last mb-s lg:mb-0" />
  </NuxtLink>
</template>

<script setup lang="ts">
import Check from '~/assets/icons/check.svg'
defineProps({
  state: {
    type: String,
    default: 'secondary',
  },
})
</script>

<style>
@reference '~/assets/css/main.css';

.card-primary {
  @apply border border-blue;
}

.card-primary h4,
.card-primary span {
  @apply text-blue;
}
</style>
