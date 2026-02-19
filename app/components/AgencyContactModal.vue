<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { categories, clientProjectTypes, tasks } from '~/assets/js/labels'
import { useGoogleMaps } from '~/composables/useGoogleMaps'
import type { AgencyDetails } from '~/types/agency'

/* ----------------------------------
   Props / emits
---------------------------------- */

const props = defineProps<{
  open: boolean
  agency: AgencyDetails
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

/* ----------------------------------
   Form state
---------------------------------- */

const form = ref({
  project: {
    type: 'construction',
    category: 'maison',
    client_type: 'particulier',
    title: '',
    summary: '',
    address: {
      street_number: '',
      street: '',
      post_code: '',
      city: '',
      department: '',
      region: '',
      country: '',
      country_code: '',
      formatted: '',
      latitude: null as number | null,
      longitude: null as number | null,
    },
  },
  user: {
    first_name: '',
    last_name: '',
    email: '',
    mobile_phone: '',
  },
  cgu: false,
})

/* ----------------------------------
   UI state
---------------------------------- */

const isSubmitting = ref(false)
const isSuccess = ref(false)
const error = ref<string | null>(null)
const fieldErrors = ref<Record<string, string>>({})
const currentStep = ref(1)

/* ----------------------------------
   Google Places autocomplete
---------------------------------- */

const addressInput = ref<HTMLInputElement | null>(null)
let autocomplete: google.maps.places.Autocomplete | null = null

function parseAddress(components: google.maps.GeocoderAddressComponent[]) {
  const get = (type: string) => components.find((c) => c.types.includes(type))?.long_name ?? ''

  const getShort = (type: string) =>
    components.find((c) => c.types.includes(type))?.short_name ?? ''

  return {
    street_number: get('street_number'),
    street: get('route'),
    post_code: get('postal_code'),
    city: get('locality') || get('postal_town') || get('administrative_area_level_2'),
    department: get('administrative_area_level_2'),
    region: get('administrative_area_level_1'),
    country: get('country'),
    country_code: getShort('country'),
  }
}
async function initAutocomplete() {
  const google = await useGoogleMaps()
  if (!addressInput.value) return

  autocomplete = new google.maps.places.Autocomplete(addressInput.value, {
    fields: ['geometry', 'formatted_address', 'address_components'],
    componentRestrictions: { country: 'fr' },
  })

  autocomplete.addListener('place_changed', () => {
    const place = autocomplete?.getPlace()
    console.log('places !')
    if (!place?.geometry?.location) return

    form.value.project.address = {
      ...parseAddress(place.address_components || []),
      formatted: place.formatted_address ?? '',
      latitude: place.geometry.location.lat(),
      longitude: place.geometry.location.lng(),
    }

    delete fieldErrors.value['project.address']
  })
}

/* ----------------------------------
   Validation
---------------------------------- */

function validateStep1() {
  fieldErrors.value = {}

  const { project } = form.value

  if (!project.type) fieldErrors.value['project.type'] = 'Veuillez choisir une typologie de projet'
  if (!project.category)
    fieldErrors.value['project.category'] = 'Veuillez choisir une catégorie de projet'
  if (!project.client_type)
    fieldErrors.value['project.client_type'] = 'Veuillez choisir un type de client'
  if (!project.title) fieldErrors.value['project.title'] = 'Veuillez choisir un titre de projet'
  if (!project.summary) fieldErrors.value['project.summary'] = 'Veuillez préciser votre demande'
  if (!project.address.formatted)
    fieldErrors.value['project.address'] = 'Veuillez choisir une adresse de projet'
  if (!project.address.post_code) {
    fieldErrors.value['project.address'] = 'Veuillez spécifier un code postal pour le projet'
    fieldErrors.value['project.address.post_code'] = 'Champ requis'
  }

  return Object.keys(fieldErrors.value).length === 0
}

function validateStep2() {
  fieldErrors.value = {}

  const { user, cgu } = form.value

  if (!user.first_name) fieldErrors.value['user.first_name'] = 'Veuillez préciser votre prénom'
  if (!user.last_name) fieldErrors.value['user.last_name'] = 'Veuillez préciser votre nom'
  if (!user.email || !/^\S+@\S+\.\S+$/.test(user.email)) {
    fieldErrors.value['user.email'] = 'Email invalide'
  }
  if (!user.mobile_phone)
    fieldErrors.value['user.mobile_phone'] = 'Veuillez préciser votre numéro de téléphone'
  if (!cgu) fieldErrors.value['cgu'] = 'Vous devez accepter les conditions générales'
  return Object.keys(fieldErrors.value).length === 0
}

const step1Errors = computed(() =>
  [
    'project.type',
    'project.category',
    'project.client_type',
    'project.title',
    'project.summary',
    'project.address',
  ].some((field) => fieldErrors.value[field])
)
const step2Errors = computed(() =>
  ['user.first_name', 'user.last_name', 'user.email', 'user.mobile_phone', 'cgu'].some(
    (field) => fieldErrors.value[field]
  )
)
/* ----------------------------------
   Submit
---------------------------------- */
function goToStep2() {
  if (!validateStep1()) return
  currentStep.value = 2
}

async function submit() {
  if (isSubmitting.value) return
  error.value = null

  if (!validateStep2()) return

  isSubmitting.value = true

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        agency_id: props.agency.public_id,
        project: form.value.project,
        user: form.value.user,
      },
    })

    isSuccess.value = true
    resetForm()
  } catch {
    error.value = 'Une erreur est survenue. Veuillez réessayer.'
  } finally {
    isSubmitting.value = false
    currentStep.value = 3
    setTimeout(() => {
      close()
      resetForm()
    }, 3000)
  }
}

function resetForm() {
  form.value = {
    project: {
      type: 'construction',
      category: 'maison',
      client_type: 'particulier',
      title: '',
      summary: '',
      address: {
        street_number: '',
        street: '',
        post_code: '',
        city: '',
        department: '',
        region: '',
        country: '',
        country_code: '',
        formatted: '',
        latitude: null as number | null,
        longitude: null as number | null,
      },
    },
    user: {
      first_name: '',
      last_name: '',
      email: '',
      mobile_phone: '',
    },
  }
  currentStep.value = 1
}

/* ----------------------------------
   Modal lifecycle
---------------------------------- */

function close() {
  emit('close')
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.open) close()
}

watch(
  () => props.open,
  async (open) => {
    if (open) {
      isSuccess.value = false
      error.value = null
      fieldErrors.value = {}
      await nextTick()
      initAutocomplete()
    }
  }
)

function inputClass(field: string) {
  return ['form-input', fieldErrors.value[field] && 'form-input-error']
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <Teleport to="body">
    <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center">
      <!-- Overlay -->
      <div class="absolute inset-0 bg-black/50" @click="close" />

      <!-- Modal -->
      <!-- <div class="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
        <button class="absolute right-4 top-4 text-gray-400 hover:text-gray-600" @click="close">
          ✕
        </button> -->

      <!-- <h2 class="mb-6 text-xl font-semibold">Décrire votre projet</h2> -->

      <!-- Modal -->
      <div
        class="relative transform overflow-hidden bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all mt-12 sm:my-8 sm:w-full sm:max-w-5xl sm:p-6">
        <!-- Content -->
        <div class="modal__header absolute w-full top-0 left-0">
          <div class="flex justify-between items-center bg-darkblue text-white py-2 px-4 sm:p-s">
            <h4 class="modal__title text-title-s font-semibold">Écrire à {{ agency.name }}</h4>
            <button class="modal__close" @click="close">
              <!-- <x-icon class="w-6 h-6 fill-current" /> -->
              X
            </button>
          </div>
          <div v-if="currentStep < 3" class="flex w-full bg-white">
            <div
              class="w-1/2 pl-8 py-2 sm:py-xs cursor-pointer"
              :class="
                currentStep === 1
                  ? 'border-b-2 border-blue text-blue'
                  : 'border-b border-gray-300 text-gray-400'
              "
              @click="currentStep = 1">
              <p class="text-sm uppercase">Étape 1</p>
              <p class="font-semibold">Votre projet</p>
            </div>
            <div
              class="w-1/2 pl-8 py-2 sm:py-xs"
              :class="
                currentStep === 2
                  ? 'border-b-2 border-blue text-blue'
                  : 'border-b border-gray-300 text-gray-400'
              ">
              <p class="text-sm uppercase">Étape 2</p>
              <p class="font-semibold">Pour vous joindre</p>
            </div>
          </div>
        </div>

        <!-- <div v-if="isSuccess" class="rounded-lg bg-green-50 p-4 text-green-700">
          Votre demande a bien été envoyée ✅
        </div> -->
        <div
          v-if="currentStep === 1"
          class="modal__content grow overflow-y-auto w-full bg-white mt-24 sm:mt-maximum px-2 sm:px-4">
          <form novalidate="true" @submit.prevent="goToStep2">
            <UiAlert v-if="step1Errors" message="Merci de corriger les erreurs ci-dessous" />

            <p class="font-semibold mb-xs text-gray-700">Vous souhaitez faire</p>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="form-label">Votre projet concerne</p>
                <select v-model="form.project.type" :class="inputClass('project.type')">
                  <!-- <option disabled value="">Type de projet</option> -->
                  <option v-for="t in tasks" :key="t.value" :value="t.value">
                    {{ t.label }}
                  </option>
                </select>
                <p v-if="fieldErrors['project.type']" class="form-feedback-error">
                  {{ fieldErrors['project.type'] }}
                </p>
              </div>

              <div>
                <p class="form-label">Type de bâtiment</p>
                <select v-model="form.project.category" :class="inputClass('project.category')">
                  <!-- <option disabled value="">Catégorie</option> -->
                  <option v-for="c in categories" :key="c.value" :value="c.value">
                    {{ c.label }}
                  </option>
                </select>
                <p v-if="fieldErrors['project.category']" class="form-feedback-error">
                  {{ fieldErrors['project.category'] }}
                </p>
              </div>

              <div>
                <p class="form-label">Vous êtes</p>
                <select
                  v-model="form.project.client_type"
                  :class="inputClass('project.client_type')">
                  <!-- <option disabled value="">Type de client</option> -->
                  <option v-for="c in clientProjectTypes" :key="c.value" :value="c.value">
                    {{ c.label }}
                  </option>
                </select>
                <p v-if="fieldErrors['project.client_type']" class="form-feedback-error">
                  {{ fieldErrors['project.client_type'] }}
                </p>
              </div>

              <div>
                <p class="form-label">Titre de votre projet</p>
                <input
                  type="text"
                  v-model="form.project.title"
                  placeholder="Votre projet en quelques mots"
                  :class="inputClass('project.title')" />
                <p v-if="fieldErrors['project.title']" class="form-feedback-error">
                  {{ fieldErrors['project.title'] }}
                </p>
              </div>

              <div class="col-span-full flex items-center space-x-2">
                <div class="flex-1">
                  <p class="form-label">Où se situe votre projet ?</p>
                  <input
                    ref="addressInput"
                    class="z-60"
                    placeholder="Entrez une adresse"
                    :class="inputClass('project.address')" />

                  <!-- <div class="flex mt-1 sm:mt-2 text-sm text-gray-500">
                    <IconsInfoCircle
                      class="w-5 h-5 sm:w-4 sm:h-4 text-gray-500 fill-current mr-min" />
                    <p>
                      Précisez le lieu de votre projet, et entrez au minimum le code postal de votre
                      projet si il ne s'affiche pas automatiquement.
                    </p>
                  </div> -->
                  <p v-if="fieldErrors['project.address']" class="form-feedback-error">
                    {{ fieldErrors['project.address'] }}
                  </p>
                </div>
                <div>
                  <p class="form-label">Code postal</p>
                  <input
                    v-model="form.project.address.post_code"
                    type="text"
                    name="post_code"
                    :class="inputClass('project.address.post_code')"
                    placeholder="Code postal du projet" />

                  <p v-if="fieldErrors['project.address.post_code']" class="form-feedback-error">
                    {{ fieldErrors['project.address.post_code'] }}
                  </p>
                </div>
              </div>

              <div class="col-span-full">
                <p class="form-label text-sm">Précisez votre demande en quelques lignes</p>
                <textarea
                  v-model="form.project.summary"
                  rows="4"
                  placeholder="Je souhaite..."
                  :class="inputClass('project.summary')" />
                <p v-if="fieldErrors['project.summary']" class="form-feedback-error">
                  {{ fieldErrors['project.summary'] }}
                </p>
              </div>
            </div>
            <div class="w-full flex justify-center mt-s pb-8 px-8">
              <UiButton variant="primary" size="l" type="submit">Étape suivante</UiButton>
            </div>
          </form>
        </div>

        <div
          v-else-if="currentStep === 2"
          class="modal__content grow overflow-y-auto w-full bg-white mt-24 sm:mt-maximum px-2 sm:px-4">
          <form novalidate="true" @submit.prevent="submit">
            <UiAlert v-if="step2Errors" message="Merci de corriger les erreurs ci-dessous" />

            <div class="grid grid-cols-2 gap-4">
              <div>
                <p class="form-label">Prénom</p>
                <input
                  v-model="form.user.first_name"
                  placeholder="Votre prénom"
                  :class="inputClass('user.first_name')" />
                <p v-if="fieldErrors['user.first_name']" class="form-feedback-error">
                  {{ fieldErrors['user.first_name'] }}
                </p>
              </div>

              <div>
                <p class="form-label">Nom</p>
                <input
                  v-model="form.user.last_name"
                  placeholder="Votre nom"
                  :class="inputClass('user.last_name')" />
                <p v-if="fieldErrors['user.last_name']" class="form-feedback-error">
                  {{ fieldErrors['user.last_name'] }}
                </p>
              </div>

              <div>
                <p class="form-label">Email</p>
                <input
                  v-model="form.user.email"
                  type="email"
                  placeholder="Votre email"
                  :class="inputClass('user.email')" />
                <p v-if="fieldErrors['user.email']" class="form-feedback-error">
                  {{ fieldErrors['user.email'] }}
                </p>
              </div>

              <div>
                <p class="form-label">Téléphone</p>
                <input v-model="form.user.mobile_phone" :class="inputClass('user.mobile_phone')" />
                <p v-if="fieldErrors['user.mobile_phone']" class="form-feedback-error">
                  {{ fieldErrors['user.mobile_phone'] }}
                </p>
              </div>

              <div class="col-span-full flex items-center w-full">
                <input
                  id="conditions"
                  v-model="form.cgu"
                  name="conditions"
                  type="checkbox"
                  class="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  :class="{ 'input-error': fieldErrors['cgu'] }" />
                <label for="conditions" class="ml-3 block text-gray-600">
                  J’accepte les
                  <NuxtLink href="/cgu/" target="_blank" class="text-link"
                    >conditions générales d'utilisation.</NuxtLink
                  >
                </label>
                <p v-if="fieldErrors['cgu']" class="form-feedback-error">
                  {{ fieldErrors['cgu'] }}
                </p>
              </div>
            </div>
            <p class="mt-s text-sm text-gray-500">
              Après modération, l’agence d’architecture {{ agency.name }} va recevoir votre message
              et vos coordonnées. Vous allez recevoir une copie de votre demande par mail. Un chargé
              de projet Archibien va vous être attribué pour suivre votre demande.
            </p>

            <div class="w-full flex justify-center mt-s pb-8 px-8">
              <UiButton variant="primary" size="l" type="submit" :disabled="isSubmitting">
                <svg
                  v-if="isSubmitting"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  class="animate-spin h-5 w-5 mr-2">
                  <path fill="currentColor" d="M12 4V2A10 10 0 002 12h2a8 8 0 018-8z" />
                </svg>
                Envoyer mon message
              </UiButton>
            </div>
          </form>
        </div>

        <div
          v-else-if="currentStep === 3"
          class="modal__content grow overflow-y-auto w-full bg-white mt-16 p-8 text-center">
          <div class="flex justify-center">
            <IconsCheck class="w-10 h-10 text-green-500 fill-current mb-4" />
          </div>
          <p class="mb-2">Votre demande a bien été prise en compte.</p>
          <p>Vous allez recevoir une copie de votre demande par email.</p>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
@reference '~/assets/main.css';

select,
textarea {
  @apply block w-full sm:text-sm border-gray-300 rounded-md focus:outline-none focus:ring-blue focus:border-blue;
}

select:required:invalid {
  @apply text-gray-500;
}
</style>
