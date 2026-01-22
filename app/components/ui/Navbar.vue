<template>
  <nav>
    <div class="bg-white fixed inset-x-0 top-0 shadow-md z-30 px-4 sm:px-8 lg:px-4">
      <div
        class="relative flex items-center justify-between h-12 md:h-17 max-w-screen-lg 2xl:max-w-screen-xl mx-auto">
        <div class="flex-1 flex items-center sm:items-stretch justify-between">
          <NuxtLink class="shrink-0 flex items-center" to="/">
            <Logo class="block w-auto h-4" />
          </NuxtLink>
          <div class="hidden md:flex md:ml-6 items-center space-x-6">
            <a :href="getPhoneLink()" class="py-2 font-semibold text-blue">{{
              phoneStore.phone
            }}</a>
            <NuxtLink
              to="/tarifs/"
              class="text-gray-700 py-2 hover:text-link transition-colors duration-200 ease-in-out">
              Tarifs et services
            </NuxtLink>
            <a
              href="https://app.archibien.com"
              rel="noopener"
              class="text-gray-700 py-2 hover:text-link transition-colors duration-200 ease-in-out"
              >Connexion</a
            >
            <UiButton
              class="hidden lg:block"
              type="link"
              to="https://meetings.hubspot.com/simon18/rdv-telephonique-20-minutes">
              Prenons rendez-vous
            </UiButton>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center md:hidden space-x-3">
          <div class="flex items-center space-x-2 text-blue">
            <IconsTelephone />
            <a :href="getPhoneLink()" class="font-semibold">{{ phoneStore.phone }}</a>
          </div>
          <!-- Mobile menu button-->
          <button
            type="button"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            aria-controls="mobile-menu"
            aria-expanded="false"
            @click="togglePanel">
            <span class="sr-only">Open main menu</span>
            <!--
            Icon when menu is closed.

            Heroicon name: outline/menu

            Menu open: "hidden", Menu closed: "block"
          -->
            <svg
              v-if="!open"
              class="h-6 w-6 text-gray-500 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!--
            Icon when menu is open.

            Heroicon name: outline/x

            Menu open: "block", Menu closed: "hidden"
          -->
            <svg
              v-else
              class="h-6 w-6 text-gray-500 stroke-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div v-if="open" class="bg-white z-20 fixed inset-0">
      <div class="space-y-8 flex flex-col items-center mt-28">
        <NuxtLink
          to="/tarifs/"
          class="text-darkblue text-title-m font-semibold"
          @click.native="open = false">
          Tarifs
        </NuxtLink>
        <a
          href="https://app.archibien.com"
          rel="noopener"
          class="text-darkblue text-title-m font-semibold"
          >Connexion</a
        >
        <NuxtLink
          to="/architectes/"
          class="text-gray-600 text-title-m"
          @click.native="open = false">
          Archibien pour les architectes
        </NuxtLink>
        <UiButton type="link" to="https://meetings.hubspot.com/simon18/rdv-telephonique-20-minutes">
          Prenons rendez-vous
        </UiButton>
      </div>
      <div class="flex flex-col absolute bottom-36 m-auto w-full">
        <a href="https://blog.archibien.com" rel="noopener" class="mx-auto"
          ><img
            src="/img/logo-blog-archibien.svg"
            alt="Logo blog Archibien"
            loading="eager"
            decoding="async"
            class="h-10"
        /></a>
        <div class="flex items-center justify-center space-x-8 text-darkblue mt-4">
          <a href="https://www.facebook.com/bonjourarchibien" rel="noopener">
            <IconsFacebook class="fill-current h-6 w-6" />
          </a>
          <a
            href="https://www.instagram.com/accounts/login/?next=%2Farchibien%2F&source=follow"
            rel="noopener">
            <IconsInstagram class="fill-current h-6 w-6" />
          </a>
          <a href="https://x.com/_Archibien" rel="noopener">
            <IconsX class="fill-current h-6 w-6" />
          </a>
          <a href="https://www.linkedin.com/company/archibien" rel="noopener">
            <IconsLinkedIn class="fill-current h-6 w-6" />
          </a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
const open = ref(false)
const phoneStore = usePhone()
const togglePanel = () => {
  open.value = !open.value
}
</script>
