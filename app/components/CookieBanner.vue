<script setup>
const { bannerVisible, grantConsent, denyConsent } = useConsent()
</script>

<template>
  <div
    v-if="bannerVisible"
    class="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-6 z-50">
    <div class="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p class="text-sm text-gray-700">
        Nous utilisons des cookies pour mesurer l’audience et améliorer votre expérience. Vous
        pouvez accepter ou refuser ces cookies.
      </p>

      <div class="flex gap-3">
        <button
          @click="denyConsent"
          class="px-4 py-2 border border-gray-400 rounded hover:bg-gray-100">
          Refuser
        </button>

        <button
          @click="grantConsent"
          class="px-4 py-2 bg-black text-white rounded hover:opacity-90">
          Accepter
        </button>
      </div>
    </div>
  </div>
</template>
