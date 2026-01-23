<template>
  <div>
    <section class="mt-xs md:mt-16 bg-blue-0">
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
              <span class="text-gray-700 font-semibold cursor-pointer"
                >Consultation d'architectes</span
              >
            </div>
            <h1 class="text-blue text-title-xl font-semibold mb-xl">
              Trois architectes locaux dessinent et chiffrent votre projet.
            </h1>
            <ServiceSteps :steps="steps" @click="goTo" />
          </div>
          <div class="w-full sm:w-1/2">
            <img
              class="w-full h-auto shrink-0 mb-5 sm:mb-0 mx-auto max-w-sm sm:max-w-none p-m md:p-l"
              src="/img/illustrations/services/image-service-1.png"
              alt="Image 1 service consultation" />
          </div>
        </div>
      </div>
      <div class="highlight-top bg-gray-100" />
    </section>

    <section id="courtage-en-architecte" class="app-container mt-xl sm:mt-xxl">
      <h2 class="text-title-l text-darkblue font-semibold mb-xs">
        Notre service de courtage en architecte
      </h2>
      <p class="text-gray-600 max-w-title">
        Archibien est la seule entreprise qui vous permet de comparer et de choisir votre architecte
        local sur la base de trois propositions faites pour vous : nous réalisons des appels
        d'offres sur mesure en mettant en concurrence des cabinets d'architecture locaux.<br /><br />
        Nous appelons ce service une “Consultation d’architectes”, mais techniquement notre rôle est
        d’être courtiers en architectes. Nous organisons pour vous un “concours d’architectes”.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-xxl mt-l">
        <div>
          <img
            src="/img/illustrations/services/consultation/consultation-architectes-1.png"
            class="h-32 mb-m" />
          <span class="block text-title-s font-semibold mb-xs text-darkblue"
            >Montage du dossier</span
          >
          <p class="text-gray-600 mb-xs">
            Nous rédigeons avec vous votre cahier des charges, en passant en revue les aspects
            administratifs, budgétaires, techniques, de planning, et bien sûr en détaillant
            l’organisation des lieux et son style architectural.
          </p>
          <div class="flex items-center">
            <check class="fill-current mr-xs h-5 w-5 shrink-0 text-blue" />
            <span class="text-sm text-gray-600"
              >Vous êtes accompagnés par un Chargé de projet Archibien dédié.</span
            >
          </div>
        </div>
        <div>
          <img
            src="/img/illustrations/services/consultation/consultation-architectes-2.png"
            class="h-32 mb-m" />
          <span class="block text-title-s font-semibold mb-xs text-darkblue"
            >Sélection de trois architectes locaux</span
          >
          <p class="text-gray-600 mb-xs">
            Nous sélectionnons 3 architectes ou architectes d’intérieur locaux adaptés à votre
            projet. Vous pouvez participer à la sélection si vous le souhaitez. Ils prennent
            connaissance de votre cahier des charges, visitent les lieux, vous rencontrent et se
            mettent au travail.
          </p>
          <div class="flex items-center">
            <IconsCheck class="fill-current mr-xs h-5 w-5 shrink-0 text-blue" />
            <span class="text-sm text-gray-600"
              >Les architectes de notre réseau sont triés sur le volet.</span
            >
          </div>
        </div>
        <div>
          <img
            src="/img/illustrations/services/consultation/consultation-architectes-3.png"
            class="h-32 mb-m" />
          <span class="block text-title-s font-semibold mb-xs text-darkblue"
            >Présentation des trois propositions</span
          >
          <p class="text-gray-600 mb-xs">
            Chaque agence d’architecture livre puis présente une proposition pour votre projet.
            Chaque proposition comprend des plans, des images, un budget estimatif et un planning.
            Questionnez les architectes et comparez les propositions sur des bases comparables.
            Archibien peut constituer un jury pour vous aider à prendre votre décision.
          </p>
          <div class="flex items-center">
            <IconsCheck class="fill-current mr-xs h-5 w-5 shrink-0 text-blue" />
            <span class="text-sm text-gray-600"
              >Choisissez la bonne proposition et le bon architecte pour la réaliser !</span
            >
          </div>
        </div>
      </div>
      <UiCollapsableQuestions :questions="questions" class="mx-auto sm:w-2/3 mb-xxl" />
    </section>

    <SectionsContact title="Parlons de votre projet">
      Nous serions ravis de vous accompagner.<br />Nos premiers échanges sont gratuits, cela va de
      soi.
    </SectionsContact>

    <SectionsCallout bg-color="bg-blue-0" text-color="text-blue">
      <h3 class="text-blue font-semibold text-title-l mb-min">
        Consultez des exemples de livrables
      </h3>
      <p class="text-gray-600 max-w-title mx-auto mb-l">
        Cliquez sur les fichiers pour ouvrir le PDF en ligne, et découvrir des exemples de
        consultations.
      </p>
      .
      <div
        class="flex justify-center flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <a
          href="/exemple-de-livrable-extension-maison.pdf"
          class="leading-none font-medium text-blue btn-s bg-white rounded-md"
          target="_blank">
          → Exemple de livrable - Extension d'une maison.pdf
        </a>
        <a
          href="/exemple-de-livrable-renovation-appartement.pdf"
          class="leading-none font-medium text-blue btn-s bg-white rounded-md"
          target="_blank">
          → Exemple de livrable - Rénovation d'un appartement.pdf
        </a>
      </div>
    </SectionsCallout>

    <div id="exemples" />
    <SectionsInspirations />

    <section id="tarifs-et-delais" class="app-container mt-xl sm:mt-xxl">
      <h2 class="text-title-l text-darkblue font-semibold mb-l">Tarifs et délais</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div class="border border-blue p-s mb-auto">
          <h3 class="font-semibold text-darkblue text-title-m mb-xs">Dès 2 900 € TTC</h3>
          <p class="text-gray-600 mb-m">
            Notre tarif est forfaitaire pour les projets qui concernent un logement ou un bâtiment
            de moins de 300m² : 2 900 € TTC (pour des projets de plus grande ampleur, nous faisons
            des offres sur-mesures).
          </p>
          <UiToggleMore v-slot="{ show }" class="mt-min">
            <p v-show="show" class="text-gray-600 text-para mt-m">
              Ce prix comprend la rédaction du cahier des charges, la sélection des agences
              d’architecture, leur déplacement et la livraison des propositions avec une
              présentation par chaque agence. <br />
              Un jury peut être monté pour vous accompagner lors des présentations, moyennant un
              supplément de 600 € TTC.
            </p>
          </UiToggleMore>
        </div>
        <div class="border border-blue p-s mb-auto">
          <h3 class="font-semibold text-darkblue text-title-m mb-xs">
            Vos 3 propositions en quelques semaines
          </h3>
          <p class="text-gray-600 mb-m">
            Obtenir vos trois propositions prend en moyenne un peu moins de 2 mois !
          </p>
          <UiToggleMore v-slot="{ show }" class="mt-min">
            <div v-show="show" class="text-gray-600 text-para mt-m">
              <ul class="list-disc ml-5">
                <li>
                  La rédaction du cahier des charges prend de quelques jours à quelques semaines, en
                  fonction du projet et de votre disponibilité
                </li>
                <li>
                  La sélection des architectes prend en moyenne 10 jours, et les visites se font
                  dans la foulée
                </li>
                <li>
                  Après leurs visites, les agences d’architecture ont au minimum 4 semaines pour
                  réaliser leur proposition
                </li>
                <li>
                  Les propositions vous sont livrées et les présentations orales sont organisées.
                </li>
              </ul>
              <br />
              <p>Vous avez ensuite 6 semaines pour annoncer votre choix.</p>
            </div>
          </UiToggleMore>
        </div>
      </div>
      <UiCollapsableQuestions :questions="questionsTarifs" class="mx-auto sm:w-2/3 my-xxl" />
    </section>

    <SectionsRating class="mt-xxl" />
    <section id="comment-ca-marche" class="mt-xxl app-container">
      <h2 class="text-title-l text-darkblue font-semibold mb-xs">Comment ça marche ?</h2>
      <p class="text-gray-600 max-w-title mb-xxl">
        Pour commencer, échangeons sur votre projet par téléphone, par mail, ou lors d’un
        rendez-vous. Vous créez
        <a href="https://app.archibien.com/inscription/client/" class="text-link">(ici)</a> ou nous
        créons pour vous un espace projet en ligne, où seront partagées les informations liées au
        projet, et où nous mettrons à votre disposition notre contrat.
      </p>
      <div class="flex flex-wrap-reverse items-center mb-l">
        <div class="w-full sm:w-1/2">
          <p class="text-blue text-title-xl font-semibold mb-xs">01.</p>
          <h3 class="text-title-m text-darkblue font-semibold mb-m">
            Nous écrivons votre cahier des charges
          </h3>
          <p class="text-gray-600">
            Vous nous transmettez d'abord les grandes lignes de votre projet, via le site internet.
            Nous prenons rendez-vous et mettons au point ensemble un cahier des charges complet,
            jusqu’au style architectural.
            <br />Quand le cahier des charges est fini, nous passons à l'étape suivante.
          </p>
        </div>
        <div class="w-full sm:w-1/2">
          <img
            class="w-full h-auto shrink-0 mb-5 sm:mb-0 max-w-sm sm:max-w-none p-m md:p-l"
            src="/img/illustrations/services/consultation/consultation-architectes-1.png"
            loading="lazy"
            alt="Image 1 service consultation" />
        </div>
      </div>
      <UiCollapsableQuestions :questions="questions1" class="mb-xxl" />

      <div class="flex flex-wrap-reverse items-center mb-m">
        <div class="w-full sm:w-1/2">
          <img
            class="w-full h-auto shrink-0 mb-5 sm:mb-0 max-w-sm sm:max-w-none p-m md:p-l"
            src="/img/illustrations/services/consultation/consultation-architectes-2.png"
            alt="Image 2 service consultation"
            loading="lazy" />
        </div>
        <div class="w-full sm:w-1/2">
          <p class="text-blue text-title-xl font-semibold mb-xs">02.</p>
          <h3 class="text-title-m text-darkblue font-semibold mb-m">
            Trois architectes dessinent votre projet
          </h3>
          <p class="text-gray-600">
            Nous sélectionnons les meilleurs agences d'architecture sur la base des données du
            projet : localisation, type de projet, styles, etc. Ils répondent au projet en ayant une
            connaissance complète du cahier des charges.
            <br /><br />Chaque architecte dessine le projet et réalise des plans, des images, un
            budget et un calendrier prévisionnel de travaux, un texte d’intention et souvent des
            images d’exemples.
          </p>
        </div>
      </div>

      <UiCollapsableQuestions :questions="questions2" class="mb-xxl" />

      <div class="flex flex-wrap-reverse items-center mb-m">
        <div class="w-full sm:w-1/2">
          <p class="text-blue text-title-xl font-semibold mb-xs">03.</p>
          <h3 class="text-title-m text-darkblue font-semibold mb-m">Vous choisissez !</h3>
          <p class="text-gray-600">
            Les trois propositions des architectes vous sont livrées. Si vous le souhaitez, vous
            pouvez rencontrer les architectes, et même être accompagné(e) dans votre décision par un
            jury d'experts.
            <br />Vous choisissez ensuite le projet qui vous convient le mieux, et l’architecte avec
            lequel le réaliser !
          </p>
        </div>
        <div class="w-full sm:w-1/2">
          <img
            class="w-full h-auto shrink-0 mb-5 sm:mb-0 max-w-sm sm:max-w-none p-m md:p-l"
            src="/img/illustrations/services/consultation/consultation-architectes-3.png"
            alt="Image 1 service consultation"
            loading="lazy" />
        </div>
      </div>
      <UiCollapsableQuestions :questions="questions3" class="mb-xxl" />
    </section>

    <SectionsContact
      title="Vous souhaitez effectuer une consultation d’architecte ?"
      class="mt-xxl">
      Nous serions ravis de vous accompagner.<br />Nos premiers échanges sont gratuits, cela va de
      soi.
    </SectionsContact>

    <section class="mt-xl lg:mt-xxl">
      <h2 class="text-darkblue font-semibold text-title-m app-container">
        Créons ensemble votre projet.
      </h2>
      <SectionsTypologies class="mt-m" />
    </section>

    <section class="mt-xl lg:mt-xxl">
      <div class="highlight-top bg-gray-200" />
      <div class="bg-gray-200">
        <div class="app-container py-xl">
          <h2 class="text-title-l text-darkblue font-semibold mb-l max-w-title">
            Découvrez les autres services proposés par Archibien
          </h2>
          <CardsService2 class="mb-m" />
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
const steps = [
  {
    label: 'Notre service de courtage en architecte',
    anchor: 'courtage-en-architecte',
  },
  {
    label: 'Exemples',
    anchor: 'exemples',
  },
  {
    label: 'Tarifs et délais',
    anchor: 'tarifs-et-delais',
  },
  {
    label: 'Comment ça marche ?',
    anchor: 'comment-ca-marche',
  },
]
const questions = [
  {
    title: 'Est-ce que mon projet peut faire l’objet d’une Consultation d’architectes ?',
    answer:
      '<p>Nous accompagnons des projets allant d’une rénovation intérieure d’appartement à la construction de petits immeubles de logements, en passant bien sûr par des extensions, surélévations et constructions neuves, et même par des projets de restaurants, de laboratoires, de boutiques… Néanmoins, il y a plusieurs critères pour pouvoir vous proposer une Consultation d’architectes :</p><ul class="list-disc pl-5"><li>Votre projet doit avoir une ampleur suffisante : il est difficile pour nous de mettre en concurrence des agences d’architecture pour des projets avec des budgets inférieurs à 50 000 € tout compris ;</li><li>Votre projet doit être “ferme” : nous ne pouvons pas nous permettre de faire travailler nos partenaires agences d’architecture sur des bâtiments pour lesquels une offre d’achat n’a pas encore été acceptée, par exemple ;</li><li>Le projet doit être réaliste. Sur ce point, nous pouvons vous aider : définir de façon pragmatique des délais, un budget et valider sur le papier de la faisabilité administrative et technique du projet.</li></ul><p>Si votre projet ne satisfait pas à ces critères, contactez-nous : nous réalisons des études de faisabilité et organisons des visites conseils, et proposons des prestations sur-mesure pour des besoins particuliers.</p>',
  },
  {
    title: 'Quels sont vos secteurs d’interventions ?',
    answer:
      '<p>Nous intervenons dans toute la France avec notre réseau de partenaires. Si votre projet se trouve dans un lieu particulier, le mieux est d’en discuter !</p>',
  },
  {
    title: 'Peut-on voir des exemples de projets passés par Archibien ?',
    answer:
      '<p>Nous avons accompagné plusieurs centaines de projets partout en France, et avons un réseau de plus de 500 agences d’architecture. <a href="https://blog.archibien.com" class="text-link"> Notre blog </a> regorge d’exemples de projets. </p>',
  },
  {
    title: 'Peut-on avoir 2 ou 4 architectes plutôt que 3 ?',
    answer:
      '<p>En bref, oui. Mais nous proposons 3 parce que nous pensons que c’est le bon nombre, pour comparer de façon efficace sans vous encombrer l’esprit.</p>',
  },
  {
    title: 'Est-ce que les architectes vont vraiment proposer des dessins différents ?',
    answer:
      '<p>Oui, trois fois oui ! Même avec des cahiers des charges très contraints, les propositions obtenues via Archibien ont toujours été très différentes.</p>',
  },
  {
    title: 'À quel moment peut-on vous solliciter ?',
    answer:
      '<p>Quand le projet est ferme pour vous, mais nous pouvons entrer en contact avant bien entendu. Si vous êtes en train d’acheter un bien, nous préférons intervenir quand la promesse est signée et quand vous avez un accord de principe pour le financement.</p>',
  },
]
const questionsTarifs = [
  {
    title: 'Combien me coûtera l’architecte après l’avoir choisi via Archibien ?',
    answer:
      '<p>Le prix de la Consultation d’architectes Archibien ne comprend pas la rémunération de l’agence d’architecture retenue pour la suite de son travail. Dans leurs propositions, les agences d’architecture préciseront leurs tarifs pour les étapes suivantes. En général, nous (Archibien) définissons avec vous (Porteurs de projet) une fourchette de prix de référence pour les prestations des architectes, en leur demandant de s’y conformer. Nous obtenons des tarifs qui correspondent au prix du marché, avec un suivi de qualité de la part des agences d’architecture.</p>',
  },
  {
    title: 'Nous sommes très pressés...',
    answer:
      '<p>Parlons-en : il nous est arrivé de livrer d’organiser une Consultation complète en une poignée de semaines.</p>',
  },
  {
    title: 'Sommes-nous obligés de choisir un architecte à l’issue des présentations ?',
    answer:
      '<p>Non : vous n’avez pas l’obligation de contractualiser avec une agence d’architecture à l’issue d’une Consultation. Nous avons néanmoins un taux de succès très élevé, de l’ordre de 9 sur 10. Notez bien que les propositions des architectes leurs appartiennent : il n’est donc pas possible d’exploiter le travail de l’un d’entre eux sans leur accompagnement rémunéré.</p>',
  },
]
const questions1 = [
  {
    title: 'Vous n’avez pas tous les documents ou relevés ?',
    answer:
      '<p>Des relevés précis et à jour sont toujours appréciés ; mais dans certains cas, certains documents ne sont pas nécessaires ou peuvent être obtenus par nos soins. Si un relevé est nécessaire, nous pourrons vous recommander un professionnel près de chez vous qui pourra le réaliser. Nous ferons le point avec vous lors de nos échanges.</p>',
  },
  {
    title: 'Est-il nécessaire pour Archibien de visiter les lieux ?',
    answer:
      "<p>Les architectes ont une grande habitude de la lecture de tous les types de documents relatifs à l'espace. Parfois il est indispensable que nous visitions le lieu du projet, parfois non. Nous pourrons prendre rendez-vous le cas échéant !</p>",
  },
  {
    title: 'Vous êtes pressé(e) ou pas du tout ?',
    answer:
      "<p>Nous nous adaptons à votre agenda : nous pouvons accélérer le travail en cas de besoin. Si vous n'êtes pas pressé(e), nous pouvons au contraire laisser le dossier du projet ouvert en attendant que vous soyez prêt(e).</p>",
  },
]
const questions2 = [
  {
    title: 'Qui sont les architectes que vous sollicitez ?',
    answer:
      "<p>Nous travaillons avec plus de 500 agences d'architecture indépendantes, réparties dans toute la France. Elles ont leur spécialités : certaines ne sont intéressées que par des projets d'habitat, d'autres par des projets d'équipements industriels (si si !). Parfois ce sont des architectes seuls, d'autres fois il s'agit de grandes équipes. Aucune agence ne dépend d'Archibien et Archibien ne dépend d'aucune agence. Nous sélectionnons attentivement et librement les agences que nous vous recommandons, et mettons la qualité des réalisations et de la relation avec les clients au cœur.</p>",
  },
  {
    title: 'Est ce que les architectes vont visiter les lieux ?',
    answer:
      '<p>Oui, sauf exception. La visite/rencontre sert à la fois à découvrir les lieux et à vous rencontrer. Dans certains cas, parce qu’il s’agit par exemple d’un terrain vide sur lequel une construction doit être faite, ou pour des questions d’agenda, les rendez-vous ont lieu par téléphone ou en visio.</p>',
  },
  {
    title: 'Combien de temps durent les visites ?',
    answer:
      '<p>En règle générale, une heure. Les visites peuvent être groupées (les agences d’architecture viennent en même temps visiter) ou séparées, si les Porteurs du projet ont du temps. Ces paramètres sont ajustés avec le Chargé de projet Archibien.</p>',
  },
]
const questions3 = [
  {
    title: 'Peut-on bénéficier de l’accompagnement d’Archibien pour faire son choix ?',
    answer:
      '<p>Votre Chargé de projet dédié ne pourra pas prendre la décision à votre place, mais pourra répondre à vos questions techniques : nous ne pouvons pas être juge (choisir le “lauréat”) et partie (sélectionner les agences d’architecture qui participent à une Consultation). Si vous souhaitez un regard extérieur, nous pouvons organiser un jury lors des présentations orales. Et dans tous les cas, nous vous recommandons de demander l’avis de vos proches !</p>',
  },
  {
    title: 'Et si nous ne choisissons aucun projet ?',
    answer:
      'Il est très rare qu’aucune des propositions des agences d’architecture ne convienne à nos clients. Mais bien entendu, vous n’avez pas l’obligation de contractualiser avec une agence d’architecture à l’issue d’une Consultation. Nous avons néanmoins un taux de succès très élevé, de l’ordre de 9 sur 10. Notez bien que les propositions des architectes leurs appartiennent : il n’est donc pas possible d’exploiter le travail de l’un d’entre eux sans leur accompagnement rémunéré.',
  },
  {
    title: 'Que se passe-t-il une fois que vous avez choisi votre proposition préférée ?',
    answer:
      'Archibien vous transmet alors les coordonnées complètes de l’agence d’architecture retenue, et réciproquement : l’agence d’architecture prend contact rapidement avec vous pour vous proposer un calendrier des prochaines étapes.',
  },
  {
    title: 'À quoi ressemblent les propositions ?',
    answer:
      'Beaucoup d’exemples sont disponibles sur <a href="https://blog.archibien.com" class="text-link"> notre blog </a> : n’hésitez pas à y faire un tour ! Et prenez contact avec nous : nous pourrons vous présenter plus en détail un ou des projets qui correspondent à votre cas.',
  },
]

const description =
  'Nous appelons ce service une “Consultation d’architectes”, mais techniquement notre rôle est d’être courtiers en architectes. Nous organisons pour vous un “concours d’architectes”.'
useSeoMeta({
  description,
  ogDescription: description,
  twitterDescription: description,
})

const goTo = (refName: string) => {
  const element = document.getElementById(refName)
  if (element) {
    const rect = element.getBoundingClientRect()
    const ypos = rect.top - 120
    window.scrollTo({ top: ypos, behavior: 'smooth' })
  }
}
</script>
