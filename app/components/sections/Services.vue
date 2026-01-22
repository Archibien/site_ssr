<template>
  <section>
    <div
      class="flex flex-col md:flex-row justify-between items-start md:space-x-4 space-y-4 md:space-y-0 order-2 md:order-1">
      <NuxtLink
        to="/services/etude-de-faisabilite/"
        class="bg-white py-m px-s mt-xs md:mt-0 hover:shadow-md transition-shadow duration-300 ease-in-out w-full h-auto cursor-pointer"
        tag="div">
        <div class="flex flex-row md:flex-col items-center md:items-start">
          <div
            class="flex justify-end md:justify-between w-full items-center flex-row-reverse md:flex-row md:items-start">
            <div>
              <h4 class="text-darkblue font-semibold text-title-s mb-min">
                Étude <br />
                de faisabilité
              </h4>
            </div>
            <img
              src="/img/illustrations/homepage/illustration-service-1.png"
              loading="lazy"
              fetch-priority="low"
              class="h-24 mb-min"
              alt="Illustration d'une étude de faisabilité" />
          </div>
          <div class="hidden md:flex justify-between items-center w-full">
            <div class="hidden md:flex group items-center font-semibold text-blue">
              En savoir plus
              <div class="transition-all duration-200 group-hover:ml-1">
                <svg
                  viewBox="0 0 22 14"
                  xmlns="http://www.w3.org/2000/svg"
                  class="d-block w-xs ml-min mt-0.5">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.5 6.99997C0.5 6.80106 0.579018 6.61029 0.71967 6.46964C0.860322 6.32899 1.05109 6.24997 1.25 6.24997H18.9395L14.219 1.53097C14.0782 1.39014 13.9991 1.19913 13.9991 0.999971C13.9991 0.800807 14.0782 0.609801 14.219 0.468971C14.3598 0.328141 14.5508 0.249023 14.75 0.249023C14.9492 0.249023 15.1402 0.328141 15.281 0.468971L21.281 6.46897C21.3508 6.53864 21.4063 6.6214 21.4441 6.71252C21.4819 6.80364 21.5013 6.90132 21.5013 6.99997C21.5013 7.09862 21.4819 7.1963 21.4441 7.28742C21.4063 7.37854 21.3508 7.4613 21.281 7.53097L15.281 13.531C15.1402 13.6718 14.9492 13.7509 14.75 13.7509C14.5508 13.7509 14.3598 13.6718 14.219 13.531C14.0782 13.3901 13.9991 13.1991 13.9991 13C13.9991 12.8008 14.0782 12.6098 14.219 12.469L18.9395 7.74997H1.25C1.05109 7.74997 0.860322 7.67095 0.71967 7.5303C0.579018 7.38965 0.5 7.19888 0.5 6.99997Z"
                    class="fill-current text-blue" />
                </svg>
              </div>
            </div>
            <div class="flex">
              <div class="ml-auto relative group focus:outline-none">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  class="fill-current h-4 w-4 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z" />
                  <path
                    d="M8.92995 6.588L6.63995 6.875L6.55795 7.255L7.00795 7.338C7.30195 7.408 7.35995 7.514 7.29595 7.807L6.55795 11.275C6.36395 12.172 6.66295 12.594 7.36595 12.594C7.91095 12.594 8.54395 12.342 8.83095 11.996L8.91895 11.58C8.71895 11.756 8.42695 11.826 8.23295 11.826C7.95795 11.826 7.85795 11.633 7.92895 11.293L8.92995 6.588ZM8.99995 4.5C8.99995 4.76522 8.8946 5.01957 8.70706 5.20711C8.51952 5.39464 8.26517 5.5 7.99995 5.5C7.73474 5.5 7.48038 5.39464 7.29285 5.20711C7.10531 5.01957 6.99995 4.76522 6.99995 4.5C6.99995 4.23478 7.10531 3.98043 7.29285 3.79289C7.48038 3.60536 7.73474 3.5 7.99995 3.5C8.26517 3.5 8.51952 3.60536 8.70706 3.79289C8.8946 3.98043 8.99995 4.23478 8.99995 4.5Z" />
                </svg>
                <div
                  id="service1-tooltip"
                  class="pointer-events-none opacity-0 invisible transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:visible group-focus:opacity-100 group-focus:visible p-3 rounded bg-blue-1000 text-white absolute w-64 sm:w-56 top-6 right-0 text-sm shadow-sm">
                  Définition des besoins, étude réglementaire, technique, économique et de planning,
                  pour valider en schémas et en images la faisabilité de votre projet.
                </div>
              </div>
            </div>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink
        to="/services/consultation/"
        tag="div"
        class="bg-white py-m px-s hover:shadow-md transition-shadow duration-300 ease-in-out w-full border border-blue order-first md:order-2 cursor-pointer">
        <UiBadge class="mb-xs inline-block">Courtage en architectes</UiBadge>
        <div class="flex flex-row md:flex-col items-center md:items-start space-y-2">
          <div
            class="flex justify-end md:justify-between w-full items-center flex-row-reverse md:flex-row md:items-start">
            <div>
              <h4 class="text-darkblue font-semibold text-title-s mb-min">
                Trois architectes locaux dessinent et chiffrent votre projet
              </h4>
            </div>
            <img
              src="/img/illustrations/homepage/illustration-service-2.png"
              loading="lazy"
              fetch-priority="low"
              class="h-24 mb-min"
              alt="Trois architectes présentant un projet de construction de maison" />
          </div>
          <div class="hidden md:flex justify-between items-center w-full">
            <div class="hidden md:flex group items-center font-semibold text-blue">
              En savoir plus
              <div class="transition-all duration-200 group-hover:ml-1">
                <svg
                  viewBox="0 0 22 14"
                  xmlns="http://www.w3.org/2000/svg"
                  class="d-block w-xs ml-min mt-0.5">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.5 6.99997C0.5 6.80106 0.579018 6.61029 0.71967 6.46964C0.860322 6.32899 1.05109 6.24997 1.25 6.24997H18.9395L14.219 1.53097C14.0782 1.39014 13.9991 1.19913 13.9991 0.999971C13.9991 0.800807 14.0782 0.609801 14.219 0.468971C14.3598 0.328141 14.5508 0.249023 14.75 0.249023C14.9492 0.249023 15.1402 0.328141 15.281 0.468971L21.281 6.46897C21.3508 6.53864 21.4063 6.6214 21.4441 6.71252C21.4819 6.80364 21.5013 6.90132 21.5013 6.99997C21.5013 7.09862 21.4819 7.1963 21.4441 7.28742C21.4063 7.37854 21.3508 7.4613 21.281 7.53097L15.281 13.531C15.1402 13.6718 14.9492 13.7509 14.75 13.7509C14.5508 13.7509 14.3598 13.6718 14.219 13.531C14.0782 13.3901 13.9991 13.1991 13.9991 13C13.9991 12.8008 14.0782 12.6098 14.219 12.469L18.9395 7.74997H1.25C1.05109 7.74997 0.860322 7.67095 0.71967 7.5303C0.579018 7.38965 0.5 7.19888 0.5 6.99997Z"
                    class="fill-current text-blue" />
                </svg>
              </div>
            </div>
            <div class="flex">
              <div class="ml-auto relative group focus:outline-none">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  class="fill-current h-4 w-4 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z" />
                  <path
                    d="M8.92995 6.588L6.63995 6.875L6.55795 7.255L7.00795 7.338C7.30195 7.408 7.35995 7.514 7.29595 7.807L6.55795 11.275C6.36395 12.172 6.66295 12.594 7.36595 12.594C7.91095 12.594 8.54395 12.342 8.83095 11.996L8.91895 11.58C8.71895 11.756 8.42695 11.826 8.23295 11.826C7.95795 11.826 7.85795 11.633 7.92895 11.293L8.92995 6.588ZM8.99995 4.5C8.99995 4.76522 8.8946 5.01957 8.70706 5.20711C8.51952 5.39464 8.26517 5.5 7.99995 5.5C7.73474 5.5 7.48038 5.39464 7.29285 5.20711C7.10531 5.01957 6.99995 4.76522 6.99995 4.5C6.99995 4.23478 7.10531 3.98043 7.29285 3.79289C7.48038 3.60536 7.73474 3.5 7.99995 3.5C8.26517 3.5 8.51952 3.60536 8.70706 3.79289C8.8946 3.98043 8.99995 4.23478 8.99995 4.5Z" />
                </svg>
                <div
                  id="service2-tooltip"
                  class="pointer-events-none opacity-0 invisible transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:visible group-focus:opacity-100 group-focus:visible p-3 rounded bg-blue-1000 text-white absolute w-64 sm:w-56 top-6 right-0 text-sm shadow-sm">
                  Trois propositions avec plans, images, planning et budget, réalisés par trois
                  agences d’architecture locales sur la base d’un cahier des charges, de rencontres
                  et d’échanges.
                </div>
              </div>
            </div>
          </div>
        </div>
      </NuxtLink>

      <NuxtLink
        to="/services/visite-conseil-ou-mise-en-relation/"
        class="bg-white py-m px-s hover:shadow-md transition-shadow duration-300 ease-in-out w-full order-3 cursor-pointer"
        tag="div">
        <div class="flex flex-row md:flex-col items-center md:items-start">
          <div
            class="flex justify-end md:justify-between w-full items-center flex-row-reverse md:flex-row md:items-start">
            <div>
              <h4 class="text-darkblue font-semibold text-title-s mb-min">
                Visite conseil <br />
                par un architecte
              </h4>
            </div>
            <img
              src="/img/illustrations/homepage/illustration-service-3.png"
              loading="lazy"
              fetch-priority="low"
              class="h-24 mb-min"
              alt="Des architectes et particuliers mis en relation avec Archibien" />
          </div>
          <div class="hidden md:flex justify-between items-center w-full">
            <div class="hidden md:flex group items-center font-semibold text-blue">
              En savoir plus
              <div class="transition-all duration-200 group-hover:ml-1">
                <svg
                  viewBox="0 0 22 14"
                  xmlns="http://www.w3.org/2000/svg"
                  class="d-block w-xs ml-min mt-0.5">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.5 6.99997C0.5 6.80106 0.579018 6.61029 0.71967 6.46964C0.860322 6.32899 1.05109 6.24997 1.25 6.24997H18.9395L14.219 1.53097C14.0782 1.39014 13.9991 1.19913 13.9991 0.999971C13.9991 0.800807 14.0782 0.609801 14.219 0.468971C14.3598 0.328141 14.5508 0.249023 14.75 0.249023C14.9492 0.249023 15.1402 0.328141 15.281 0.468971L21.281 6.46897C21.3508 6.53864 21.4063 6.6214 21.4441 6.71252C21.4819 6.80364 21.5013 6.90132 21.5013 6.99997C21.5013 7.09862 21.4819 7.1963 21.4441 7.28742C21.4063 7.37854 21.3508 7.4613 21.281 7.53097L15.281 13.531C15.1402 13.6718 14.9492 13.7509 14.75 13.7509C14.5508 13.7509 14.3598 13.6718 14.219 13.531C14.0782 13.3901 13.9991 13.1991 13.9991 13C13.9991 12.8008 14.0782 12.6098 14.219 12.469L18.9395 7.74997H1.25C1.05109 7.74997 0.860322 7.67095 0.71967 7.5303C0.579018 7.38965 0.5 7.19888 0.5 6.99997Z"
                    class="fill-current text-blue" />
                </svg>
              </div>
            </div>
            <div class="flex">
              <div class="ml-auto relative group focus:outline-none">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  class="fill-current h-4 w-4 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 15C6.14348 15 4.36301 14.2625 3.05025 12.9497C1.7375 11.637 1 9.85652 1 8C1 6.14348 1.7375 4.36301 3.05025 3.05025C4.36301 1.7375 6.14348 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.85652 14.2625 11.637 12.9497 12.9497C11.637 14.2625 9.85652 15 8 15ZM8 16C10.1217 16 12.1566 15.1571 13.6569 13.6569C15.1571 12.1566 16 10.1217 16 8C16 5.87827 15.1571 3.84344 13.6569 2.34315C12.1566 0.842855 10.1217 0 8 0C5.87827 0 3.84344 0.842855 2.34315 2.34315C0.842855 3.84344 0 5.87827 0 8C0 10.1217 0.842855 12.1566 2.34315 13.6569C3.84344 15.1571 5.87827 16 8 16Z" />
                  <path
                    d="M8.92995 6.588L6.63995 6.875L6.55795 7.255L7.00795 7.338C7.30195 7.408 7.35995 7.514 7.29595 7.807L6.55795 11.275C6.36395 12.172 6.66295 12.594 7.36595 12.594C7.91095 12.594 8.54395 12.342 8.83095 11.996L8.91895 11.58C8.71895 11.756 8.42695 11.826 8.23295 11.826C7.95795 11.826 7.85795 11.633 7.92895 11.293L8.92995 6.588ZM8.99995 4.5C8.99995 4.76522 8.8946 5.01957 8.70706 5.20711C8.51952 5.39464 8.26517 5.5 7.99995 5.5C7.73474 5.5 7.48038 5.39464 7.29285 5.20711C7.10531 5.01957 6.99995 4.76522 6.99995 4.5C6.99995 4.23478 7.10531 3.98043 7.29285 3.79289C7.48038 3.60536 7.73474 3.5 7.99995 3.5C8.26517 3.5 8.51952 3.60536 8.70706 3.79289C8.8946 3.98043 8.99995 4.23478 8.99995 4.5Z" />
                </svg>
                <div
                  id="service3-tooltip"
                  class="pointer-events-none opacity-0 invisible transition-opacity duration-300 ease-in-out group-hover:opacity-100 group-hover:visible group-focus:opacity-100 group-focus:visible p-3 rounded bg-blue-1000 text-white absolute w-64 sm:w-56 top-6 right-0 text-sm shadow-sm">
                  Besoin d’une visite avant achat, de l’avis d’un architecte en amont d’un projet ?
                  Archibien vous organise une rencontre sur place avec le bon professionnel.
                </div>
              </div>
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </section>
</template>
