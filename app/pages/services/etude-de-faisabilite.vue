<template>
  <div>
    <section class="mt-xs md:mt-16 bg-green-0">
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
              <span class="text-gray-700 font-semibold cursor-pointer">Faisabilité</span>
            </div>
            <h1 class="text-green-500 text-title-xl font-semibold mb-xl">Étude de faisabilité</h1>
            <ServiceSteps
              :steps="steps"
              color="green"
              @click="(stepAnchor: string) => goTo(stepAnchor)" />
          </div>
          <div class="w-full sm:w-1/2">
            <img
              class="w-full h-auto shrink-0 mb-5 sm:mb-0 mx-auto max-w-sm sm:max-w-none p-m md:p-l"
              src="/img/illustrations/services/image-service-2.png"
              alt="Image 2 service étude de faisabilité" />
          </div>
        </div>
      </div>
      <div class="highlight-top bg-gray-100" />
    </section>

    <section id="etude-de-faisabilite" class="app-container mt-xl sm:mt-xxl">
      <h2 class="text-title-l text-darkblue font-semibold mb-xs">
        Pourquoi faire une étude de faisabilité ?
      </h2>
      <p class="text-gray-600 mb-xs max-w-title">
        L’étude de faisabilité a pour objectif de valider un ou plusieurs paramètres de votre
        projet, et de lever les risques liés à une opération. <br /><br />
        Elle peut porter sur des aspects réglementaires (PLU et autres contraintes d’urbanisme,
        changement de destination…), techniques (structure, risques, sols…), d’usage (configuration
        des lieux et éléments architecturaux), ou sur le volet économique ou le planning d’un
        projet.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-xxl mt-l">
        <div>
          <img
            src="/img/illustrations/services/faisabilite/faisabilite-step-1.png"
            class="h-32 mb-m" />
          <span class="block text-title-s font-semibold mb-xs text-darkblue"
            >Validez la possibilité de faire une extension ou une surélévation</span
          >
          <p class="text-gray-600 mb-xs">
            Vous souhaitez réaliser un agrandissement ? L’étude de faisabilité peut permettre de
            préciser ce que la réglementation autorise, ce qui sera fonctionnel par rapport à vos
            besoins et à la situation bâtie existante, et si vous le souhaitez le montant à allouer
            à l’opération et les délais à prévoir.
          </p>
        </div>
        <div>
          <img
            src="/img/illustrations/services/faisabilite/faisabilite-step-2.png"
            class="h-32 mb-m" />
          <span class="block text-title-s font-semibold mb-xs text-darkblue"
            >Étudiez une division parcellaire</span
          >
          <p class="text-gray-600 mb-xs">
            Pour revendre, pour construire pour soi-même ou pour préparer une succession : les
            scénarios qui conduisent à un projet de division parcellaire sont nombreux. Les
            opérations de division parcellaire sont très encadrées et nécessitent de se plonger dans
            la réglementation et souvent de faire intervenir des professionnels qualifiés.
          </p>
        </div>
        <div>
          <img
            src="/img/illustrations/services/faisabilite/faisabilite-step-3.png"
            class="h-32 mb-m" />
          <span class="block text-title-s font-semibold mb-xs text-darkblue"
            >Déterminez le potentiel d’un bien</span
          >
          <p class="text-gray-600 mb-xs">
            Que vous soyez déjà propriétaire ou en passe de le devenir, il est utile de connaître le
            potentiel d’un bien immobilier : connaître les possibilités d’agrandissement, de
            changement de destination, de division ou au contraire de réunion parcellaire et les
            paramètres associés permet de prendre des décisions informées sur votre patrimoine
            immobilier.
          </p>
        </div>
        <div>
          <img
            src="/img/illustrations/services/faisabilite/faisabilite-step-4.png"
            class="h-32 mb-m" />
          <span class="block text-title-s font-semibold mb-xs text-darkblue"
            >Projetez-vous dans l’aménagement de votre bien</span
          >
          <p class="text-gray-600 mb-xs">
            Vous ne savez pas comment configurer votre bien ? Par exemple : est-il possible
            d’ajouter une chambre ? Où placer un escalier ? Peut-on ouvrir ces murs pour avoir plus
            d’espace ou de lumière ? Nous pouvons vous proposer différents scénarios d’aménagement
            pour préciser le potentiel des lieux et affiner votre projet.
          </p>
        </div>
      </div>
    </section>

    <SectionsRating class="mt-xxl" />

    <section id="formules-et-tarifs" class="app-container mt-xl sm:mt-xxl">
      <h2 class="text-title-l text-darkblue font-semibold mb-l">Formules et tarifs</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="border border-blue p-s mb-auto">
          <h3 class="font-semibold text-darkblue text-title-m mb-xs">Faisabilité réglementaire</h3>
          <div class="flex items-center mb-m">
            <IconsCheck class="fill-current mr-xs h-5 w-5 shrink-0 text-blue" />

            <span class="text-sm text-gray-600"
              >Validez la faisabilité réglementaire de votre projet sur une parcelle donnée</span
            >
          </div>
          <UiToggleMore class="mt-min">
            <template #title>
              <span class="font-semibold text-blue">À partir de 600 € TTC, sur devis.</span>
            </template>
            <template #default="{ show }">
              <div v-show="show" class="text-gray-600 text-para mt-m space-y-2">
                <p>
                  Nous étudions votre parcelle et les bâtiments qui s’y trouvent, consultons les
                  documents d’urbanisme en vigueur (PLU, ABF, etc) et analysons le potentiel de la
                  parcelle au regard de votre projet.
                </p>
                <p>Livrables :</p>
                <ul class="list-disc ml-5">
                  <li>
                    Synthèse des caractéristiques de votre parcelle, y compris risques géologiques
                    recensés
                  </li>
                  <li>Synthèse des réglementations applicables</li>
                  <li>
                    Scénarios de transformation et gabarits en volumes (dans le cas où une ou
                    plusieurs opérations sont bien possibles).
                  </li>
                </ul>
                <p>
                  Nous pourrons vous recommander des professionnels qui pourront vous accompagner
                  pour la suite de votre projet.
                </p>
                <p>
                  Option : Constitution d’un Certificat d’Urbanisme Opérationnel (CUO). L’obtention
                  d’un CUO permet de valider administrativement un projet en phase amont.
                </p>
              </div>
            </template>
          </UiToggleMore>
        </div>
        <div class="border border-blue p-s mb-auto">
          <h3 class="font-semibold text-darkblue text-title-m mb-xs">Faisabilité architecturale</h3>
          <div class="flex items-center mb-m">
            <IconsCheck class="fill-current mr-xs h-5 w-5 shrink-0 text-blue" />

            <span class="text-sm text-gray-600">Validez votre projet en volumes et en plans</span>
          </div>

          <UiToggleMore class="mt-min">
            <template #title>
              <span class="font-semibold text-blue">À partir de 1400 € TTC, sur devis.</span>
            </template>
            <template #default="{ show }">
              <div v-show="show" class="text-gray-600 text-para mt-m space-y-2">
                <p>
                  Sur la base de plans ou schémas de plans de l’existant, de photos et de votre
                  cahier des charges de projet, vous recevez une ou plusieurs propositions de plans
                  et les volumes associés. Plusieurs scénarios peuvent être proposés. En option,
                  nous pouvons vous livrer des images de la situation future et/ou un pré-chiffrage
                  des coûts de travaux liés à l’opération.
                </p>
                <p>
                  En fonction du projet, il peut être nécessaire de coupler l’étude de faisabilité
                  architecturale à une étude de faisabilité administrative, qui est souvent un
                  pré-requis.
                </p>
                <p>
                  Nous pourrons vous recommander des professionnels qui pourront vous accompagner
                  pour la suite de votre projet.
                </p>
                <p>
                  Option : Réalisation d’un pré-chiffrage estimatif de votre projet.<br />
                  Option : Réalisation d’images de synthèse de votre projet.<br />
                  Option : Préparation du dossier de demande d’autorisation administrative :
                  Déclaration Préalable de Travaux ou Permis de Construire.
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

    <section id="questions-frequentes" class="mt-xxl app-container">
      <UiCollapsableQuestions :questions="questions" class="mx-auto sm:w-2/3 mb-xxl" />
    </section>
    <div id="exemples" />
    <section class="my-xl sm:my-xxl">
      <div class="app-container mb-m sm:mb-l">
        <h3 class="text-darkblue font-semibold text-title-m max-w-[36rem] sm:mb-xs mb-2">
          Exemples
        </h3>
        <p class="text-gray-600">
          Les études de faisabilité Archibien ont permis de faire aboutir ces beaux projets :
        </p>
      </div>
      <SectionsCarousel>
        <CardsBlogCard
          v-for="(inspi, index) in inspirations"
          :key="index"
          :inspi="inspi"
          class="basis-[250px] sm:basis-[328px] mr-5 container-slide" />
        <CardsBlogCardCallout class="basis-[250px] sm:basis-[328px] mr-5 container-slide" />
      </SectionsCarousel>
    </section>

    <section class="mt-xl lg:mt-xxl">
      <div class="highlight-top bg-gray-200" />
      <div class="bg-gray-200">
        <div class="app-container py-xl">
          <h2 class="text-title-l text-darkblue font-semibold mb-l max-w-title">
            Découvrez les autres services proposés par Archibien
          </h2>
          <CardsService1 class="mb-m" />
          <CardsService3 />
        </div>
      </div>
      <div class="highlight-bottom bg-gray-200" />
    </section>

    <SectionsMedias loading="lazy" />
    <SectionsMainCities class="mt-xl lg:mt-xxl" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

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
    label: 'Pourquoi faire une étude de faisabilité ?',
    anchor: 'etude-de-faisabilite',
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
    label: 'Exemples',
    anchor: 'exemples',
  },
]

const questions = [
  {
    title: 'Est-il nécessaire pour vous de visiter les lieux ?',
    answer: '<p>La plupart du temps, non. Et si c’est nécessaire et possible, nous le ferons !</p>',
  },
  {
    title: 'Puis-je utiliser ou céder une étude de faisabilité obtenue via Archibien ?',
    answer:
      '<p>Oui. L’étude de faisabilité vous appartient une fois qu’elle a été réalisée. Notez cependant que les documents ne sont pas destinés à être utilisés pour l’exécution d’un projet : des professionnels qualifiés devront prendre en charge le projet et le concevoir à nouveau.</p>',
  },
  {
    title: 'Qui m’accompagnera pour la suite du projet ?',
    answer:
      '<p>Nous pouvons vous recommander des professionnels adaptés à la suite de votre projet : architectes, géomètres, etc.</p>',
  },
  {
    title: 'Quels sont les délais associés à vos formules ?',
    answer:
      '<p>En règle générale, nous livrons les documents en une quinzaine de jours. Le devis que vous établirons pour vous précisera ce délai.</p>',
  },
  {
    title: 'Puis-je voir des exemples de livrables ?',
    answer:
      '<p>Oui : prenez contact avec nous, et nous vous présenterons lors d’un rendez-vous (ou en visio) un exemple qui correspond à votre besoin.</p>',
  },
  {
    title:
      'Est-ce que je peux être certain d’obtenir mon Permis de Construire (PC) ou ma Déclaration Préalable de Travaux (DP) après avoir reçu mon étude de faisabilité ?',
    answer:
      '<p>Malheureusement non, il n’y a pas d’engagement contractuel. Les services instructeurs dont des entités indépendantes qui appliquent et interprètent les règles selon leur point de vue. L’objectif en réalisant une étude de faisabilité est de dégrossir les risques liés à une opération, et dans la plupart des cas cela permet de déposer sa demande de permis de construire ou de déclaration préalable de travaux sereinement.</p>',
  },
]

// Fetch WordPress posts using useFetch with category filter
const { data: posts } = await useFetch(
  'https://blog.archibien.com/wp-json/wp/v2/posts?per_page=10&_embed&categories_slug=inspiration'
)

// Map posts to fit BlogCard props
const inspirations = computed(() => {
  if (!posts.value) return []
  return posts.value.map((post: any) => ({
    url: post.link,
    img:
      post._embedded?.['wp:featuredmedia']?.[0]?.media_details?.sizes?.medium_large?.source_url
        ?.split('/')
        .pop() || '',
    title: post.title.rendered,
    alt: post._embedded?.['wp:featuredmedia']?.[0]?.alt_text || post.title.rendered,
    tag: post._embedded?.['wp:term']?.[0]?.[0]?.name || '',
  }))
})

const title = 'Étude de faisabilité'
const description =
  'Elle peut porter sur des aspects réglementaires, techniques, d’usage sur le volet économique ou le planning d’un projet architectural.'
useSeoMeta({
  title,
  ogTitle: title,
  twitterTitle: title,
  description,
  ogDescription: description,
})
</script>
