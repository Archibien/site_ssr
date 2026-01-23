<script setup lang="ts">
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
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
   Select options
---------------------------------- */

const projectTypes = [
  { value: 'renovation', label: 'Rénovation' },
  { value: 'construction', label: 'Construction' },
  { value: 'extension', label: 'Extension' },
]

const projectCategories = [
  { value: 'house', label: 'Maison' },
  { value: 'apartment', label: 'Appartement' },
  { value: 'building', label: 'Immeuble' },
]

const clientTypes = [
  { value: 'private', label: 'Particulier' },
  { value: 'professional', label: 'Professionnel' },
]

/* ----------------------------------
   Form state
---------------------------------- */

const form = ref({
  project: {
    type: null as string | null,
    category: '',
    client_type: '',
    title: '',
    summary: '',
    address: {
      label: '',
      lat: null as number | null,
      lng: null as number | null,
    },
  },
  user: {
    first_name: '',
    last_name: '',
    email: '',
    mobile_phone: '',
  },
})

/* ----------------------------------
   UI state
---------------------------------- */

const isSubmitting = ref(false)
const isSuccess = ref(false)
const error = ref<string | null>(null)
const fieldErrors = ref<Record<string, string>>({})

/* ----------------------------------
   Google Places autocomplete
---------------------------------- */

const addressInput = ref<HTMLInputElement | null>(null)
let autocomplete: google.maps.places.Autocomplete | null = null

async function initAutocomplete() {
  const google = await useGoogleMaps()
  if (!addressInput.value) return

  autocomplete = new google.maps.places.Autocomplete(addressInput.value, {
    types: ['address'],
    componentRestrictions: { country: 'fr' },
    fields: ['formatted_address', 'geometry'],
  })

  autocomplete.addListener('place_changed', () => {
    const place = autocomplete?.getPlace()
    if (!place?.geometry?.location) return

    form.value.project.address = {
      label: place.formatted_address ?? '',
      lat: place.geometry.location.lat(),
      lng: place.geometry.location.lng(),
    }

    delete fieldErrors.value['project.address']
  })
}

/* ----------------------------------
   Validation
---------------------------------- */

function validate() {
  fieldErrors.value = {}

  const { project, user } = form.value

  if (!project.type) fieldErrors.value['project.type'] = 'Champ requis'
  if (!project.category) fieldErrors.value['project.category'] = 'Champ requis'
  if (!project.client_type) fieldErrors.value['project.client_type'] = 'Champ requis'
  if (!project.title) fieldErrors.value['project.title'] = 'Champ requis'
  if (!project.summary) fieldErrors.value['project.summary'] = 'Champ requis'
  if (!project.address.lat) fieldErrors.value['project.address'] = 'Adresse invalide'

  if (!user.first_name) fieldErrors.value['user.first_name'] = 'Champ requis'
  if (!user.last_name) fieldErrors.value['user.last_name'] = 'Champ requis'
  if (!user.email || !/^\S+@\S+\.\S+$/.test(user.email)) {
    fieldErrors.value['user.email'] = 'Email invalide'
  }
  if (!user.mobile_phone) fieldErrors.value['user.mobile_phone'] = 'Champ requis'

  return Object.keys(fieldErrors.value).length === 0
}

/* ----------------------------------
   Submit
---------------------------------- */

async function submit() {
  if (isSubmitting.value) return
  error.value = null

  if (!validate()) return

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
  }
}

function resetForm() {
  form.value = {
    project: {
      type: null,
      category: '',
      client_type: '',
      title: '',
      summary: '',
      address: { label: '', lat: null, lng: null },
    },
    user: {
      first_name: '',
      last_name: '',
      email: '',
      mobile_phone: '',
    },
  }
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
  return ['form-input', fieldErrors.value[field] && 'border-red-500 focus:ring-red-500/30']
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
      <div class="relative w-full max-w-2xl rounded-2xl bg-white p-6 shadow-xl">
        <button class="absolute right-4 top-4 text-gray-400 hover:text-gray-600" @click="close">
          ✕
        </button>

        <h2 class="mb-6 text-xl font-semibold">Décrire votre projet</h2>

        <div v-if="isSuccess" class="rounded-lg bg-green-50 p-4 text-green-700">
          Votre demande a bien été envoyée ✅
        </div>

        <form v-else class="grid gap-4" @submit.prevent="submit">
          <!-- PROJECT -->

          <div>
            <select v-model="form.project.type" :class="inputClass('project.type')">
              <option disabled value="">Type de projet</option>
              <option v-for="t in projectTypes" :key="t.value" :value="t.value">
                {{ t.label }}
              </option>
            </select>
            <p v-if="fieldErrors['project.type']" class="text-sm text-red-600">
              {{ fieldErrors['project.type'] }}
            </p>
          </div>

          <div>
            <select v-model="form.project.category" :class="inputClass('project.category')">
              <option disabled value="">Catégorie</option>
              <option v-for="c in projectCategories" :key="c.value" :value="c.value">
                {{ c.label }}
              </option>
            </select>
            <p v-if="fieldErrors['project.category']" class="text-sm text-red-600">
              {{ fieldErrors['project.category'] }}
            </p>
          </div>

          <div>
            <select v-model="form.project.client_type" :class="inputClass('project.client_type')">
              <option disabled value="">Type de client</option>
              <option v-for="c in clientTypes" :key="c.value" :value="c.value">
                {{ c.label }}
              </option>
            </select>
            <p v-if="fieldErrors['project.client_type']" class="text-sm text-red-600">
              {{ fieldErrors['project.client_type'] }}
            </p>
          </div>

          <div>
            <input
              v-model="form.project.title"
              placeholder="Titre du projet"
              :class="inputClass('project.title')" />
            <p v-if="fieldErrors['project.title']" class="text-sm text-red-600">
              {{ fieldErrors['project.title'] }}
            </p>
          </div>

          <div>
            <input
              ref="addressInput"
              placeholder="Adresse du projet"
              :class="inputClass('project.address')" />
            <p v-if="fieldErrors['project.address']" class="text-sm text-red-600">
              {{ fieldErrors['project.address'] }}
            </p>
          </div>

          <div>
            <textarea
              v-model="form.project.summary"
              rows="4"
              placeholder="Description du projet"
              :class="inputClass('project.summary')" />
            <p v-if="fieldErrors['project.summary']" class="text-sm text-red-600">
              {{ fieldErrors['project.summary'] }}
            </p>
          </div>

          <!-- USER -->

          <div>
            <input
              v-model="form.user.first_name"
              placeholder="Prénom"
              :class="inputClass('user.first_name')" />
            <p v-if="fieldErrors['user.first_name']" class="text-sm text-red-600">
              {{ fieldErrors['user.first_name'] }}
            </p>
          </div>

          <div>
            <input
              v-model="form.user.last_name"
              placeholder="Nom"
              :class="inputClass('user.last_name')" />
            <p v-if="fieldErrors['user.last_name']" class="text-sm text-red-600">
              {{ fieldErrors['user.last_name'] }}
            </p>
          </div>

          <div>
            <input
              v-model="form.user.email"
              type="email"
              placeholder="Email"
              :class="inputClass('user.email')" />
            <p v-if="fieldErrors['user.email']" class="text-sm text-red-600">
              {{ fieldErrors['user.email'] }}
            </p>
          </div>

          <div>
            <input
              v-model="form.user.mobile_phone"
              placeholder="Téléphone"
              :class="inputClass('user.mobile_phone')" />
            <p v-if="fieldErrors['user.mobile_phone']" class="text-sm text-red-600">
              {{ fieldErrors['user.mobile_phone'] }}
            </p>
          </div>

          <!-- Global error -->
          <p v-if="error" class="text-sm text-red-600">
            {{ error }}
          </p>

          <button
            type="submit"
            class="rounded-xl bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 disabled:opacity-50"
            :disabled="isSubmitting">
            {{ isSubmitting ? 'Envoi…' : 'Envoyer la demande' }}
          </button>
        </form>
      </div>
    </div>
  </Teleport>
</template>
