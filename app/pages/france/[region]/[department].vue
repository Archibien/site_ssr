<script setup lang="ts">
import type { AgencyWithMeta } from '~/types/agency'
import { departments } from '~/data/departments'
import type { Department } from '~/types/places'
import { cities as allCities } from '~/data/cities'
import { useIntersectionObserver } from '@vueuse/core'

const route = useRoute()
const code = route.params?.department.split('-')[0]
type DepResponse = {
  agencies: AgencyWithMeta[]
  references: any[]
}
const { data } = await useAsyncData<DepResponse>(
  `departments:${code}`,
  () =>
    $fetch(`/api/departments`, {
      query: { code },
    }),
  { server: true }
)

const dep = departments[code] as Department

const depWithPrefix = computed(() => {
  return dep.prefix1.endsWith("'")
    ? `${dep.prefix1}${dep.department}`
    : `${dep.prefix1} ${dep.department}`
})
const title = shallowRef(`Notre sélection des meilleurs architectes ${depWithPrefix.value}`)
const cities = allCities[code]

// Client-side map logic
/* -----------------------
   State
------------------------ */
const mapContainer = ref<HTMLElement | null>(null)
const mapVisible = ref(false)

/* -----------------------
   Load map only when visible
------------------------ */
useIntersectionObserver(
  mapContainer,
  ([entry]) => {
    if (entry.isIntersecting) {
      mapVisible.value = true
    }
  },
  { threshold: 0.1 }
)
const renderedAt = useState('rendered-at', () => new Date().toISOString())
useSeoMeta({
  title,
})
</script>

<template>
  <section class="bg-gray-200">
    <Hero :title="title" background="bg-gray-200" lien-archi />
    <SectionsMedias />
    <section class="py-xl lg:py-xxl app-container">
      <h2 class="text-darkblue font-semibold text-title-l mb-min sm:mb-xs text-center">
        Comparez et choisissez votre architecte {{ dep.prefix2 }} {{ dep.department }} avec
        Archibien
      </h2>
      <h3 class="text-darkblue text-title-m mb-l sm:mb-xl text-center">
        Notre métier : vous accompagner dans votre projet architectural
      </h3>
      <SectionsServices class="mb-xl" />
      <div
        class="flex flex-wrap items-center justify-center lg:space-x-2 space-x-0 space-y-2 lg:space-y-0 mt-l">
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

  <!-- Project section -->
  <section class="mt-xl lg:mt-xxl">
    <h2 class="text-darkblue font-semibold text-title-m app-container">Quel est votre projet ?</h2>
    <SectionsTypologies class="mt-m" :location="{ code, departmentSlug: dep.departmentSlug }" />
  </section>

  <SectionsInspirations />

  <SectionsRating class="mt-xl lg:mt-xxl" />

  <section class="mt-xl lg:mt-xxl">
    <div v-if="data && data.agencies.length > 0" class="app-container mb-m sm:mb-l">
      <h2 class="text-darkblue font-semibold text-title-m mb-2">
        Notre sélection d’architectes {{ depWithPrefix }}
      </h2>
      <p class="text-gray-600 mb-l max-w-[36rem]">
        Nos dizaines d’architectes et professionnels partenaires {{ depWithPrefix }} sont
        sélectionnés pour la qualité de leur travail, en conception et en maîtrise d'œuvre, et
        interviennent sur tous types de projets. Voici une sélection non exhaustive des agences
        d’architecture avec qui nous collaborons.
      </p>
      <h3 class="text-darkblue font-semibold text-title-m max-w-[36rem]">
        Parcourez les portfolios de nos agences d’architecture sélectionnées
        {{ dep.prefix2 }} {{ dep.department }}
      </h3>
    </div>

    <SlidersAgencies
      v-if="data && data.agencies.length > 0"
      class="mb-l"
      :agencies="data.agencies" />

    <div v-if="data && data.references.length > 0" class="app-container">
      <h3 class="text-darkblue font-semibold text-title-m max-w-[36rem] mb-m sm:mb-l">
        Projetez-vous dans les réalisations de nos cabinets d’architecture partenaires
        {{ depWithPrefix }}
      </h3>
    </div>
    <SlidersReferences v-if="data && data.references.length > 0" :references="data.references" />
  </section>

  <LazySectionsContact class="mt-xl lg:mt-xxl" />

  <LazySectionsQuestions class="mt-xl lg:mt-xxl" />

  <section class="max-w-[1024px] mx-auto mb-4 mt-20">
    <div ref="mapContainer" style="min-height: 400px">
      <ClientOnly>
        <MapView v-if="mapVisible" :initial-bounds="dep.bounds" />
      </ClientOnly>
    </div>
    <p>Debug (rendered at) : {{ renderedAt }}</p>
  </section>

  <LazySectionsCities
    class="mt-xl lg:mt-xxl"
    :cities="cities"
    :location="{
      dptCode: code,
      prefix2: dep.prefix2,
      department: dep.department,
      departmentSlug: dep.departmentSlug,
    }"
    :local-typologies="true">
    {{ dep.prefix2 }} {{ dep.department }} {{ code }}
  </LazySectionsCities>
</template>
