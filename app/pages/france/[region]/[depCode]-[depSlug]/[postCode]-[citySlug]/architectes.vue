<script setup lang="ts">
import baseQuestions from '~/assets/js/baseQuestions'
import type { AgencyWithMeta } from '~/types/agency'
import type { City } from '~/types/places'
import { cities as allCities } from '~/data/cities'
import { departments } from '~/data/departments'
import { questions } from '~/data/citiesQuestions'

const route = useRoute()
const { depCode, postCode, citySlug } = route.params

type DepResponse = {
  agencies: AgencyWithMeta[]
  references: any[]
} & City
const { data, error } = await useAsyncData<DepResponse>(
  `cities:${postCode}:${citySlug}`,
  () =>
    $fetch('/api/cities', {
      query: {
        post_code: postCode,
        city: citySlug,
      },
    }),
  { server: true }
)
const closeCities = allCities[depCode]
const prefix = closeCities.find((c) => c.url === route.path)?.prefix
const department = departments[depCode]
const title = ref(`Notre sélection des meilleurs architectes ${prefix}`)
const cityQuestions = { questions: [], title: '' }
if (postCode in questions) {
  cityQuestions.title = questions[postCode].title
  cityQuestions.questions = questions[postCode].questions
}

onMounted(async () => {
  // This is done on client only to avoid a hydration mismatch : on server side we can't know in advance
  // if we should keep the local/globalphone number or not
  setPhone(department.phone)
})
useSeoMeta({
  title,
  ogTitle: title,
  twitterTitle: title,
})
</script>

<template>
  <section class="bg-gray-200">
    <Hero :title="title" background="bg-gray-200" lien-archi />
    <SectionsMedias />
    <section class="py-xl lg:py-xxl app-container">
      <h2 class="text-darkblue font-semibold text-title-l mb-min sm:mb-xs text-center">
        Comparez et choisissez votre architecte {{ prefix }} avec Archibien
      </h2>
      <h3 class="text-darkblue text-title-m mb-l sm:mb-xl text-center">
        Notre métier : vous accompagner dans votre projet architectural
      </h3>
      <SectionsServices />
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
    <SectionsTypologies
      class="mt-m"
      :location="{ code: depCode, departmentSlug: department.departmentSlug }" />
  </section>

  <LazySectionsInspirations />

  <SectionsRating class="mt-xl lg:mt-xxl" />

  <section class="mt-xl lg:mt-xxl">
    <div v-if="data && data.agencies.length > 0" class="app-container mb-m sm:mb-l">
      <h2 class="text-darkblue font-semibold text-title-m mb-2">
        Notre sélection d’architectes {{ data?.prefix }} et alentours
      </h2>
      <p class="text-gray-600 mb-l max-w-[36rem]">
        Nos dizaines d’architectes et professionnels partenaires
        <NuxtLink :to="department?.url" class="text-link">
          {{ department?.prefix2 }} {{ department?.department }}
        </NuxtLink>
        sont sélectionnés pour la qualité de leur travail, en conception et en maîtrise d'œuvre, et
        interviennent sur tous types de projets. Voici une sélection non exhaustive des agences
        d’architecture avec qui nous collaborons.
      </p>
      <h3 class="text-darkblue font-semibold text-title-m max-w-[36rem]">
        Parcourez les portfolios de nos agences d’architecture sélectionnées près de
        {{ data.city }}
      </h3>
    </div>

    <SlidersAgencies
      v-if="data && data.agencies.length > 0"
      class="mb-l"
      :agencies="data.agencies" />

    <div v-if="data && data.references.length > 0" class="app-container">
      <h3 class="text-darkblue font-semibold text-title-m max-w-[36rem] mb-m sm:mb-l">
        Projetez-vous dans les réalisations de nos cabinets d’architecture partenaires autour de
        {{ data.city }}
      </h3>
    </div>
    <SlidersReferences v-if="data && data.references.length > 0" :references="data.references" />
  </section>

  <SectionsContact class="mt-xl lg:mt-xxl" />

  <section
    class="mt-xl lg:mt-xxl app-container"
    :class="closeCities && closeCities.length < 2 && 'mb-xxl lg:mb-maximum'">
    <div class="flex flex-wrap justify-between">
      <h2 class="text-title-m font-semibold text-darkblue w-full sm:w-1/3 mb-m sm:mb-0">
        Archibien répond à vos questions
      </h2>
      <UiCollapsableQuestions :questions="baseQuestions" class="w-full sm:w-2/3" />
    </div>
    <div v-if="cityQuestions.title" class="flex flex-wrap justify-between mt-xxl">
      <h2 class="text-title-m font-semibold text-darkblue w-full sm:w-1/3 mb-m sm:mb-0">
        {{ cityQuestions.title }}
      </h2>
      <UiCollapsableQuestions :questions="cityQuestions.questions" class="w-full sm:w-2/3" />
    </div>
  </section>

  <LazySectionsCities
    v-if="closeCities && closeCities.length > 1"
    class="mt-xl lg:mt-xxl"
    :cities="closeCities">
    <NuxtLink :to="department?.url" class="text-blue hover:text-blue-600">
      {{ department?.prefix2 }} {{ department?.department }} {{ depCode }}
    </NuxtLink>
  </LazySectionsCities>
</template>
