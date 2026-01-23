<template>
  <div>
    <section class="mt-l">
      <div class="bg-blue-0 py-xl">
        <div class="flex flex-col md:flex-row items-center app-container">
          <img
            src="/img/apropos/archibien-mosaique.png"
            alt="Mosaïque de photos des membres et locaux d'Archibien"
            class="w-full md:w-1/2 md:order-last max-w-card md:max-w-title mb-l md:mb-0" />
          <div class="w-full md:w-1/2 md:mr-s text-center md:text-left">
            <h1 class="text-title-xl font-semibold text-darkblue mb-xs">À propos d'Archibien</h1>
            <p class="max-w-title text-gray-600 mx-auto md:mx-0">
              Un projet architectural, c’est une aventure. C’est un processus humain et matériel qui
              nécessite de bons ingrédients et de bons cuisiniers. Travailler avec un architecte,
              c’est participer à toutes les étapes de la création d’un lieu : de l’idée du projet à
              sa réalisation. C’est pouvoir habiter ou utiliser des espaces faits spécialement pour
              vous, avec vous.
            </p>
          </div>
        </div>
      </div>
      <div class="highlight-bottom bg-blue-0" />
    </section>
    <section class="my-xl md:my-xxl">
      <h2 class="text-center text-title-l font-semibold text-darkblue mb-m md:mb-l">
        L'histoire d'Archibien
      </h2>
      <SectionsCarousel>
        <div class="basis-1/3 mr-5 flex-none grow-0 shrink-0">
          <div class="flex flex-col items-center">
            <UiBadge>2015</UiBadge>
            <div id="progress-start" class="progress" />
            <p class="w-48 md:w-72 text-center">
              Le concept d’Archibien voit le jour, sous le nom “La Palette”, à Vannes. Simon
              Jézéquel, diplômé en architecture puis journaliste d’architecture, expérimente le
              modèle avec une trentaine d’architectes, en Bretagne principalement.
            </p>
          </div>
        </div>

        <div class="basis-1/3 mr-5 flex-none grow-0 shrink-0">
          <div class="flex flex-col items-center -ml-5">
            <UiBadge>2016</UiBadge>
            <div class="progress" />
            <p class="w-48 md:w-72 text-center">
              Les premiers concours sont livrés : un duplex à Paris, une maison neuve dans le
              Finistère, quelques rénovations et extensions dans le Morbihan… L’entreprise se
              développe localement puis nationalement suite à l’intérêt de grands médias (RTL, BFM,
              France Inter…).
            </p>
          </div>
        </div>

        <div class="basis-1/3 mr-5 flex-none grow-0 shrink-0">
          <div class="flex flex-col items-center -ml-5">
            <UiBadge>2017</UiBadge>
            <div class="progress" />
            <p class="w-48 md:w-72 text-center">
              “La Palette” prend le nom d’Archibien avec l’arrivée d’Olivier Ménard, lui aussi
              architecte diplômé. Archibien se structure avec le soutien d’1kubator et une équipe se
              forme pour sélectionner de nouveaux architectes et accompagner toujours plus de
              porteurs de projets dans leurs aventures.
            </p>
          </div>
        </div>

        <div class="basis-1/3 mr-5 flex-none grow-0 shrink-0">
          <div class="flex flex-col items-center -ml-5">
            <UiBadge>2018</UiBadge>
            <div class="progress" />
            <p class="w-48 md:w-72 text-center">
              Archibien est sélectionné par l’incubateur HEC à Station F, les partenariats et la
              couverture dans les médias se développent à vitesse grand V : c’est le grand décollage
              ! De beaux projets sont livrés : constructions neuves, rénovations de maisons et
              d’appartements, de restaurants et locaux professionnels…
            </p>
          </div>
        </div>

        <div class="basis-1/3 mr-5 flex-none grow-0 shrink-0">
          <div class="flex flex-col items-center -ml-5">
            <UiBadge>2019</UiBadge>
            <div class="progress" />
            <p class="w-48 md:w-72 text-center">
              Archibien a maintenant plus de 300 agences d’architecture partenaires dans toute la
              France ! Une première version de l’application métier Archibien, qui permet de
              réaliser des cahiers des charges avec les porteurs de projets, est lancée. Plusieurs
              centaines de projets seront accompagnés cette année et les suivantes.
            </p>
          </div>
        </div>

        <div class="basis-1/3 mr-5 flex-none grow-0 shrink-0">
          <div class="flex flex-col items-center -ml-5">
            <UiBadge>2020</UiBadge>
            <div class="progress" />
            <p class="w-48 md:w-72 text-center">
              Malgré le Covid, Archibien continue son développement : l’équipe se spécialise, et
              Archibien publie très régulièrement les travaux des agences passés issus de dossiers
              de ses clients. Le nombre de followers sur instagram dépasse les 20 000 !
            </p>
          </div>
        </div>

        <div class="basis-1/3 mr-5 flex-none grow-0 shrink-0">
          <div class="flex flex-col items-center -ml-5">
            <UiBadge>2021</UiBadge>
            <div id="progress-end" class="progress" />
            <p class="w-48 md:w-72 text-center">
              Plus de 500 architectes partenaires ! Archibien lance à la rentrée 2021 une nouvelle
              version de son site et de son application, pour mieux servir les porteurs de projets
              et les agences d’architecture.
            </p>
          </div>
        </div>
      </SectionsCarousel>
    </section>
    <section>
      <div class="highlight-top bg-gray-200" />
      <div class="bg-gray-200 py-xl">
        <div class="app-container">
          <h2
            class="text-center text-title-l font-semibold text-darkblue mb-m md:mb-l max-w-title mx-auto">
            Archibien s’engage, pour des architectures singulières.
          </h2>
          <div>
            <div class="flex flex-start flex-wrap w-full justify-around">
              <div class="mr-min">
                <img
                  src="/img/apropos/1-Archibien-Transparence-Combien-Coût.09013cf.svg"
                  class="max-h-44 mx-auto"
                  loading="lazy"
                  alt="Point 1" />
                <p class="w-60 text-center mx-auto text-gray-600 px-min">
                  Un fonctionnement transparent pour vous et pour les architectes
                </p>
              </div>
              <div class="mx-min">
                <img
                  src="/img/apropos/2-Archibien-Budget-Delais-Respectes-Respect.e4b5bb9.svg"
                  class="max-h-44 mx-auto"
                  loading="lazy"
                  alt="Point 2" />
                <p class="w-60 text-center mx-auto text-gray-600 px-min">
                  Vos contraintes respectées (délais, budget, besoins)
                </p>
              </div>
              <div class="mx-min">
                <img
                  src="/img/apropos/3-Archibien-Selection-Choisir-Meilleur-Architecte.298fc8e.svg"
                  class="max-h-44 mx-auto"
                  loading="lazy"
                  alt="Point 3" />
                <p class="w-60 text-center mx-auto text-gray-600 px-min">
                  Des architectes triés sur le volet, qualifiés et assurés
                </p>
              </div>
              <div class="mx-min">
                <img
                  src="/img/apropos/4-Archibien-Conseil-Conseiller.0e8c0af.svg"
                  class="max-h-44 mx-auto"
                  loading="lazy"
                  alt="Point 4" />
                <p class="w-60 text-center mx-auto text-gray-600 px-min">
                  Un interlocuteur unique (et humain !) pour votre projet
                </p>
              </div>
              <div class="ml-min">
                <img
                  src="/img/apropos/5-Archibien-Qualité-devis-suivi-serieux.c9537c8.svg"
                  class="max-h-44 mx-auto"
                  loading="lazy"
                  alt="Point 5" />
                <p class="w-60 text-center mx-auto text-gray-600">
                  Des propositions de qualité : le concours favorise la créativité !
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="highlight-bottom bg-gray-200" />
    </section>
    <section class="app-container my-xl md:my-xxl">
      <h2
        class="text-center text-title-l font-semibold text-darkblue mb-m md:mb-l max-w-title mx-auto">
        Découvrez notre équipe
      </h2>
      <div class="flex flex-start flex-wrap justify-center lg:justify-start">
        <div class="flex items-center mt-l">
          <img
            src="/img/apropos/team/photo-olivier-archibien.png"
            alt="Photo d'Olivier Archibien"
            loading="lazy"
            class="w-24" />
          <div class="ml-m">
            <h5 class="text-title-s font-semibold text-darkblue mb-1 w-44 mr-xs">Olivier Menard</h5>
            <p class="text-sm text-gray-600">Co-fondateur</p>
          </div>
        </div>
        <div class="flex items-center mt-l">
          <img
            src="/img/apropos/team/photo-simon-archibien.png"
            alt="Photo de Simon Archibien"
            loading="lazy"
            class="w-24" />
          <div class="ml-m">
            <h5 class="text-title-s font-semibold text-darkblue mb-1 w-44 mr-xs">Simon Jézéquel</h5>
            <p class="text-sm text-gray-600">Co-fondateur</p>
          </div>
        </div>
        <div class="flex items-center mt-l">
          <img
            src="/img/apropos/team/photo-amelie-archibien.png"
            alt="Photo d'Amélie Archibien"
            loading="lazy"
            class="w-24" />
          <div class="ml-m">
            <h5 class="text-title-s font-semibold text-darkblue mb-1 w-44 mr-xs">
              Amélie Deslandes
            </h5>
            <p class="text-sm text-gray-600">Chargée de projets</p>
          </div>
        </div>
        <div class="flex items-center mt-l">
          <img
            src="/img/apropos/team/photo-jacky-archibien.png"
            alt="Photo de Jacky Archibien"
            loading="lazy"
            class="w-24" />
          <div class="ml-m">
            <h5 class="text-title-s font-semibold text-darkblue mb-1 w-44 mr-xs">Jacky Druel</h5>
            <p class="text-sm text-gray-600">Chargé de projets</p>
          </div>
        </div>
        <div class="flex items-center mt-l">
          <img
            src="/img/apropos/team/photo-samuel-archibien.png"
            alt="Photo de Samuel Archibien"
            loading="lazy"
            class="w-24" />
          <div class="ml-m">
            <h5 class="text-title-s font-semibold text-darkblue mb-1 w-44 mr-xs">
              Samuel Girardin
            </h5>
            <p class="text-sm text-gray-600">Développeur</p>
          </div>
        </div>
        <div class="flex items-center mt-l">
          <img
            src="/img/apropos/team/photo-vincent-archibien.png"
            alt="Photo de Vincent Archibien"
            loading="lazy"
            class="w-24" />
          <div class="ml-m">
            <h5 class="text-title-s font-semibold text-darkblue mb-1 w-44 mr-xs">Vincent Pillet</h5>
            <p class="text-sm text-gray-600">Chargé de communication</p>
          </div>
        </div>
      </div>
      <div class="mt-l md:mt-xl mb-maximum">
        <h2
          class="text-center text-title-l font-semibold text-darkblue mb-m md:mb-l max-w-title mx-auto">
          Archibien recrute !
        </h2>
        <a
          href="https://archibien.welcomekit.co/"
          target="_blank"
          class="text-link font-semibold text-center block mx-auto hover:text-blue-700 transition-colors duration-200 ease-in-out"
          >Nous cherchons à agrandir l'équipe : rejoignez-nous !</a
        >
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const title = 'À propos'
const description =
  'Découvrez nos valeurs et notre équipe. Archibien vous accompagne, en sélectionnant trois architectes pour dessiner et chiffrer votre projet.'
useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
})
</script>

<style scoped>
@reference '~/assets/main.css';

#progress-start {
  margin-left: 100%;
  width: 100% !important;
}

#progress-start::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: 50%;
  left: 0;
  transform: translate(-50%, -50%);
}

#progress-end {
  margin-right: 100%;
  width: 100% !important;
}

#progress-end::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: 50%;
  left: 100%;
  transform: translate(-50%, -50%);
}

.progress {
  height: 3px;
  width: 100% !important;
  position: relative;
  @apply w-xl bg-blue my-m;
}

.progress::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @apply bg-blue-100 rounded-full border-blue border-2 shadow-sm;
}
</style>
