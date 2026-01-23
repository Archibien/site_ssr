<template>
  <div class="mt-maximum">
    <h1 class="text-center text-title-l font-semibold text-darkblue pt-l md:pt-xl mb-xl md:mb-xxl">
      Vous souhaitez nous contacter ?
    </h1>
    <SectionsContact title="Discutons !" />
    <section class="my-xl md:my-xxl app-container">
      <div>
        <h2 class="text-center text-title-m font-semibold text-darkblue mb-min">
          Retrouvez les établissements d’Archibien en France
        </h2>
        <p class="text-gray-600 text-center">
          Notre siège social : Archibien, TheGoodStudio SAS, 12 rue Barbès, 94200 Ivry-sur-Seine.
        </p>
      </div>
      <div class="flex flex-wrap my-l md:my-xl">
        <div class="w-full md:w-1/2 md:pr-xs">
          <p class="text-gray-700 mb-xs">
            <b>Nous sommes ici : </b> Station F, 58 Rue Eugène Freysinnet, 75013 Paris
          </p>
          <UiButtonIcon icon="call" type="link" to="tel:0188329915" class="mb-s md:mb-m">
            01 88 32 99 15
          </UiButtonIcon>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.2427336247174!2d2.368591515902394!3d48.834508510341635!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6722d063d2345%3A0x23572425eb95c663!2sArchibien!5e0!3m2!1sfr!2sfr!4v1619617434868!5m2!1sfr!2sfr"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            frameborder="0" />
          <!-- <nuxt-img
            src="https://maps.googleapis.com/maps/api/staticmap?center=Archibien+-+Station+F+58+Rue+Eugene+Freyssinet,+Inc.+HEC,+75013+Paris,+France&zoom=15&size=600x300&markers=color:blue%7Clabel:A%7C48.834515,2.370819&key=AIzaSyDB_5MzHFj4OMlnJjn6lwvo8LBfQxwL_qI"
        /> -->
        </div>
        <div class="w-full md:w-1/2 md:pl-xs mt-l md:mt-0">
          <p class="text-gray-700 mb-xs">
            <b>Et aussi ici : </b> La Canopée, 10 bis Rue Sarrazin, 44000 Nantes
          </p>
          <UiButtonIcon icon="call" type="link" to="tel:0285529371" class="mb-s">
            02 85 52 93 71
          </UiButtonIcon>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.794576624142!2d-1.5627022841379585!3d47.22060162255523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4805eeae2a7de0a5%3A0xefd980c4973a7c48!2sArchibien!5e0!3m2!1sfr!2sfr!4v1619618032348!5m2!1sfr!2sfr"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            frameborder="0" />
        </div>
        <div class="w-full md:w-1/2 md:pl-xs mt-l">
          <p class="text-gray-700 mb-xs">
            <b>Ou encore ici : </b> 9 Rue des Bouleaux, 59810 Lesquin
          </p>
          <UiButtonIcon icon="call" type="link" to="tel:0374098494" class="mb-s">
            03 74 09 84 94
          </UiButtonIcon>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2532.676772572061!2d3.1290855159477604!3d50.595960784749956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c2d72b69a67b21%3A0x9a567f568957e724!2sArchibien!5e0!3m2!1sfr!2sfr!4v1619618177585!5m2!1sfr!2sfr"
            width="100%"
            height="450"
            style="border: 0"
            allowfullscreen
            loading="lazy"
            frameborder="0" />
        </div>
      </div>
    </section>
    <section class="svg-map app-container my-xl md:my-xxl">
      <h2 class="text-center text-title-m font-semibold text-darkblue mb-m md:mb-l">
        Archibien intervient partout en France
      </h2>
      <svg class="map" viewBox="0 0 500 550" preserveAspectRatio="xMinYMin meet">
        <g id="complete_map">
          <path
            id="corsica_separating_line"
            d="M 432,545.25 L 432,475 L 496.25,433"
            style="fill: none; stroke: #22204d; stroke-width: 1" />
          <NuxtLink
            v-for="(dep, code) in departments"
            :key="code"
            :to="dep.url"
            no-prefetch
            :title="`Voir les architectes dans le département ${code}`">
            <g :id="code">
              <path :d="dep.path" class="land" />
            </g>
          </NuxtLink>
        </g>
      </svg>
      <p class="text-center max-w-title mx-auto text-gray-600 mb-l">
        Archibien travaille avec un réseau d'agences d'architecture (architectes, architectes
        d'intérieurs et autres professionnels du bâtiment) implanté dans toute la France. Nos
        chargés de projets régionaux connaissent le ou les départements où ils interviennent.
      </p>
      <div class="flex flex-wrap">
        <div class="w-full md:w-1/2 md:pr-m">
          <h4 class="text-title-s font-semibold text-darkblue mb-min">
            Comment nous sélectionnons nos architectes :
          </h4>
          <p class="text-gray-600">
            Voici les critères que nous utilisons pour choisir les cabinets d’architecture avec
            lesquels nous travaillons et que nous solliciterons pour vous :
          </p>
          <ul class="list-disc pl-m mt-min text-gray-600">
            <li>Doivent être concepteurs et maîtres d’oeuvre ;</li>
            <li>Qualité de leurs références ;</li>
            <li>Respect de leurs obligations professionnelles et assurantielles ;</li>
            <li>Recommandations de clients ou de confrères ;</li>
            <li>Style, matériaux et compétences techniques ;</li>
            <li>Disponibilité.</li>
          </ul>
        </div>
        <div class="w-full md:w-1/2 mt-l md:mt-0">
          <h4 class="text-title-s font-semibold text-darkblue mb-min">
            Pourquoi travailler avec une agence d'architecture locale ?
          </h4>
          <!-- <p class="text-gray-600"> -->
          <ul class="list-disc pl-m mt-min text-gray-600">
            <li>
              Parce qu’elle connaît les techniques de construction locales et de bons artisans
              qu’elle pourra solliciter ;
            </li>
            <li>Parce qu’elle connaît les règlements d’urbanisme et vous fera gagner du temps ;</li>
            <li>Parce qu’elle pourra être bien présente sur le chantier pour son suivi.</li>
          </ul>
          <!-- </p> -->
        </div>
      </div>
    </section>
    <section>
      <div class="highlight-top bg-blue-100" />
      <div class="bg-blue-100 py-xxl md:py-max">
        <h2 class="text-center text-title-m font-semibold text-darkblue mb-m md:mb-l">
          Retrouvez Archibien sur les réseaux sociaux !
        </h2>
        <div class="contact-socials flex space-x-10 items-center justify-center">
          <a href="https://www.facebook.com/bonjourarchibien" target="_blank">
            <IconsFacebook class="fill-current text-blue-600 h-6 w-6" />
          </a>
          <a href="https://www.instagram.com/archibien/" target="_blank">
            <IconsInstagram class="fill-current text-blue-600 h-6 w-6" />
          </a>
          <a href="https://twitter.com/_Archibien" target="_blank">
            <IconsX class="fill-current text-blue-600 h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/company/archibien/" target="_blank">
            <IconsLinkedIn class="fill-current text-blue-600 h-6 w-6" />
          </a>
          <a href="https://www.pinterest.fr/archibien/_created/" target="_blank">
            <IconsPinterest class="fill-current text-blue-600 h-6 w-6" />
          </a>
        </div>
      </div>
      <div class="highlight-bottom bg-blue-100" />
    </section>
  </div>
</template>

<script setup lang="ts">
import departments from '~/assets/js/departmentsPaths'

useSeoMeta({
  title: 'Contactez-nous',
  ogTitle: 'Contactez-nous',
  twitterTitle: 'Contactez-nous',
})
</script>

<style scoped>
@reference '~/assets/main.css';

.svg-map svg {
  display: block;
  margin: auto;
}

@media (min-width: 1024px) {
  .svg-map svg {
    max-width: 80%;
  }
}

.svg-map path {
  transition: all 0.3s ease-in-out;
}

.svg-map path:hover {
  @apply fill-current text-blue;
}

.land {
  stroke-width: 0.5;
  stroke: black;
  cursor: pointer;
  @apply fill-current text-gray-200;
}

.contact-socials svg {
  width: 40px;
  height: 40px;
}

.contact-socials path {
  @apply fill-current text-blue-600;
}

@media (max-width: 640px) {
  .contact-socials svg {
    width: 32px;
    height: 32px;
  }
}
</style>
