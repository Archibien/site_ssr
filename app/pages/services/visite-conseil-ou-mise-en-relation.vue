<template>
  <div>
    <section class="mt-xs md:mt-16 bg-red-0">
      <div class="app-container pt-xxl pb-xl sm:pb-xxl">
        <div class="flex flex-wrap-reverse items-center mb-m">
          <div class="w-full sm:w-1/2">
            <div class="flex items-center space-x-2 text-sm text-gray-600 mb-xs">
              <NuxtLink to="/tarifs/">Services</NuxtLink>
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
              <span class="text-gray-700 font-semibold cursor-pointer">Visite conseil</span>
            </div>
            <h1 class="text-red text-title-xl font-semibold mb-xl">
              Visite conseil par un architecte
            </h1>
            <ServiceSteps :steps="steps" color="red" @click="goTo" />
          </div>
          <div class="w-full sm:w-1/2">
            <img
              class="w-full h-auto shrink-0 mb-5 sm:mb-0 mx-auto max-w-sm sm:max-w-none p-m md:p-l"
              src="/img/illustrations/services/image-service-3.png"
              alt="Image 3 service visite conseil" />
          </div>
        </div>
      </div>
      <div class="highlight-top bg-gray-100" />
    </section>

    <section id="visite-conseil" class="app-container mt-xl sm:mt-xxl">
      <h2 class="text-title-l text-darkblue font-semibold mb-xs">
        Pourquoi faire une visite conseil par un architecte ?
      </h2>
      <p class="text-gray-600 mb-xs max-w-title">
        Vous vous apprêtez à acheter un bien, ou vous avez des questions sur un bien que vous
        possédez déjà ? Une visite conseil par un architecte peut vous permettre de déterminer les
        caractéristiques du bien, son potentiel et les risques et coûts associés.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-xxl mt-l">
        <div>
          <img
            src="/img/illustrations/services/visite-conseil/visite-conseil-step-1.png"
            class="h-32 mb-m" />
          <span class="block text-title-s font-semibold mb-xs text-darkblue"
            >Obtenez un avis sur la situation structurelle ou thermique d’un bien</span
          >
          <p class="text-gray-600 mb-xs">
            L’architecte pourra dresser un constat rapide sur les principes structurels, techniques
            et thermiques d’un bâtiment : savoir quels éléments sont porteurs, si le bâtiment est
            sain, pouvoir préfigurer les impacts de transformations lourdes ou légères que vous
            voudriez mener.
          </p>
        </div>
        <div>
          <img
            src="/img/illustrations/services/visite-conseil/visite-conseil-step-2.png"
            class="h-32 mb-m" />
          <span class="block text-title-s font-semibold mb-xs text-darkblue"
            >Validez la possibilité de transformer ou rénover un bien</span
          >
          <p class="text-gray-600 mb-xs">
            Les conseils de l’architecte vous seront précieux pour évaluer les possibilités de
            transformations (extension, surélévation, restructuration, changement de destination…)
            d’un bien immobilier.
          </p>
        </div>
        <div>
          <img
            src="/img/illustrations/services/visite-conseil/visite-conseil-step-3.png"
            class="h-32 mb-m" />
          <span class="block text-title-s font-semibold mb-xs text-darkblue"
            >Évaluez les coûts et les délais d’un projet</span
          >
          <p class="text-gray-600 mb-xs">
            Un architecte local familier avec les opérations comme celle que vous envisagez pourra
            vous indiquer les coûts et délais moyens d’un projet : c’est une bonne façon pour vous
            de confirmer votre intérêt pour un bien et de valider ses paramètres.
          </p>
        </div>
      </div>
    </section>

    <SectionsRating class="mt-xxl" />

    <section id="formules-et-tarifs" class="app-container mt-xl sm:mt-xxl">
      <h2 class="text-title-l text-darkblue font-semibold mb-l">Formules et tarifs</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="border border-blue p-s mb-auto">
          <h3 class="font-semibold text-darkblue text-title-m mb-xs">
            Visite conseil avec architecte
          </h3>
          <UiToggleMore class="mt-min">
            <template #title>
              <span class="font-semibold text-blue">À partir de 240 € TTC, sur devis.</span>
            </template>
            <template #default="{ show }">
              <div v-show="show" class="text-gray-600 text-para mt-m space-y-2">
                <p>
                  Cette somme comprend la sélection de l’architecte, l’organisation de la visite, la
                  visite conseil par l’architecte, et la rédaction d’un compte-rendu.
                </p>
                <p>
                  L’architecte pourra vous proposer des prestations complémentaires : dessins,
                  estimations budgétaires, planning, etc.
                </p>
              </div>
            </template>
          </UiToggleMore>
        </div>
      </div>
    </section>

    <SectionsContact class="mt-xl lg:mt-xxl" title="Parlons de votre projet">
      Nous serions ravis de vous accompagner.<br />Nos premiers échanges sont gratuits, cela va de
      soi.
    </SectionsContact>

    <section id="questions-frequentes" class="mt-xl lg:mt-xxl">
      <div class="app-container mb-m sm:mb-l">
        <UiCollapsableQuestions :questions="questions" class="mx-auto sm:w-2/3 mb-xxl" />
        <div v-if="agencies?.length > 0" id="reseau-architectes">
          <h2 class="text-darkblue font-semibold text-title-m mb-2">
            Quelques architectes de notre réseau
          </h2>
          <p class="text-gray-600 mb-l max-w-[36rem]">
            Voici une sélection d’agences d’architecture avec lesquelles nous travaillons partout en
            France : appelez-nous pour que nous trouvions le bon architecte pour votre projet !
          </p>
        </div>
      </div>
      <SlidersAgencies v-if="agencies?.length > 0" class="mb-l" :agencies="agencies" />
    </section>

    <section class="mt-xl lg:mt-xxl">
      <div class="highlight-top bg-gray-200" />
      <div class="bg-gray-200">
        <div class="app-container py-xl">
          <h2 class="text-title-l text-darkblue font-semibold mb-l max-w-title">
            Découvrez les autres services proposés par Archibien
          </h2>
          <CardsService1 class="mb-m" />
          <CardsService2 />
        </div>
      </div>
      <div class="highlight-bottom bg-gray-200" />
    </section>

    <SectionsMedias loading="lazy" />
    <SectionsMainCities class="mt-xl lg:mt-xxl" />
  </div>
</template>

<script setup lang="ts">
import type { AgencyWithMeta } from '~/types/agency'
// key: This prevents Nuxt from accidentally reusing or re-triggering fetches across routes.
const { data: agencies } = await useAsyncData<AgencyWithMeta[]>(
  `carousels:agencies`,
  () => $fetch('/api/agencies'),
  {
    server: true,
  }
)

const goTo = (refName: string) => {
  const element = document.getElementById(refName)
  if (element) {
    const rect = element.getBoundingClientRect()
    const ypos = rect.top - 120
    window.scrollTo({ top: ypos, behavior: 'smooth' })
  }
}

const steps = [
  {
    label: 'Pourquoi faire une visite conseil par un architecte ?',
    anchor: 'visite-conseil',
  },
  {
    label: 'Formules et tarifs',
    anchor: 'formules-et-tarifs',
  },
  {
    label: 'Questions fréquentes',
    anchor: 'questions-frequentes',
  },
  {
    label: 'Notre réseau d’architectes',
    anchor: 'reseau-architectes',
  },
]
const questions = [
  {
    title: 'Est-il nécessaire pour Archibien de visiter les lieux ?',
    answer: '<p>La plupart du temps, non. Et si c’est nécessaire et possible, nous le ferons !</p>',
  },
  {
    title: 'Qui m’accompagnera pour la suite du projet ?',
    answer:
      '<p>Vous pourrez travailler avec l’architecte que vous aurez rencontré, ou nous demander d’autres contacts : nous organisons notamment des <a href="/services/consultation/" class="text-link">Consultations d’architectes</a>, qui vous permettront de comparer et de choisir le projet et l’architecte qui vous accompagnera. Par ailleurs, nous pouvons vous recommander des professionnels adaptés à la suite de votre projet : géomètres, artisans, etc.</p>',
  },
  {
    title: 'En combien de temps peut-on organiser un rendez-vous ?',
    answer: '<p>En règle générale, nous parvenons à organiser le rendez-vous en 48h.</p>',
  },
  {
    title: 'Peut-on choisir l’architecte qui nous rendra visite ?',
    answer:
      '<p>Si vous le souhaitez : mais c’est notre métier de vous mettre en relation par un architecte adapté à votre projet et qui pourra répondre favorablement dans les délais imparti.</p>',
  },
]
const title = 'Visite conseil par un architecte'
const description =
  "Une visite conseil par un architecte peut vous permettre de déterminer les caractéristiques d'un bien, son potentiel et les risques et coûts associés."
useSeoMeta({
  title,
  ogTitle: title,
  twitterTitle: title,
  description,
  ogDescription: description,
})
</script>
