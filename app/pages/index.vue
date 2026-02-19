<template>
  <Head>
    <NuxtLink
      rel="preload"
      as="image"
      href="/img/hero-768.jpg"
      imagesrcset="
      /img/hero-480.jpg 480w,
      /img/hero-768.jpg 768w,
      /img/hero-1200.jpg 1200w
    "
      imagesizes="100vw" />
  </Head>
  <section class="bg-gray-200">
    <Hero background="bg-gray-200" lien-archi />
    <SectionsMedias class="md:-mt-m" />
    <section class="pt-m lg:pt-l pb-xl lg:pb-xxl app-container">
      <h2 class="text-darkblue font-semibold text-title-l mb-min sm:mb-xs text-center">
        Comparez et choisissez votre architecte avec&nbsp;Archibien
      </h2>
      <h3 class="text-darkblue text-title-m mb-l sm:mb-xl text-center">
        Notre métier : vous accompagner dans votre projet architectural
      </h3>
      <SectionsServices class="mb-xl" />
      <div
        class="flex flex-col md:flex-row justify-center items-center md:space-x-2 space-x-0 space-y-2 md:space-y-0 mt-l">
        <UiButton size="l" block type="nuxt-link" to="/tarifs/">
          Découvrez nos services et les tarifs
        </UiButton>
        <UiButton
          size="l"
          block
          variant="secondary"
          type="link"
          to="https://meetings.hubspot.com/simon18/rdv-telephonique-20-minutes">
          Prenons rendez-vous
        </UiButton>
      </div>
    </section>
  </section>
  <div class="highlight-bottom bg-gray-200" />

  <!-- Map section
  <section class="max-w-5xl mx-auto mt-xl lg:mt-xxl">
    <div ref="mapContainer" style="min-height: 400px">
      <ClientOnly>
        <MapView v-if="mapVisible" :initial-bounds="initialBounds" />
      </ClientOnly>
    </div>
  </section>
  -->

  <!-- Project section -->
  <section class="mt-xl lg:mt-xxl">
    <h2 class="text-darkblue font-semibold text-title-m app-container">Quel est votre projet ?</h2>
    <SectionsTypologies class="mt-m" />
  </section>

  <SectionsInspirations />

  <SectionsRating class="mt-xl lg:mt-xxl" />

  <section class="mt-xl lg:mt-xxl">
    <div class="app-container mb-m sm:mb-l">
      <h2 class="text-darkblue font-semibold text-title-m mb-2">Besoin d'inspiration ?</h2>
      <p class="text-gray-600 mb-l max-w-[36rem]">
        Nos dizaines d’architectes partenaires sont sélectionnés pour la qualité de leur travail, en
        conception et en maîtrise d'œuvre, et interviennent sur tous types de projets.
      </p>
      <h3 class="text-darkblue font-semibold text-title-m max-w-[36rem]">
        Parcourez les portfolios de nos agences d’architecture sélectionnées
      </h3>
    </div>
    <!-- Data is fetched server side so no Lazy here. What's important can be to lazy-load images. -->
    <SlidersAgencies :agencies="data.agencies" class="mb-l" />

    <div class="app-container">
      <h3 class="text-darkblue font-semibold text-title-m max-w-[36rem] mb-m sm:mb-l">
        Projetez-vous dans les réalisations de nos cabinets d’architecture partenaires
      </h3>
    </div>
    <!-- Data is fetched server side so no Lazy here. What's important can be to lazy-load images. -->
    <SlidersReferences :references="data.references" />
  </section>

  <SectionsContact class="mt-xl lg:mt-xxl" />
  <SectionsQuestions class="mt-xl lg:mt-xxl" />
  <SectionsMainCities class="mt-xl lg:mt-xxl" />
</template>

<script setup lang="ts">
import type { AgencyWithMeta } from '~/types/agency'
import type { ReferenceWithMeta } from '~/types/reference'

type Response = {
  agencies: AgencyWithMeta[]
  references: ReferenceWithMeta[]
}
// key: This prevents Nuxt from accidentally reusing or re-triggering fetches across routes.
const { data } = await useAsyncData<Response>(`carousels:home`, () => $fetch('/api/home'), {
  server: true,
})

// Client-side map logic
// const mapContainer = ref<HTMLElement | null>(null)
// const mapVisible = ref(false)

// Load map only when visible
// useIntersectionObserver(
//   mapContainer,
//   ([entry]) => {
//     if (entry.isIntersecting) {
//       mapVisible.value = true
//     }
//   },
//   { threshold: 0.1 }
// )
// const initialBounds = {
//   west: -6.67,
//   south: 43.66,
//   east: 13.38,
//   north: 50.32,
// }
</script>
