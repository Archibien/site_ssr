<template>
  <NuxtLink
    to="/services/visite-conseil-ou-mise-en-relation/"
    tag="div"
    :class="`card-${state} cursor-pointer flex bg-white p-8 flex-col lg:flex-row sm:p-l items-start lg:items-center hover:shadow-md transition-shadow duration-300 ease-in-out`">
    <div class="flex-1 w-full mb-m lg:mb-0">
      <h4 class="font-semibold text-title-m text-darkblue mb-xs lg:mb-m mr-xl">
        Visite conseil par un architecte
      </h4>
      <p class="text-sm mb-xs lg:mb-m text-gray-600">
        À partir de <span class="block font-semibold text-title-m text-darkblue">240€</span>
      </p>
      <UiButton size="s" :variant="state">En savoir plus</UiButton>
    </div>
    <div class="flex-1 mb-m lg:mb-0 text-gray-600">
      <p class="mb-xs lg:mb-s max-w-title text-base">
        Besoin d’une visite avant achat, de l’avis d’un architecte en amont d’un projet ? Archibien
        vous organise une rencontre sur place avec le bon professionnel.
      </p>
      <ul class="text-sm">
        <li class="flex items-top mb-min">
          <IconsCheck class="w-s mr-xs" /> Visite par un architecte local sélectionné
        </li>
        <li class="flex items-top mb-min">
          <IconsCheck class="w-s mr-xs" /> Suivi du dossier sur l’application Archibien
        </li>
        <li class="flex items-top"><IconsCheck class="w-s mr-xs" /> Accompagnement de A à Z</li>
      </ul>
    </div>
    <img
      src="/img/illustrations/services/image-service-3.png"
      alt=""
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
