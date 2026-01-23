<script setup lang="ts">
import type { ReferenceDetails } from '~/types/reference'
import typologies from '~/data/typologies.json'
import { typologies as typologiesLabels, tasks } from '~/assets/js/labels'
import { departments } from '~/data/departments'
import { computed, onMounted, ref } from 'vue'

const route = useRoute()
const referenceUrl = route.path
const { data, error } = await useFetch<ReferenceDetails>('/api/reference', {
  server: true,
  query: { url: referenceUrl },
})
/**
 * Handle deleted agencies correctly (SEO)
 */
if (error.value?.statusCode === 410) {
  throw createError({
    statusCode: 410,
    statusMessage: 'Reference no longer exists',
  })
}

if (error.value) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Unable to load reference',
  })
}

const showCopyAlert = ref(false)

// Computed properties
const typology = typologies.find((c) => c.slug === data.value?.typology_slug || null)
const category = computed(() => typologiesLabels[data.value?.reference.category])
const action = computed(() => tasks[data.value?.reference.type])

const actionWithPrefix = computed(() => {
  if (action.value === 'Autre') {
    return ''
  }
  const prefix = 'aeiouyh'.includes(data.value?.reference.type[0]) ? "d'" : 'de '
  return prefix + action.value.toLowerCase()
})
const actionCategory = computed(() => `${action.value} ${category.value.withPrefix}`)
const subtitle = computed(() => `${actionCategory.value} à ${data.value?.reference.city}`)

const similarTitle = computed(
  () =>
    `${actionWithPrefix.value} ${category.value.withPrefixPlural} autour de ${data.value?.reference.city}`
)

const typologyDisplayed = computed(() => {
  return typology ? typology.name : action.value
})
const typologyLink = computed(() => {
  if (!typology) {
    return false
  }
  if (data.value?.reference.city_url) {
    const depPath = data.value.reference.city_url.split('/')[3]
    return `/typologies/${typology.slug}/${depPath}/`
  } else {
    return `/typologies/${typology.slug}/`
  }
})

const phoneStore = usePhone()

onMounted(async () => {
  if (data?.value.reference.dep_code) {
    const department = departments[data?.value.reference.dep_code]
    setPhone(department.phone)
  }
})
useSeoMeta({
  title: `${actionCategory.value} à ${data.value?.reference.city} | ${data.value?.reference.agency.name} ${data.value?.reference.agency.type} | ${data.value?.reference.title}`,
  ogTitle: `${data.value?.reference.title} | ${data.value?.reference.agency.name}`,
  ogImage: data.value?.reference.banner.thumbnail,
  ogImageAlt: data.value?.reference.description.slice(0, 50),
  twitterTitle: `${data.value?.reference.title} | ${data.value?.reference.agency.name}`,
  twitterDescription: data.value?.reference.description.slice(0, 50),
  twitterImage: data.value?.reference.banner.thumbnail,
})
const renderedAt = useState('rendered-at', () => new Date().toISOString())
</script>

<template>
  <div class="relative flex md:mt-16 mt-12">
    <div class="banner-image">
      <div
        class="absolute bg-cover bg-no-repeat bg-center inset-0"
        :style="{
          backgroundImage: `url(${data.reference.banner.hd || data.reference.banner.original})`,
          zIndex: 1,
        }" />
    </div>
    <div class="absolute bottom-0 highlight-top bg-gray-100" style="z-index: 3" />
  </div>

  <section class="w-full -mt-16 z-10 relative">
    <div class="mx-auto">
      <div class="highlight-top highlight-narrow bg-gray-200" />
      <div class="py-l sm:py-xl px-4 sm:px-l text-center bg-gray-200">
        <h1 class="font-semibold text-title-xl mb-xs text-darkblue">
          {{ data.reference.title }}
        </h1>
        <h2 class="text-darkblue text-title-l mb-l">
          {{ subtitle }}
        </h2>
      </div>
      <div class="highlight-bottom highlight-narrow bg-gray-200" />
    </div>
  </section>

  <section class="mt-xl lg:mt-xxl app-container">
    <div class="flex flex-col md:flex-row justify-between items-start">
      <div class="w-full md:w-2/3 md:pr-l mb-m md:mb-0">
        <div class="flex items-center mb-l md:mb-xl">
          <NuxtLink :to="data.reference.agency.url" class="flex-shrink-0">
            <div
              class="mx-auto rounded-full shadow-sm w-xl h-xl overflow-hidden mr-5 flex justify-center items-center">
              <img
                :src="
                  data.reference.agency.is_subscribed
                    ? data.reference.agency.logo.default || data.reference.agency.logo.original
                    : '/img/placeholders/logo-archibien.jpg'
                "
                loading="lazy"
                :alt="data.meta.agency.alt"
                :title="data.meta.agency.title"
                class="w-full" />
            </div>
          </NuxtLink>
          <p class="text-gray-600">
            {{ `Une référence ${data.meta.archis ? 'de ' + data.meta.archis : ''}` }} du cabinet
            <NuxtLink
              :to="data.reference.agency.url"
              class="link-bold font-semibold text-blue hover:text-blue-700 transition-colors duration-200 ease-in-out">
              {{ data.reference.agency.name }}<span class="text-gray-600 font-regular">,</span>
            </NuxtLink>
            {{ data.meta.agency_locations }} et alentours.
          </p>
        </div>
        <div class="mb-s sm:mb-l">
          <h3 class="font-semibold text-darkblue mb-2 md:mb-xs text-title-m">
            Présentation par l'architecte, {{ data.reference.agency.name }}
          </h3>
          <ClientOnly>
            <UiReadMore :content="data.reference.description" />
          </ClientOnly>
        </div>
        <div class="mb-xxl sm:mb-xl">
          <p v-if="data.reference.agency.is_subscribed" class="text-sm text-gray-500 mb-l sm:mb-xl">
            Photo principale © {{ data.reference.copyright_banner }}
          </p>
          <h4 class="block text-title-s text-darkblue font-semibold mb-s md:mb-m">
            Cette réalisation vous plaît ? Partagez la !
          </h4>
          <div class="flex items-center flex-wrap space-x-1">
            <SocialShare
              network="facebook"
              :label="false"
              :title="`Découvrez cette inspiration de ${data.reference.agency.name}`"
              :image="data.reference.banner.thumbnail">
              <template #icon>
                <IconsFacebook class="h-6 w-6" :font-controlled="false" />
              </template>
            </SocialShare>
            <SocialShare
              network="x"
              :label="false"
              :title="`Découvrez cette inspiration de ${data.reference.agency.name}`"
              :image="data.reference.banner.thumbnail">
              <template #icon>
                <IconsX class="h-6 w-6" :font-controlled="false" />
              </template>
            </SocialShare>

            <SocialShare
              network="linkedin"
              :label="false"
              :title="`Découvrez cette inspiration de ${data.reference.agency.name}`"
              :image="data.reference.banner.thumbnail">
              <template #icon>
                <IconsLinkedIn class="h-6 w-6" :font-controlled="false" />
              </template>
            </SocialShare>
            <SocialShare
              network="pinterest"
              :label="false"
              :title="`Découvrez cette inspiration de ${data.reference.agency.name}`"
              :image="data.reference.banner.thumbnail">
              <template #icon>
                <IconsPinterest class="h-6 w-6" :font-controlled="false" />
              </template>
            </SocialShare>
            <SocialShare
              network="email"
              :label="false"
              :title="`Découvrez cette inspiration de ${data.reference.agency.name}`"
              :image="data.reference.banner.thumbnail" />
            <SocialShare
              network="whatsapp"
              :label="false"
              :title="`Découvrez cette inspiration de ${data.reference.agency.name}`"
              :image="data.reference.banner.thumbnail" />
          </div>
        </div>
        <div class="mb-s sm:mb-xs">
          <h4 class="text-title-s text-darkblue font-semibold mb-m">
            Vous souhaitez réaliser un projet similaire ?
          </h4>
          <div
            class="flex flex-col lg:flex-row items-center lg:space-x-2 space-x-0 space-y-2 lg:space-y-0">
            <UiButton
              size="l"
              type="link"
              to="https://meetings.hubspot.com/simon18/rdv-telephonique-20-minutes"
              class="btn-block">
              Prenons rendez-vous
            </UiButton>
            <UiButtonIcon
              size="l"
              type="link"
              :to="getPhoneLink()"
              icon="call"
              variant="secondary"
              class="btn-block">
              {{ phoneStore.phone }}
            </UiButtonIcon>
          </div>
        </div>
      </div>
      <div class="bg-white w-full md:w-1/3 p-5">
        <h4 class="block font-semibold text-darkblue mb-m sm:mb-l text-title-m">
          Caractéristiques
        </h4>
        <span class="block text-gray-600 uppercase text-caption mb-xs">Intervention</span>
        <div class="mb-s sm:mb-m flex items-center content-start flex-wrap">
          <NuxtLink v-if="typologyLink" :to="typologyLink" class="mr-2 mb-2">
            <AppBadge>{{ typologyDisplayed }}</AppBadge>
          </NuxtLink>
          <AppBadge v-else>
            {{ typologyDisplayed }}
          </AppBadge>
        </div>

        <span class="block text-gray-600 uppercase text-caption mb-min">Bâtiment</span>
        <span class="mb-s sm:mb-m block font-semibold text-darkblue">{{ category.short }}</span>

        <span class="block text-gray-600 uppercase text-caption mb-min">Client</span>
        <span class="mb-s sm:mb-m block font-semibold text-darkblue">{{
          data.reference.client_type
        }}</span>

        <span class="block text-gray-600 uppercase text-caption mb-min">Budget tout compris</span>
        <span class="mb-s sm:mb-m block font-semibold text-darkblue">{{
          data.reference.budget
        }}</span>

        <span class="block text-gray-600 uppercase text-caption mb-min">Rôle de l'architecte</span>
        <span class="mb-s sm:mb-m block font-semibold text-darkblue">{{
          data.reference.mission
        }}</span>

        <template v-if="data.reference.city_url">
          <span class="block text-gray-600 uppercase text-caption mb-min">Lieu</span>
          <NuxtLink
            :to="data.reference.city_url"
            class="text-blue font-semibold hover:text-blue-700 transition-colors duration-200 ease-in-out">
            {{ data.reference.city }}
          </NuxtLink>
        </template>
        <p>Debug (rendered at) : {{ renderedAt }}</p>
      </div>
    </div>
  </section>

  <section class="mt-xl lg:mt-xxl">
    <SlidersReferenceImages :images="data.reference.images" :meta="data.meta.images" />
  </section>

  <section class="mt-xl lg:mt-xxl">
    <div class="highlight-top bg-gray-200" />
    <div class="bg-gray-200 py-l sm:py-xl">
      <h2 class="text-darkblue font-semibold text-title-m app-container">
        Et vous, quel est votre projet ?
      </h2>
      <SectionsTypologies class="mt-m" />
    </div>
    <div class="highlight-bottom bg-gray-200" />
  </section>

  <section class="mt-xl lg:mt-xxl">
    <div class="mb-m sm:mb-l">
      <h2 class="app-container text-darkblue font-semibold text-title-l mb-2">
        Besoin d'inspiration ?
      </h2>
      <template v-if="data.similar_references.length > 0">
        <p class="app-container text-gray-600 mb-l max-w-xl">
          Nos dizaines d’architectes partenaires sont sélectionnés pour la qualité de leur travail,
          en conception et en maîtrise d'œuvre, et interviennent sur tous types de projets.
        </p>
        <div class="app-container">
          <h4 class="font-semibold text-title-m text-darkblue mb-m sm:mb-l">
            Découvrez plus de projets {{ similarTitle }}
          </h4>
        </div>
        <SlidersReferences class="mb-l" :references="data.similar_references" />
      </template>
      <h3
        v-if="data?.near_agencies.length > 0"
        class="app-container text-darkblue font-semibold text-title-m max-w-xl">
        Découvrez des agences similaires à {{ data.reference.agency.name }}
      </h3>
    </div>
    <SlidersAgencies
      class="mb-l"
      v-if="data.near_agencies.length > 0"
      :agencies="data.near_agencies" />
  </section>

  <SectionsContact class="mt-xl lg:mt-xxl" />

  <SectionsInspirations />

  <SectionsRating bg="bg-gray-100" />
  <SectionsMainCities />

  <div
    v-if="showCopyAlert"
    class="fixed flex items-center rounded-md justify-center bottom-5 inset-x-0 m-auto bg-blue text-white py-2 px-3 z-40 max-w-max">
    <svg
      class="text-white stroke-current h-5 w-5 mr-1"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
    </svg>
    <span>Lien copié !</span>
  </div>
</template>
