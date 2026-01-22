<template>
  <section>
    <div class="highlight-top bg-gray-200" />
    <div class="bg-gray-200 py-l sm:py-xl">
      <div class="app-container">
        <div class="text-center mb-l sm:mb-xl">
          <h2 class="text-title-l font-semibold text-darkblue mb-xs max-w-title mx-auto">
            {{ title }}
          </h2>
          <p class="text-gray-700 mb-s sm:mb-m max-w-[36rem] mx-auto">
            <slot
              >Nous serions ravis de vous accompagner dans votre futur projet d’architecture.<br />Nos
              premiers échanges sont gratuits, cela va de soi.</slot
            >
          </p>
          <UiButton size="l" type="link" :to="meetingLink">Prenons rendez-vous</UiButton>
        </div>
        <div class="flex items-start justify-center flex-wrap">
          <div class="text-center flex-none sm:flex-1 w-full sm:w-auto mb-8 sm:mb-0">
            <span class="text-title-s font-semibold text-darkblue mb-min">Briefez-nous</span>
            <p class="text-gray-700 mb-s sm:mb-m">
              {{
                register === 'client'
                  ? "Déposez votre projet en ligne, nous revenons vers vous avec des réponses claires et un plan d'action."
                  : 'Créez votre espace professionnel en ligne.'
              }}
            </p>
            <UiButton
              variant="secondary"
              type="link"
              :to="`https://app.archibien.com/inscription/${register}`">
              {{ register === 'client' ? 'Mon Espace Projet' : "J'inscris mon agence" }}
            </UiButton>
          </div>
          <div class="text-center flex-none sm:flex-1 w-full sm:w-auto mb-8 sm:mb-0">
            <span class="text-title-s font-semibold text-darkblue mb-min">Appelez-nous</span>
            <p class="text-gray-700 mb-s sm:mb-m">
              {{
                register === 'client'
                  ? "Nous aurons besoin d'informations claires, comme de l'adresse du bien, des données économiques, de vos besoins en terme d'accompagnement..."
                  : 'Discutons tout de suite ou prenons rendez-vous.'
              }}
            </p>
            <UiButtonIcon icon="call" variant="secondary" type="link" :to="getPhoneLink()">
              {{ phoneStore.phone }}
            </UiButtonIcon>
          </div>
          <div class="text-center flex-none sm:flex-1 w-full sm:w-auto mb-8 sm:mb-0">
            <span class="text-title-s font-semibold text-darkblue mb-min">Écrivez-nous</span>
            <p class="text-gray-700 mb-s sm:mb-m">
              {{
                register === 'client'
                  ? "Nous vous répondons sous 24h. N'hésitez pas à nous donner le maximum d'informations dans votre adresse du bien, surfaces, objectifs, budgets..."
                  : 'Nous vous répondons sous 24h.'
              }}
            </p>
            <UiButton variant="secondary" type="link" to="mailto:bonjour@archibien.com">
              bonjour@archibien.com
            </UiButton>
          </div>
        </div>
      </div>
    </div>
    <div class="highlight-bottom bg-gray-200" />
  </section>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    title?: string
    register?: 'archi' | 'client'
    meetingLink?: string
  }>(),
  {
    title: 'Démarrons ensemble votre projet',
    register: 'client',
    meetingLink: 'https://meetings.hubspot.com/simon18/rdv-telephonique-20-minutes',
  }
)
const phoneStore = usePhone()
</script>
