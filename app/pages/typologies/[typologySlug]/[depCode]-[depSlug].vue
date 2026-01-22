<script setup lang="ts">
import { departments } from '~/data/departments'
import typologies from '~/data/typologies.json'
import contents from '~/data/localTypologyContent'
import type { AgencyWithMeta } from '~/types/agency'
import type { City } from '~/types/places'
import type { ReferenceWithMeta } from '~/types/reference'
import type { Typology } from '~/types/typology'
import { cities as allCities } from '~/data/cities'

type Response = {
  agencies: AgencyWithMeta[]
  references: ReferenceWithMeta[]
}
const route = useRoute()
const { typologySlug, depCode } = route.params
const typology = typologies.find((c) => c.slug === typologySlug) as Typology
const { data, error } = await useAsyncData<Response>(
  `typologies:${typologySlug}:${depCode}`,
  () =>
    $fetch('/api/typologies', {
      query: { types: typology.actions.join(','), category: typology.category, code: depCode },
    }),
  { server: true }
)

if (error.value) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Unable to load typologies data',
  })
}
const dep = departments[depCode]
const typologyName = typology.name.toLowerCase()
const typologyPrefix = 'aeiouyh'.includes(typologyName[0]) ? "d'" : 'de'
const content = contents[typologySlug](dep.department, dep.cities, dep.prefix2)
let cities: City[] = []
if (depCode in allCities) {
  cities = allCities[depCode]
}

const description = ref(
  `Vous avez un projet ${typologyPrefix}${typology.name.toLowerCase()} ? Nos architectes du département interviennent à ${dep.cities.join(
    ', '
  )}, et dans la plupart des autres villes et villages du ${depCode}.`
)
const currentStep = ref(content.steps[0])
const currentStepIndex = ref(0)
const setCurrentStep = (index: number) => {
  currentStepIndex.value = index
  currentStep.value = content.steps[index]
}

// useSeoMeta({
//   title: `${typology.name} ${dep.prefix2} ${dep.department}`,
//   description,
// })

onMounted(async () => {
  // This is done on client only to avoid a hydration mismatch : on server side we can't know in advance
  // if we should keep the local/globalphone number or not
  setPhone(dep.phone)
})
</script>

<template>
  <Hero
    :image="typology.background_image.url"
    :image-alt="typology.background_image.alt"
    background="bg-gray-200">
    <div class="space-y-1">
      <div class="flex items-center space-x-2 text-sm text-white mb-m">
        <span>Interventions</span>
        <svg
          width="8"
          height="12"
          viewBox="0 0 8 12"
          class="fill-current"
          xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.06544 11.5597C1.0247 11.5191 0.992377 11.4708 0.970321 11.4177C0.948266 11.3645 0.936913 11.3075 0.936913 11.25C0.936913 11.1924 0.948266 11.1355 0.970321 11.0823C0.992377 11.0291 1.0247 10.9809 1.06544 10.9402L6.00657 5.99998L1.06544 1.05973C0.983294 0.977579 0.937142 0.866159 0.937142 0.74998C0.937142 0.633801 0.983294 0.522381 1.06544 0.44023C1.14759 0.358079 1.25902 0.311928 1.37519 0.311928C1.49137 0.311928 1.60279 0.358079 1.68494 0.44023L6.93494 5.69023C6.97569 5.73087 7.00801 5.77915 7.03007 5.8323C7.05212 5.88545 7.06348 5.94243 7.06348 5.99998C7.06348 6.05753 7.05212 6.11451 7.03007 6.16766C7.00801 6.22081 6.97569 6.26909 6.93494 6.30973L1.68494 11.5597C1.6443 11.6005 1.59603 11.6328 1.54287 11.6549C1.48972 11.6769 1.43274 11.6883 1.37519 11.6883C1.31765 11.6883 1.26067 11.6769 1.20752 11.6549C1.15436 11.6328 1.10608 11.6005 1.06544 11.5597Z" />
        </svg>
        <NuxtLink class="font-semibold cursor-pointer" :to="`/typologies/${typologySlug}/`">{{
          typology.name
        }}</NuxtLink>
      </div>
      <h1 class="font-semibold text-title-xl max-w-title">
        Votre {{ typology.name.toLowerCase() }} avec un architecte {{ dep.prefix2 }}
        {{ dep.department }}
      </h1>
    </div>
  </Hero>
  <section>
    <div class="bg-gray-200">
      <div class="app-container py-l md:py-xl">
        <h2 class="font-semibold text-darkblue text-title-l text-center mx-auto mb-min md:mb-xs">
          Archibien, le bon point de départ de votre projet
        </h2>
        <p class="text-gray-600 max-w-title mx-auto text-center">
          {{ description }}
        </p>
        <div
          class="flex flex-col md:flex-row justify-center items-center md:space-x-2 space-x-0 space-y-2 md:space-y-0 mt-l">
          <UiButton
            size="l"
            block
            type="link"
            to="https://meetings.hubspot.com/simon18/rdv-telephonique-20-minutes">
            Prenons rendez-vous
          </UiButton>
          <UiButton
            size="l"
            block
            variant="secondary"
            type="link"
            to="https://app.archibien.com/inscription/client/">
            Décrivez-nous votre projet
          </UiButton>
        </div>
      </div>
    </div>
    <div class="highlight-bottom bg-gray-200" />
  </section>
  <section class="app-container my-xl lg:my-xxl">
    <div class="mb-l md:mb-xl">
      <h3 class="font-semibold text-darkblue text-title-m text-center mx-auto mb-min md:mb-xs">
        {{ typology.title_page }} avec un architecte, les grandes étapes
      </h3>
      <p class="text-gray-600 max-w-title mx-auto text-center">
        Pour votre projet {{ typologyPrefix }}{{ typology.name.toLowerCase() }}, vous pouvez
        travailler avec un cabinet d’architectes pour vous accompagner sur la totalité d’un projet,
        ou seulement pour quelques étapes : conception, obtention du Permis de Construire,
        consultation des entreprises et/ou gestion du chantier.
      </p>
    </div>
    <div class="flex flex-col md:flex-row md:items-stretch justify-between">
      <div class="md:w-1/2 mb-m md:mb-0">
        <ul class="mr-xxl flex flex-col space-y-4 w-full md:w-auto">
          <li
            v-for="(step, index) in content.steps"
            :key="step.title"
            class="step-item flex rounded-md overflow-hidden hover:bg-gray-200 w-full transition-colors duration-150 ease-in-out cursor-pointer"
            :class="currentStepIndex == index && 'item-selected'"
            @click="() => setCurrentStep(index)">
            <div class="w-1 h-auto bg-gray-500 mr-xs md:mr-s" />
            <p class="py-xs md:py-s font-semibold text-gray-500">
              {{ step.title }}
            </p>
          </li>
        </ul>
      </div>
      <div class="step-content-item md:w-1/2">
        <h4 class="font-semibold text-darkblue text-title-s max-w-title mb-min md:mb-xs">
          {{ currentStep.title }}
        </h4>
        <p class="text-gray-600 max-w-title text-para" v-html="currentStep.content" />
      </div>
    </div>
  </section>
  <section v-if="data?.references.length > 0" class="mt-xl lg:mt-maximum mb-xl">
    <div class="app-container mb-m sm:mb-l">
      <h2 class="text-darkblue font-semibold text-title-l mb-m md:mb-l">Besoin d'inspiration ?</h2>
    </div>
    <div class="app-container">
      <h3 class="text-darkblue font-semibold text-title-m max-w-144 mb-m sm:mb-l">
        {{ content.title_inspiration[1] }}
      </h3>
    </div>
    <SlidersReferences :references="data?.references" />
  </section>

  <section class="mb-xxl md:mb-maximum">
    <h2 class="app-container font-semibold text-darkblue text-title-l max-w-title mb-l md:mb-xl">
      {{ content.listTitle }}
    </h2>
    <div class="typology-list flex flex-col space-y-16">
      <article
        v-for="item in content.list"
        :key="item.title"
        class="flex flex-col lg:flex-row items-center">
        <div class="lg:w-1/2 overflow-hidden w-full">
          <img
            :src="`/img/categories/list-images/${item.image.url}`"
            :alt="`${item.image.alt}`"
            loading="lazy"
            class="w-full h-full object-cover object-center max-h-typology" />
        </div>
        <div class="lg:w-1/2 py-l lg:py-xl">
          <h4 class="font-semibold text-darkblue text-title-m max-w-title mb-min lg:mb-xs">
            {{ item.title }}
          </h4>
          <p class="text-gray-600 max-w-title text-para">
            {{ item.text }}
          </p>
        </div>
      </article>
    </div>
  </section>
  <SectionsQuote
    v-if="content.blog"
    :quote="`${content.blog.quote}`"
    :author="`${content.blog.author}`"
    :url="`${content.blog.url}`"
    :image="`${content.blog.image}`"
    :image-alt="`${content.blog.imageAlt}`" />
  <section v-if="content.questions" class="app-container my-xl lg:my-xxl">
    <div class="flex flex-wrap justify-between">
      <h2 class="text-title-m font-semibold text-darkblue w-full mb-m lg:mb-0 sm:w-1/3 pr-xs">
        Questions fréquentes
      </h2>
      <UiCollapsableQuestions :questions="content.questions" class="w-full sm:w-2/3" />
    </div>
  </section>
  <section v-if="data.agencies.length > 0" class="mt-xl lg:mt-maximum mb-xl">
    <div class="app-container mb-m sm:mb-l">
      <h2 class="text-darkblue font-semibold text-title-l mb-m md:mb-l">Besoin d'inspiration ?</h2>
      <h3 class="text-darkblue font-semibold text-title-m max-w-xl">
        {{ content.title_inspiration[0] }}
      </h3>
    </div>
    <SlidersAgencies class="mb-l" :agencies="data.agencies" />
  </section>
  <SectionsContact
    class="mt-xl lg:mt-xxl"
    :title="`Vous souhaitez réaliser votre ${typology.name.toLowerCase()} avec Archibien ?`" />
  <section class="app-container mt-xl lg:mt-xxl">
    <h2 class="text-darkblue font-semibold text-title-l mb-min sm:mb-xs text-center">
      Archibien vous accompagne
    </h2>
    <h3 class="text-darkblue text-title-m mb-l sm:mb-xl text-center">
      Notre métier : accompagner les porteurs de projet
    </h3>
    <SectionsServices class="mb-xl" />
  </section>
  <SectionsCities
    class="mt-xl lg:mt-xxl"
    :cities="cities"
    :location="{
      dptCode: depCode,
      prefix2: dep.prefix2,
      department: dep.department,
      departmentSlug: dep.departmentSlug,
    }"
    :local-typologies="true">
    <NuxtLink :to="dep.url" class="text-blue hover:text-blue-600" no-prefetch>
      {{ dep.prefix2 }} {{ dep.department }} ({{ depCode }})
    </NuxtLink>
  </SectionsCities>
</template>
