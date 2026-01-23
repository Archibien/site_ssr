<template>
  <Hero margin-bottom-class="pt-s md:pt-m">
    <div>
      <div class="space-y-1 mb-m">
        <h1 class="font-semibold text-title-xl">
          Des projets qui vous correspondent
          <span class="text-title-l font-regular block mt-min md:mt-xs">
            Développez votre activité avec Archibien
          </span>
        </h1>
      </div>
      <div
        class="flex items-start sm:items-center space-x-0 space-y-4 sm:space-y-0 sm:space-x-4 flex-col sm:flex-row">
        <UiButton
          size="l"
          type="link"
          to="https://meetings.hubspot.com/simon18/rdv-telephonique-20-minutes">
          Prenons rendez-vous
        </UiButton>
        <UiButton
          size="l"
          type="link"
          variant="secondary"
          class="btn-secondary-white"
          to="https://app.archibien.com/inscription/archi">
          J'inscris mon agence
        </UiButton>
      </div>
      <p class="text-white mt-m md:mt-l">
        Déjà membre ?
        <a href="https://app.archibien.com/login/" rel="noopener" class="font-semibold">
          Par ici →
        </a>
      </p>
    </div>
    <div class="mt-m md:mt-0 md:ml-auto">
      <ul class="space-y-4 sm:space-y-6">
        <li
          v-for="(step, index) in steps"
          :key="step.anchor"
          class="text-gray-200 flex items-center cursor-pointer">
          <!-- <div class="h-4 w-4 flex justify-center items-center mr-4" :class="{[`rounded-full bg-white opacity-50`]: index == 0}"> -->
          <div
            class="h-2 w-2 rounded-full flex justify-center items-center mr-4"
            :class="{ [`ring-white ring-4 ring-opacity-50`]: index == 0 }">
            <div class="h-2 w-2 rounded-full bg-white" />
          </div>
          <span
            :class="{ [`font-semibold text-white`]: index == 0 }"
            @click="() => goTo(step.anchor)"
            >{{ step.label }}</span
          >
        </li>
      </ul>
    </div>
  </Hero>
  <section class="pt-l lg:pt-xl pb-l lg:pb-xl">
    <div class="app-container">
      <div id="nos-services" class="my-xl md:my-xxl">
        <h2 class="text-darkblue font-semibold text-title-l mb-min sm:mb-xs">
          Nos services pour les architectes et architectes d'intérieur
        </h2>
        <p class="text-gray-600">
          Archibien agit en tant qu’agent pour les Agences d’architecture : nous accompagnons le
          développement des Agences d’architecture en leur permettant de trouver des maîtres
          d’ouvrages et des projets qui leur correspondent. Côté maîtres d’ouvrage, nous leur
          permettons de débuter leur projet architectural avec des partenaires de confiance.
        </p>
      </div>
    </div>
    <div class="mb-m">
      <div class="highlight-top bg-blue-0" />
      <div class="bg-blue-0 py-m">
        <div class="flex flex-wrap-reverse items-center app-container">
          <div class="w-full sm:w-1/2">
            <h3 class="text-darkblue text-title-m font-semibold mb-min sm:mb-xs">
              A. Consultations
            </h3>
            <p class="text-gray-600 max-w-title">
              Nous organisons des “concours” restreints d’architecture pour le compte de maîtres
              d’ouvrages privés : ce sont les consultations Archibien. Elles sont ouvertes aux
              agences d’architecture de notre réseau. Notre mission est de vous proposer les projets
              que vous recherchez : sujet, délais, zone géographique, budget, type de maître
              d’ouvrage…
            </p>
          </div>
          <div class="w-full sm:w-1/2">
            <img
              src="/img/illustrations/services/image-service-1.png"
              alt="Image 1 service consultation"
              loading="lazy"
              class="h-auto shrink-0 mb-5 sm:mb-0 mx-auto max-w-sm sm:max-w-none max-h-96 p-m md:p-l" />
          </div>
        </div>
      </div>
      <div class="highlight-bottom bg-blue-0" />
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-m md:mb-xl app-container">
      <div class="flex flex-col items-center text-center">
        <img
          src="/img/illustrations/architectes/illustration-architectes-1.png"
          loading="lazy"
          alt="trois propositions des architectes"
          class="w-52 md:w-60" />
        <p class="text-gray-600 pr-xs">
          En règle générale, 3 agences d’architecture participent à chaque consultation.
        </p>
      </div>
      <div class="flex flex-col items-center text-center">
        <img
          src="/img/illustrations/architectes/illustration-architectes-2.png"
          loading="lazy"
          alt="les architectes ayant perdu sont dédommagés"
          class="w-52 md:w-60" />
        <p class="text-gray-600 pr-xs">
          Les agences d’architecture qui ne sont pas retenues perçoivent un dédommagement versé par
          Archibien. L’agence retenue est rémunérée par les porteurs du projet pour les missions
          suivantes.
        </p>
      </div>
      <div class="flex flex-col items-center text-center">
        <img
          src="/img/illustrations/architectes/illustration-architectes-3.png"
          loading="lazy"
          alt="les chargés de projet archibien font le lien entre porteurs de projet et architectes"
          class="w-52 md:w-60" />
        <p class="text-gray-600 pr-xs">
          Un chargé de projet Archibien est dédié à chaque consultation et fait le lien entre les
          porteurs du projet et les agences d’architecture.
        </p>
      </div>
    </div>
    <div class="mb-xl md:mb-xxl app-container">
      <h3 class="text-title-s font-semibold text-darkblue mb-xs">Comment ça marche ?</h3>
      <p class="text-gray-600 max-w-title mb-s md:mb-m">
        Nous trouvons des maîtres d’ouvrages désireux de réaliser un projet, et rédigeons avec eux
        leur cahier des charges.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div>
          <span class="text-title-m font-semibold text-blue mb-min"> 1. </span>
          <p class="text-gray-600">
            Nous sélectionnons manuellement des Agences d’architecture de notre réseau et leur
            proposons la consultation. Elles sont libres de participer ou non.
          </p>
        </div>
        <div>
          <span class="text-title-m font-semibold text-blue mb-min"> 2. </span>
          <p class="text-gray-600">
            Chaque agence d’architecture participante rencontre les porteurs du projet, visite les
            lieux et réalise ensuite une proposition qui doit comprendre des plans, une image, un
            planning et un estimatif budgétaire.
          </p>
        </div>
        <div>
          <span class="text-title-m font-semibold text-blue mb-min"> 3. </span>
          <p class="text-gray-600">
            Les agences d’architecture présentent leurs propositions aux porteurs du projet, et les
            porteurs du projet font leur choix : l’agence lauréate contractualise avec les porteurs
            du projet, les agences non retenues sont éligibles un dédommagement.
          </p>
        </div>
      </div>
    </div>
    <div class="mb-m">
      <div class="highlight-top bg-green-0" />
      <div class="bg-green-0 py-m">
        <div class="flex flex-wrap-reverse items-center app-container">
          <div class="w-full sm:w-1/2">
            <h3 class="text-darkblue text-title-m font-semibold mb-min sm:mb-xs">
              B. Études de faisabilité
            </h3>
            <p class="text-gray-600 max-w-title">
              Nous missionnons des agences d’architecture pour réaliser des études de faisabilité
              administratives ou architecturales pour nos clients maîtres d’ouvrage. Elles peuvent
              être ponctuelles ou déboucher sur des missions complémentaires. Les agences
              d’architecture sont rémunérées pour réaliser ces études de faisabilité.
            </p>
          </div>
          <div class="w-full sm:w-1/2">
            <img
              src="/img/illustrations/services/image-service-2.png"
              loading="lazy"
              alt="Image 2 service étude de faisabilité"
              class="h-auto shrink-0 mb-5 sm:mb-0 mx-auto max-w-sm sm:max-w-none max-h-96 p-m md:p-l" />
          </div>
        </div>
      </div>
      <div class="highlight-bottom bg-green-0" />
    </div>
    <div class="mb-m">
      <div class="highlight-top bg-red-0" />
      <div class="bg-red-0 py-m">
        <div class="flex flex-wrap-reverse items-center app-container">
          <div class="w-full sm:w-1/2">
            <h3 class="text-darkblue text-title-m font-semibold mb-min sm:mb-xs">
              C. Visite conseil et mises en relations
            </h3>
            <p class="text-gray-600 max-w-title">
              Nous missionnons des agences d’architecture pour réaliser des visites conseils avec
              des maîtres d’ouvrages potentiels ou/et réalisons des mises en relation qui peuvent
              déboucher sur des missions et des projets.
            </p>
          </div>
          <div class="w-full sm:w-1/2">
            <img
              src="/img/illustrations/services/image-service-3.png"
              loading="lazy"
              alt="Image 3 service visite conseil"
              class="h-auto shrink-0 mb-5 sm:mb-0 mx-auto max-w-sm sm:max-w-none max-h-96 p-m md:p-l" />
          </div>
        </div>
      </div>
      <div class="highlight-bottom bg-red-0" />
    </div>
  </section>

  <section class="my-xxl sm:my-maximum">
    <div>
      <div id="partenaires-archibien" class="app-container">
        <h2 class="text-darkblue font-semibold text-title-l mb-m md:mb-l">
          Ils travaillent avec Archibien
        </h2>
        <h3 class="text-darkblue font-semibold text-title-m max-w-[36rem] sm:mb-xs mb-2">
          Architectes et architectes d’intérieur partenaires
        </h3>
        <p class="text-gray-600 mb-l max-w-title">
          Nous collaborons avec plusieurs centaines d’architectes et architectes d’intérieur dans
          toute la France. En voici quelques-uns, sélectionnés de façon aléatoire :
        </p>
      </div>
    </div>
    <SlidersAgencies :agencies="agencies" class="mb-m sm:mb-l" />

    <div>
      <div class="app-container">
        <h3 class="text-darkblue font-semibold text-title-m max-w-[36rem] sm:mb-xs mb-2">
          Portraits issus de notre blog
        </h3>
        <p class="text-gray-600 mb-l max-w-title">
          Sur
          <nuxt-link href="https://blog.archibien.com" external class="text-link"
            >blog.archibien.com</nuxt-link
          >, nous mettons en lumière régulièrement des agences avec qui nous travaillons. Pour en
          faire partie, écrivez-nous sur
          <a href="mailto:communication@archibien.com" class="text-link">
            communication@archibien.com
          </a>
        </p>
      </div>

      <SectionsCarousel class="mb-l">
        <CardsBlog
          v-for="(inspi, index) in portraits"
          :key="index"
          :inspi="inspi"
          class="basis-[250px] sm:basis-[328px] mr-5 container-slide" />
        <CardsBlogCardCallout class="basis-[250px] sm:basis-[328px] mr-5 container-slide" />
      </SectionsCarousel>
    </div>
  </section>

  <section class="app-container">
    <h2 id="rejoindre-archibien" class="text-darkblue font-semibold text-title-l mb-l sm:mb-xl">
      Rejoindre Archibien
    </h2>
    <h3 class="text-darkblue text-title-m font-semibold mb-s sm:mb-m text-center">Notre modèle</h3>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-xl md:mb-xxl">
      <div class="flex flex-col items-center text-center">
        <img
          src="/img/illustrations/architectes/illustration-architectes-4.png"
          loading="lazy"
          alt="les architectes sont libres chez Archibien"
          class="w-52 md:w-60" />
        <p class="text-gray-600 pr-xs">
          Rejoindre le réseau d’agences d’architecture partenaires d’Archibien est une démarche
          libre et gratuite. Si nous vous contactons pour vous proposer de participer à une
          consultation ou un autre service, vous restez libre de refuser, quelle que soit votre
          raison.
        </p>
      </div>
      <div class="flex flex-col items-center text-center">
        <img
          src="/img/illustrations/architectes/illustration-architectes-5.png"
          loading="lazy"
          alt="archibien a un réseau d'architectes de confiance"
          class="w-52 md:w-60" />
        <p class="text-gray-600 pr-xs">
          Nous cherchons à connaître personnellement chaque agence partenaire : c’est pour nous la
          meilleure façon de réaliser des projets de qualité.
        </p>
      </div>
      <div class="flex flex-col items-center text-center">
        <img
          src="/img/illustrations/architectes/illustration-architectes-6.png"
          loading="lazy"
          alt="les agences d'architectures partenaires d'Archibien sont rémunérées au succès"
          class="w-52 md:w-60" />
        <p class="text-gray-600 pr-xs">
          Les agences d’architecture sont rémunérées pour leur travail avec nous. Archibien est
          rémunéré au succès par les agences d’architecture partenaires.
        </p>
      </div>
    </div>
    <h3 class="text-darkblue text-title-m font-semibold mb-min sm:mb-xs text-center">Candidater</h3>
    <p class="text-gray-600 pr-xs max-w-title mb-m md:mb-l text-center mx-auto">
      Nous cherchons à connaître personnellement chaque agence partenaire : c’est pour nous la
      meilleure façon de réaliser des projets de qualité. L’acceptation dans le réseau Archibien
      n’est pas automatique. En cas de refus, nous vous indiquerons nos raisons.
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div class="flex flex-col space-y-4 justify-center">
        <p class="text-gray-600 max-w-title text-center font-semibold px-xs">
          A. Prenons rendez-vous ou appelez-nous : il est indispensable que nous apprenions à nous
          connaître.
        </p>
        <div class="flex justify-center space-x-4 items-center">
          <UiButton
            size="l"
            type="link"
            to="https://meetings.hubspot.com/simon18/rdv-telephonique-20-minutes">
            Prenons rendez-vous
          </UiButton>
          <UiButtonIcon icon="call" variant="secondary" type="link" :to="getPhoneLink()">
            {{ phone }}
          </UiButtonIcon>
        </div>
      </div>
      <div class="flex flex-col space-y-4 justify-center">
        <p class="text-gray-600 max-w-title text-center font-semibold px-xs">
          B. Donnez-nous quelques informations sur votre structure : remplissez un espace agence sur
          notre site.
        </p>
        <div class="flex justify-center space-x-4 items-center">
          <UiButton
            variant="secondary"
            type="link"
            to="https://app.archibien.com/inscription/archi">
            J’inscris mon agence
          </UiButton>
        </div>
      </div>
    </div>
  </section>

  <section class="app-container my-xxl md:my-maximum">
    <div class="flex flex-wrap justify-between">
      <h2 class="text-title-m font-semibold text-darkblue w-full mb-m lg:mb-0 sm:w-1/3 pr-xs">
        Questions fréquentes
      </h2>
      <UiCollapsableQuestions :questions="questions" class="w-full sm:w-2/3" />
    </div>
  </section>
  <SectionsContact
    title="Discutons !"
    register="archi"
    meeting-link="https://meetings.hubspot.com/simon18/rdv-telephonique-20-minutes">
    Des questions, envie de rejoindre Archibien ?
  </SectionsContact>

  <SectionsInspirations
    subtitle="Découvrez les réalisations des architectes et architectes d’intérieur issus de nos consultations." />

  <SectionsMedias class="mb-xl lg:mb-xxl" loading="lazy" />
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
const { phone } = usePhone().value

const goTo = (refName: string) => {
  const element = document.getElementById(refName)
  if (element) {
    const rect = element.getBoundingClientRect()
    const ypos = rect.top + window.scrollY - 120
    window.scrollTo({ top: ypos, behavior: 'smooth' })
  }
}

const steps = [
  {
    label: "Nos services pour les architectes et architectes d'intérieur",
    anchor: 'nos-services',
  },
  {
    label: 'Ils travaillent avec Archibien',
    anchor: 'partenaires-archibien',
  },
  {
    label: 'Rejoindre Archibien',
    anchor: 'rejoindre-archibien',
  },
]

const portraits = [
  {
    url: 'https://blog.archibien.com/portrait-de-hoz-agence-darchitecture/',
    img: '/img/blog/photo-hoz-architecture.jpg',
    title: 'HOZ Architecture',
    alt: 'Photo de Hoz Architecture',
    tag: "Agence d'architecture",
  },
  {
    url: 'https://blog.archibien.com/portrait-architecte-agence-latelier-pierre-escobar/',
    img: '/img/blog/photo-pierre-escobar.png',
    title: 'L’atelier, Nomadic Architecture Studio',
    alt: 'Photo de Pierre Escobar',
    tag: "Agence d'architecture",
  },
  {
    url: 'https://blog.archibien.com/portrait-de-prisque-salvi-architecte-dinterieur/',
    img: '/img/blog/photo-prisque-salvi.jpg',
    title: 'Prisque Salvi',
    alt: 'Photo de Prisque Salvi',
    tag: "Agence d'architecture d'intérieur",
  },
  {
    url: 'https://blog.archibien.com/portrait-de-lagence-baltique-architectes/',
    img: '/img/blog/photo-agence-baltique.jpg',
    title: 'Baltique',
    alt: "Photo de l'agence Baltique",
    tag: "Agence d'architecture",
  },
  {
    url: 'https://blog.archibien.com/portrait-de-marie-sophie-rollet-architecte/',
    img: '/img/blog/photo-marie-sophie.jpeg',
    title: 'MSR Architecture',
    alt: 'Photo de Marie Sophie Rollet',
    tag: "Agence d'architecture",
  },
  {
    url: 'https://blog.archibien.com/portrait-de-lagence-jmca-architectes/',
    img: '/img/blog/photo-jmca.jpg',
    title: 'JMCA',
    alt: "Photo de l'agence JMCA",
    tag: "Agence d'architecture d'intérieur",
  },
  {
    url: 'https://blog.archibien.com/portrait-agence-gramme-paris-marseille-quimper/',
    img: '/img/blog/photo-gramme.jpg',
    title: 'GRAMME',
    alt: "Photo de l'agence Gramme",
    tag: "Agence d'architecture",
  },
  {
    url: 'https://blog.archibien.com/portrait-de-ludovic-blanchard-architecte/',
    img: '/img/blog/photo-ludovic-blanchard.jpg',
    title: 'Ludovic Blanchard',
    alt: 'Photo de Ludovic Blanchard',
    tag: 'Architecte',
  },
  {
    url: 'https://blog.archibien.com/portrait-agence-littoral-architecture-bordeaux/',
    img: '/img/blog/photo-littoral-architecture.jpeg',
    title: 'Littoral',
    alt: "Photo de l'agence Littoral",
    tag: "Agence d'architecture",
  },
  {
    url: 'https://blog.archibien.com/portrait-de-vivien-seevagen-architecte/',
    img: '/img/blog/photo-vivien-seevagen.png',
    title: 'Norzh Studio',
    alt: 'Photo de Vivien Seevagen',
    tag: "Agence d'architecture",
  },
  {
    url: 'https://blog.archibien.com/portrait-de-damien-rocher-architecte/',
    img: '/img/blog/photo-damien-rocher.jpg',
    title: 'DRÂ',
    alt: 'Photo de Damien Rocher',
    tag: "Agence d'architecture",
  },
]

const questions = [
  {
    title: 'L’inscription est-elle gratuite ?',
    answer:
      '<p>Rejoindre le réseau Archibien est gratuit et sans engagement. Des engagements peuvent exister par la suite, lors de la participation à l’une de nos consultations par exemple.</p>',
  },
  {
    title: 'Peut-on rejoindre le réseau en tant qu’architecte d’intérieur ?',
    answer:
      '<p>Oui, bien sûr ! Les projets qui passent par nos services sont ouverts aux architectes d’intérieur si le sujet s’y prête.</p>',
  },
  {
    title: 'Qui se cache derrière Archibien ?',
    answer:
      '<p>Archibien est une petite entreprise indépendante. Les deux fondateurs d’Archibien sont diplômés en architecture et nos chargés de projet ont des formations ou des expériences de terrain dans le domaine : assistance à maîtrise d’ouvrage, conduite de chantier, architecture d’intérieur, économie de la construction… <br> Nous sommes une petite équipe avec des bureaux à Paris et à Nantes. Prenez contact avec nous, nous serions ravis de vous rencontrer !</p>',
  },
]

const description =
  "Architectes ou architectes d'intérieur, découvrez Archibien et accédez à des projets qui vous conviennent, quand vous le souhaitez. Rejoindre le réseau est gratuit et sans engagement."
useSeoMeta({
  title: 'Archibien pour les architectes',
  ogTitle: 'Archibien pour les architectes',
  twitterTitle: 'Archibien pour les architectes',
  description,
  ogDescription: description,
  twitterDescription: description,
})
</script>
