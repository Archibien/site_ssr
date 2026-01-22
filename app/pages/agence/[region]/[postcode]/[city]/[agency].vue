<script setup lang="ts">
import { departments } from '~/data/departments'

const route = useRoute()
const config = useRuntimeConfig()
const agencyUrl = route.path
const { data: agency, error } = await useFetch('/api/agency', {
  server: true,
  query: { url: agencyUrl },
})

/**
 * Handle deleted agencies correctly (SEO)
 */
if (error.value?.statusCode === 410) {
  throw createError({
    statusCode: 410,
    statusMessage: 'Agency no longer exists',
  })
}

if (error.value) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Unable to load agency',
  })
}

const renderedAt = useState('rendered-at', () => new Date().toISOString())
const depCode = ref('')
const contactModalDisplayed = ref(false)

onMounted(async () => {
  // This is done on client only to avoid a hydration mismatch : on server side we can't know in advance
  // if we should keep the local/globalphone number or not
  if (route.params.postcode.startsWith('202')) {
    depCode.value = '2b'
  } else if (route.params.postcode.startsWith('20')) {
    depCode.value = '2a'
  } else {
    depCode.value = route.params.postcode.split('-')[0].slice(0, 2)
  }
  const department = departments[depCode.value]
  setPhone(department.phone)
})
</script>

<template>
  <div class="relative flex md:mt-16 mt-12">
    <div class="banner-image">
      <div
        class="absolute inset-0 bg-cover bg-no-repeat bg-center"
        :style="{
          backgroundImage: `url(${agency?.banner.hd || agency?.banner.original})`,
          zIndex: 1,
        }" />
    </div>
    <div class="absolute bottom-0 highlight-top bg-gray-100" style="z-index: 3" />
  </div>

  <section class="w-full -mt-16 z-10 relative">
    <div class="mx-auto">
      <div class="highlight-top highlight-narrow bg-gray-200" />
      <div class="py-l sm:py-xl px-4 sm:px-l text-center bg-gray-200">
        <div
          class="mx-auto rounded-full shadow-sm w-20 h-20 sm:w-maximum sm:h-maximum mb-m overflow-hidden flex">
          <img
            :src="
              agency?.is_subscribed
                ? agency?.logo.default || agency?.logo.original
                : '/img/placeholders/logo-archibien.jpg'
            "
            :alt="agency?.metadata.logo.alt"
            :title="agency?.metadata.logo.title"
            fetch-priority="high"
            width="120"
            height="120"
            class="object-cover" />
        </div>
        <h1 class="font-semibold text-title-xl mb-xs text-darkblue">
          {{ agency?.name }}
        </h1>
        <h2 class="text-darkblue text-title-l mb-l">
          {{ agency?.metadata.agency_title }}
        </h2>
      </div>
      <div class="highlight-bottom highlight-narrow bg-gray-200" />
    </div>
  </section>

  <section class="mt-xl lg:mt-xxl app-container">
    <div class="flex flex-col md:flex-row justify-between items-start">
      <div class="w-full md:w-2/3 md:pr-l">
        <div class="mb-l sm:mb-xl">
          <h3 class="font-semibold text-darkblue mb-2 sm:mb-xs text-title-m">
            À propos de {{ agency.name }}
          </h3>
          <ClientOnly>
            <UiReadMore v-if="agency.description" :content="agency.description" />
          </ClientOnly>
        </div>
        <div v-if="agency.is_subscribed" class="mb-l sm:mb-xl">
          <h3 class="font-semibold text-darkblue mb-s sm:mb-m text-title-s">
            L'équipe {{ agency.name }}
          </h3>
          <div class="flex flex-wrap">
            <CardsMember
              v-for="(archi, index) in agency.architectes"
              :key="index"
              :data="archi"
              :meta="agency.metadata?.architectes[index]" />
          </div>
        </div>

        <div class="mb-s sm:mb-xs">
          <h4 class="text-title-s text-darkblue font-semibold mb-m">
            Vous souhaitez solliciter {{ agency.name }} ?
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
              icon="message"
              variant="secondary"
              class="btn-block"
              @click="() => (contactModalDisplayed = true)">
              Écrire à {{ agency.name }} !
            </UiButtonIcon>
          </div>
        </div>
      </div>
      <div class="bg-white w-full md:w-1/3 p-5">
        <h3 class="font-semibold text-darkblue mb-xs text-title-m">
          Les expertises de {{ agency.name }}
        </h3>
        <p v-if="agency?.type == 'archi_in_order'" class="text-gray-600 mb-m sm:mb-l">
          <span
            >{{ agency?.name }} est inscrit à l'Ordre des Architectes{{
              agency?.is_subscribed ? ` sous le numéro ${agency?.order_num}` : ''
            }}.</span
          >
        </p>

        <h4 class="font-semibold text-title-s text-darkblue sm:mb-xs mb-2">Types d'intervention</h4>
        <div class="mb-m sm:mb-l flex items-center content-start flex-wrap text-gray-600">
          {{ agency.project_types.filter((item) => item != 'Autre').join(', ') }}
        </div>

        <h4 class="font-semibold text-title-s text-darkblue sm:mb-xs mb-2">Nature des projets</h4>
        <p class="mb-m sm:mb-l text-gray-600">
          {{ agency.project_categories.filter((item) => item != 'Autre').join(', ') }}
        </p>
        <h4 class="font-semibold text-title-s text-darkblue sm:mb-xs mb-2">
          Compétences particulières
        </h4>
        <p class="mb-m sm:mb-l text-gray-600">
          {{ agency.tags.join(', ') }}
        </p>
        <p>Debug (rendered at): {{ renderedAt }}</p>
      </div>
    </div>
  </section>

  <section class="my-xl lg:my-xxl">
    <div class="app-container mb-m sm:mb-l">
      <h3 class="text-darkblue font-semibold text-title-l sm:mb-xs mb-2">
        Le book de {{ agency.name }}
      </h3>
      <p class="text-gray-600 max-w-title">
        Voici le book du cabinet {{ agency.name }}. Ce portfolio comprend une sélection de travaux
        et références de l'agence.
      </p>

      <div class="my-m sm:my-l grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        <CardsReferenceBook
          v-for="(realisation, index) in agency?.references"
          :key="index"
          :realisation="realisation" />
      </div>
    </div>
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

  <section v-if="agency.similar_agencies.length > 0" class="mt-xl lg:mt-xxl">
    <div class="app-container">
      <h2 class="text-darkblue font-semibold text-title-l mb-2">Besoin d'inspiration ?</h2>
      <p class="text-gray-600 mb-l max-w-[36rem]">
        Nos dizaines d’architectes partenaires sont sélectionnés pour la qualité de leur travail, en
        conception et en maîtrise d'œuvre, et interviennent sur tous types de projets.
      </p>
      <h4 class="font-semibold text-title-m text-darkblue mb-m sm:mb-l">
        Quelques agences d'architecture similaires à {{ agency.name }}
      </h4>
    </div>
    <SlidersAgencies :agencies="agency.similar_agencies" class="mb-m sm:mb-l" />

    <!-- TODO: reactivate this slider -->
    <!-- <div v-if="nearReferences.length > 0" class="app-container mt-l">
        <h4 class="font-semibold text-title-m text-darkblue mb-m sm:mb-l">
          Projetez-vous dans les réalisations de nos cabinets d’architecture partenaires
        </h4>
      </div>
      <realisations-carousel v-if="nearReferences.length > 0" class="mb-l" :realisations="nearReferences" /> -->
  </section>

  <SectionsContact class="mt-xl lg:mt-xxl" />

  <SectionsRating bg="bg-gray-100" />

  <div class="mb-l sm:mb-xl app-container">
    <h4 class="text-darkblue mb-min font-semibold">
      {{ agency?.metadata.map_title }}
    </h4>
    <p class="text-sm text-gray-600 mb-m">
      <span>Le positionnement sur la carte est approximatif.</span>
    </p>

    <div id="googlemaps_id" ref="googlemaps" class="w-full h-[300px] sm:h-[500px]" />
    <p class="text-gray-600 text-sm mt-s max-w-title">
      Le contenu présent dans cette page a été édité et publié par {{ agency.name }}.
      {{ agency.name }} est une structure juridiquement indépendante d'Archibien.com.
    </p>
    <p class="text-gray-600 text-sm mt-s max-w-title">
      Pour nous signaler tout contenu déplacé ou offensant merci d'utiliser le formulaire de contact
      du site internet en précisant l'adresse web de cette page.
    </p>
  </div>

  <SectionsMainCities class="mt-xl lg:mt-xxl" />

  <!-- <AppContactModal v-model="contactModalDisplayed" :agency="agency" /> -->
  <!-- <TransitionRoot
    :show="contactModalDisplayed"
    as="template"
    enter="duration-300 ease-out"
    enter-from="opacity-0"
    enter-to="opacity-100"
    leave="duration-200 ease-in"
    leave-from="opacity-100"
    leave-to="opacity-0">
    <LazyAppTestModal v-model="contactModalDisplayed" :agency="agency" />
  </TransitionRoot> -->
</template>
