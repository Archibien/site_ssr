<template>
  <div class="app-container mb-xxl mt-maximum">
    <h1 class="text-center">Mentions légales</h1>
    <h2>Éditeur</h2>
    <p>
      Le site internet archibien.com est édité par :
      <br /><br />
      La société TheGoodStudio, SAS au capital social de 15 273 euros
      <br />
      Immatriculée au RCS de Créteil sous le numéro 834 268 732
      <br />
      Siège social : Archibien - TheGoodStudio - 12 rue Barbès 94200 Ivry-sur-Seine
      <br />
      N° TVA intracommunautaire FR83834268732
      <br />
      Téléphone : +33188329915
      <br />
      Adresse électronique : bonjour@archibien.com
    </p>
    <h2>Directeur de la publication</h2>
    <p>Monsieur Simon Jézéquel, Président de la société TheGoodStudio</p>
    <h2>Prestataires d’hébergement</h2>
    <p>
      Le site internet
      <NuxtLink to="/" class="text-link">archibien.com</NuxtLink>
      est hébergé par Vercel : 340 S Lemon Ave #4133, Walnut, CA 91789
    </p>
    <br />
    <p>
      L'application
      <a href="https://app.archibien.com/" class="text-link">app.archibien.com</a>
      est hébergée par Scalingo : 13 rue Jacques Peirotes 67000 Strasbourg
      <br />
      Scalingo est un hébergeur français certifié HDS (Hébergeur de Données de Santé) et
      <a
        class="text-link"
        href="https://cdn.scalingo.com/documents/20220912-scalingo-iso27001-lne-certificate-38435-rev0.pdf"
        >ISO 27001</a
      >.
    </p>
    <h2>Plateforme de règlement en ligne des litiges de consommation</h2>
    <p>
      <a
        href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=FR"
        class="text-link"
        >https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home2.show&lng=FR
      </a>
    </p>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Mentions légales',
  ogTitle: 'Mentions légales',
  twitterTitle: 'Mentions légales',
})
</script>

<style scoped>
p {
  color: #4d4d4d;
  line-height: 1.5rem;
}

h1,
h2,
h3,
h4 {
  font-weight: 600;
  color: #22204d;
}

h1:first-of-type {
  font-size: 2rem;
}

h1 {
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 18px;
}

@media (min-width: 1024px) {
  h1 {
    margin-bottom: 24px;
  }
}

h2 {
  font-size: 20px;
  margin-top: 24px;
  margin-bottom: 12px;
}

h3 {
  font-size: 18px;
  margin-top: 12px;
}

h4 {
  margin-top: 6px;
}

.MsoChpDefault {
  font-size: 10pt;
}

.MsoPapDefault {
  line-height: 115%;
}

/* List Definitions */
ol {
  margin-bottom: 0cm;
}
ul {
  margin-bottom: 0cm;
}
</style>
