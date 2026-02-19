<template>
  <footer class="-mt-l md:-mt-16">
    <div class="highlight-top bg-darkblue" />
    <div class="bg-darkblue py-xl lg:py-xxl">
      <div class="app-container text-white space-y-12 lg:space-y-16">
        <div
          class="text-title-s font-semibold text-center flex flex-wrap items-center justify-center lg:justify-between space-y-12 lg:space-y-0">
          <a
            href="https://share.hsforms.com/17LP3YZnkTmKMlsaJhNT9Fg2z5xd"
            target="_blank"
            rel="noopener"
            style="max-width: 256px"
            class="flex flex-col w-full lg:w-auto items-center">
            <span class="mb-xs">📬</span>
            <span>Recevoir la Newsletter Archibien une fois par mois !</span>
          </a>
          <a
            href="https://blog.archibien.com/"
            target="_blank"
            rel="noopener"
            class="flex flex-col w-full lg:w-auto items-center">
            <span class="mb-xs">👉</span>
            <div class="flex items-start space-x-2">
              <span>Visitez</span>
              <img
                src="/img/logo-blog-archibien-blanc.png"
                alt="Logo du blog Archibien"
                loading="lazy"
                height="32"
                class="h-8"
                fetch-priority="low" />
            </div>
          </a>
          <div class="flex items-center justify-center space-x-4 text-white w-full lg:w-auto">
            <a
              href="https://www.facebook.com/bonjourarchibien"
              rel="noopener"
              title="Facebook page">
              <IconsFacebook class="fill-current h-5 w-5" />
            </a>
            <a
              href="https://www.instagram.com/accounts/login/?next=%2Farchibien%2F&source=follow"
              rel="noopener"
              title="Instagram follow link">
              <IconsInstagram class="fill-current h-5 w-5" />
            </a>
            <a href="https://x.com/_Archibien" rel="noopener" title="X page">
              <IconsX class="fill-current h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/company/archibien"
              rel="noopener"
              title="LinkedIn page">
              <IconsLinkedIn class="fill-current h-5 w-5" />
            </a>
            <a href="https://www.pinterest.fr/archibien/" rel="noopener" title="Pinterest page">
              <IconsPinterest class="fill-current h-5 w-5" />
            </a>
          </div>
        </div>
        <div class="flex flex-wrap justify-between space-y-12 lg:space-y-0">
          <div class="w-full lg:w-auto text-center lg:text-left">
            <p class="text-caption uppercase mb-m w-full">pour les porteurs de projets</p>
            <div class="space-y-4 flex flex-col">
              <NuxtLink to="/tarifs/" no-prefetch>Tarifs et services</NuxtLink>
              <NuxtLink to="/services/consultation/" no-prefetch>
                Consultations d'architectes
              </NuxtLink>
              <NuxtLink to="/services/etude-de-faisabilite/" no-prefetch>
                Étude de faisabilité
              </NuxtLink>
              <NuxtLink to="/services/visite-conseil-ou-mise-en-relation/" no-prefetch>
                Visite conseil par un architecte
              </NuxtLink>
              <a href="https://app.archibien.com/inscription/client" rel="noopener"
                >Déposer mon projet</a
              >
              <a href="https://app.archibien.com/" rel="noopener">Connexion Espace Projet</a>
            </div>
          </div>
          <div class="w-full lg:w-auto text-center lg:text-left">
            <p class="text-caption uppercase mb-m w-full">pour les architectes</p>
            <div class="space-y-4 flex flex-col">
              <NuxtLink to="/architectes/" no-prefetch class="font-semibold">
                👉 Découvrez Archibien
              </NuxtLink>
              <a href="https://archibien-4999873.hs-sites.com/test-landing" rel="noopener"
                >Nos offres</a
              >
              <a href="https://app.archibien.com/inscription/archi" rel="noopener">S'inscrire</a>
              <a href="https://app.archibien.com/" rel="noopener">Se connecter</a>
            </div>
          </div>
          <div class="w-full lg:w-auto text-center lg:text-left">
            <p class="text-caption uppercase mb-m w-full">À propos d'archibien</p>
            <div class="space-y-4 flex flex-col">
              <a href="https://share.google/2UUreY3oXjmr7CEXt" rel="noopener"
                >Avis sur nos services</a
              >
              <NuxtLink to="/a-propos/" no-prefetch> À propos d'Archibien </NuxtLink>
              <NuxtLink to="/contact/" no-prefetch> Nous contacter </NuxtLink>
              <a href="https://archibien.welcomekit.co/" target="_blank" rel="noopener"
                >Nous rejoindre</a
              >
              <NuxtLink to="/mentions-legales/" no-prefetch> Mentions légales </NuxtLink>
              <NuxtLink to="/cgu/" no-prefetch> CGU </NuxtLink>
              <NuxtLink to="/cookies/" no-prefetch>
                Politique de confidentialité et d'utilisation des Cookies
              </NuxtLink>
            </div>
          </div>
        </div>

        <div>
          <div class="flex items-center justify-center space-x-6 mb-s sm:mb-m">
            <p>Les activités d'Archibien sont assurées par :</p>
            <img
              src="/img/partners/axa.png"
              loading="lazy"
              alt="Logo AXA"
              class="w-m h-m lg:w-l lg:h-l" />
          </div>

          <div
            class="grid items-center gap-6 md:gap-4 grid-flow-col grid-rows-5 md:grid-rows-1 place-items-center place-content-center text-white">
            <p class="row-span-1 col-span-4 md:row-auto md:col-auto">Nos partenaires :</p>

            <a target="_blank" href="http://www.hec.fr/" rel="noreferrer noopener">
              <img
                src="/img/partners/Logo-Incubateur-HEC-Archibien.png"
                alt="Logo Incubateur HEC Station F Paris"
                loading="lazy"
                class="h-m lg:h-14" />
            </a>
            <a target="_blank" href="https://www.levillagebyca.com" rel="noreferrer noopener">
              <img
                src="/img/partners/Logo-LeVillageAlumni-Archibien.svg"
                alt="Logo Le Village Alumni"
                loading="lazy"
                class="h-m lg:h-14" />
            </a>
            <a target="_blank" href="https://www.bpifrance.fr/" rel="noreferrer noopener">
              <img
                src="/img/partners/Logo-BPI-Archibien.png"
                alt="Logo BPI"
                loading="lazy"
                class="h-m lg:h-14" />
            </a>
            <a target="_blank" href="http://www.wilco-startup.com/" rel="noreferrer noopener">
              <img
                src="/img/partners/Logo-WILCO-Archibien.png"
                alt="Logo WILCO"
                loading="lazy"
                class="h-m lg:h-14" />
            </a>
            <a target="_blank" href="https://stationf.co/fr" rel="noreferrer noopener">
              <img
                src="/img/partners/Logo-StationF-Archibien.svg"
                alt="Logo Station F"
                loading="lazy"
                class="h-4 lg:h-6" />
            </a>
            <a target="_blank" href="https://www.lafrenchtech.com/" rel="noreferrer noopener">
              <img
                src="/img/partners/Logo-LaFrenchTech-Archibien.svg"
                alt="Logo La French Tech"
                loading="lazy"
                class="h-m lg:h-14" />
            </a>
          </div>
        </div>

        <p class="text-white text-center">
          © Archibien 2016-{{ new Date().getFullYear() }}. Tous droits réservés.
        </p>
      </div>
    </div>
  </footer>
</template>
