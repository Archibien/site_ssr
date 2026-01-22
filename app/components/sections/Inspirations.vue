<template>
  <section class="my-xl sm:my-xxl">
    <div class="app-container mb-m sm:mb-l">
      <h3 class="text-darkblue font-semibold text-title-m max-w-[36rem] sm:mb-xs mb-2">
        {{ title }}
      </h3>
      <p class="text-gray-600">
        {{ subtitle }}
      </p>
    </div>

    <ClientOnly>
      <SectionsCarousel class="mb-l">
        <CardsBlog
          v-for="(inspi, index) in inspirations"
          :key="index"
          :inspi="inspi"
          class="basis-[250px] sm:basis-[328px] mr-5 container-slide" />
        <CardsBlogCardCallout class="basis-[250px] sm:basis-[328px] mr-5 container-slide" />
      </SectionsCarousel>
    </ClientOnly>
  </section>
</template>

<script setup lang="ts">
import inspirations from '~/data/inspirations.json'

defineProps({
  title: {
    type: String,
    default: "Quelques projets d'architecture passés par Archibien",
  },
  subtitle: {
    type: String,
    default:
      'Ils sont passés par Archibien. Comme eux, réalisez le projet dont vous rêvez, mais en mieux.',
  },
})
</script>
