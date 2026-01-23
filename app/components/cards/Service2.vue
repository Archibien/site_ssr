<template>
  <NuxtLink
    to="/services/etude-de-faisabilite/"
    tag="div"
    :class="`card-${state} cursor-pointer flex bg-white p-8 flex-col lg:flex-row sm:p-l items-start lg:items-center hover:shadow-md transition-shadow duration-300 ease-in-out`">
    <div class="flex-1 w-full mb-m lg:mb-0">
      <h4 class="font-semibold text-title-m text-darkblue mb-xs lg:mb-m mr-xl">
        Étude de faisabilité
      </h4>
      <p class="text-sm mb-xs lg:mb-m text-gray-600">
        À partir de <span class="block font-semibold text-title-m text-darkblue">600€</span>
      </p>
      <UiButton size="s" :variant="state">En savoir plus</UiButton>
    </div>
    <div class="flex-1 mb-m lg:mb-0 text-gray-600">
      <p class="mb-xs lg:mb-s max-w-title text-base">
        Définition des besoins, étude réglementaire, technique, économique et de planning, pour
        valider en schémas et en images la faisabilité de votre projet.
      </p>
      <ul class="text-sm">
        <li class="flex items-top mb-min">
          <IconsCheck class="w-s mr-xs" /> Réalisation de votre cahier des charges
        </li>
        <li class="flex items-top mb-min">
          <IconsCheck class="w-s mr-xs" /> Étude par un architecte local sélectionné
        </li>
        <li class="flex items-top">
          <IconsCheck class="w-s mr-xs" /> Rédaction d’un rapport de synthèse de projet
        </li>
      </ul>
    </div>
    <img
      src="/img/illustrations/services/image-service-2.png"
      alt="Un chargé de projet Archibien effectue une étude de faisabilité pour un prospect"
      class="block max-h-64 lg:ml-xl order-first lg:order-last mb-s lg:mb-0" />
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps({
  state: {
    type: String,
    default: 'secondary',
  },
})
</script>
