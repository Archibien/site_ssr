<template>
  <div class="relative flex md:mt-16 mt-12 pb-16">
    <div v-show="showVideo" class="video-modal">
      <div
        class="video-modal-close cursor-pointer absolute flex items-center justify-center hover:bg-white border border-transparent hover:border-blue bg-blue h-10 w-10 rounded-full group"
        @click="showVideo = false">
        <svg
          class="h-5 w-5 stroke-current text-white group-hover:text-blue"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12" />
        </svg>
      </div>
      <ScriptYouTubePlayer
        v-if="showVideo"
        ref="video"
        class="video-container z-50 absolute w-full h-full top-0 left-0"
        video-id="FWzgPinK2dY"
        @ready="isLoaded = true"
        @state-change="stateChange">
        <template #awaitingLoad>
          <div
            class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[48px] w-[68px]">
            <svg height="100%" version="1.1" viewBox="0 0 68 48" width="100%">
              <path
                d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z"
                fill="#f00" />
              <path d="M 45,24 27,14 27,34" fill="#fff" />
            </svg>
          </div>
        </template>
      </ScriptYouTubePlayer>
      <!-- </div> -->
    </div>

    <div class="py-xl sm:py-xxl w-full">
      <div
        class="app-container relative text-white space-y-8 self-center"
        :class="marginBottomClass"
        style="z-index: 4">
        <slot>
          <div class="space-y-1">
            <h1 class="font-semibold text-title-xl">
              {{ title }}
              <span v-if="subtitle" class="text-title-l font-regular block mt-min md:mt-xs">
                {{ subtitle }}
              </span>
            </h1>
          </div>
          <div
            v-if="actions"
            class="flex items-start sm:items-center space-x-0 sm:space-x-4 flex-col sm:flex-row">
            <UiButton
              size="l"
              type="link"
              to="https://meetings.hubspot.com/simon18/rdv-telephonique-20-minutes">
              Prenons rendez-vous
            </UiButton>
            <div
              class="flex items-center space-x-2 mt-s sm:mt-0 cursor-pointer"
              @mouseenter="warmupYouTube"
              @focus="warmupYouTube"
              @click="open">
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 fill-current shrink-0">
                <path
                  d="M20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C7.34784 20 4.8043 18.9464 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C12.6522 0 15.1957 1.05357 17.0711 2.92893C18.9464 4.8043 20 7.34784 20 10V10ZM8.4875 6.36625C8.39405 6.29971 8.28408 6.26018 8.16965 6.25198C8.05522 6.24379 7.94074 6.26724 7.83876 6.31978C7.73678 6.37233 7.65122 6.45192 7.59147 6.54986C7.53172 6.64779 7.50007 6.76028 7.5 6.875V13.125C7.50007 13.2397 7.53172 13.3522 7.59147 13.4501C7.65122 13.5481 7.73678 13.6277 7.83876 13.6802C7.94074 13.7328 8.05522 13.7562 8.16965 13.748C8.28408 13.7398 8.39405 13.7003 8.4875 13.6337L12.8625 10.5087C12.9435 10.4509 13.0096 10.3746 13.0551 10.2861C13.1007 10.1976 13.1245 10.0995 13.1245 10C13.1245 9.90047 13.1007 9.80237 13.0551 9.71388C13.0096 9.62539 12.9435 9.54906 12.8625 9.49125L8.4875 6.36625V6.36625Z" />
              </svg>
              <span>Découvrez Archibien en 1 minute</span>
            </div>
          </div>
          <div v-if="lienArchi">
            <p class="text-white mt-m md:mt-l">
              Vous êtes architecte ?
              <NuxtLink to="/architectes/" class="font-semibold">Par ici →</NuxtLink>
            </p>
          </div>
        </slot>
      </div>
      <div class="absolute w-full h-full inset-0" style="z-index: 1">
        <img
          class="w-full h-full object-cover object-center"
          :src="`/img/${image}-768.jpg`"
          :srcset="`
            /img/${image}-480.jpg   480w,
            /img/${image}-768.jpg   768w,
            /img/${image}-1200.jpg 1200w
          `"
          width="1200"
          height="800"
          sizes="100vw"
          :alt="imageAlt"
          fetchpriority="high"
          decoding="async" />
      </div>
      <div class="absolute opacity-70 inset-0" style="z-index: 2; background-color: #142955" />
    </div>
    <div :class="`absolute bottom-0 highlight-top ${background}`" style="z-index: 3" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  image?: string
  imageAlt?: string
  title?: string
  subtitle?: string
  actions?: boolean
  background?: string
  lienArchi?: boolean
  marginBottomClass?: string
}

withDefaults(defineProps<Props>(), {
  image: 'hero',
  imageAlt:
    "Un architecte et un particulier devant un plan discutant d'un projet de construction de maison",
  title: "Votre projet d'architecture, en mieux",
  subtitle: 'Archibien, le bon point de départ pour votre projet',
  actions: true,
  background: 'bg-gray-100',
  lienArchi: true,
  marginBottomClass: 'py-m md:py-l',
})
const showVideo = ref(false)
const isLoaded = ref(false)
const isPlaying = ref(false)
const video = ref()

const warmupYouTube = () => {
  if (document.querySelector('link[data-yt]')) return

  const link = document.createElement('link')
  link.rel = 'preconnect'
  link.href = 'https://www.youtube.com'
  link.setAttribute('data-yt', 'true')
  document.head.appendChild(link)
}

const open = async () => {
  showVideo.value = true
}

function stateChange(event) {
  isPlaying.value = event.data === 1
}
</script>

<style scoped>
.video-modal {
  position: fixed;
  top: 120px;
  width: 100%;
  z-index: 40;
  left: 0;
  right: 0;
  text-align: center;
  padding: 0 5%;
  overflow: hidden;
  @media (min-width: 640px) {
    padding: 0 25%;
  }
}

.video-container {
  position: relative;
  padding-bottom: 51.3%;
  padding-top: 30px;
  border-radius: 6px;
  height: 0;
  overflow: hidden;
}

.video-modal-close {
  right: 5%;
  top: -50px;
  @media (min-width: 640px) {
    right: 25%;
  }
}
</style>
