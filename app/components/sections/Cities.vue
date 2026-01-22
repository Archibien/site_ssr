<template>
  <section>
    <div class="highlight-top bg-gray-200" />
    <div class="bg-gray-200 py-xl">
      <div class="app-container">
        <h2 class="text-title-m font-semibold text-darkblue mb-l">À propos d'Archibien</h2>
        <template v-if="props.cities.length > 0">
          <h5 class="text-title-s font-semibold text-darkblue mb-m">
            Trouvez le bon architecte partout <slot />
          </h5>
          <div class="grid lg:grid-cols-3 grid-cols-2 gap-4">
            <NuxtLink
              v-for="(city, index) in props.cities"
              :key="index"
              :to="city.url"
              class="text-gray-600 hover:text-link"
              no-prefetch>
              Architecte {{ city.prefix }}
            </NuxtLink>
          </div>
        </template>
        <template v-if="props.typologies">
          <h4 class="text-title-s font-semibold text-darkblue mt-l mb-m">
            Nous accompagnons ces projets
          </h4>
          <div class="grid lg:grid-cols-3 grid-cols-2 gap-4">
            <NuxtLink
              v-for="typo in categories"
              :key="typo.slug"
              :to="`/typologies/${typo.slug}/`"
              class="text-gray-600 hover:text-link"
              no-prefetch>
              {{ typo.name }}
            </NuxtLink>
          </div>
        </template>
        <template v-if="props.localTypologies">
          <h4 class="text-title-s font-semibold text-darkblue mt-l mb-m">
            Nous accompagnons ces projets <slot />
          </h4>
          <div class="grid lg:grid-cols-3 grid-cols-2 gap-4">
            <NuxtLink
              v-for="typo in categories"
              :key="typo.slug"
              :to="`/typologies/${typo.slug}/${props.location.dptCode}-${props.location.departmentSlug}/`"
              class="text-gray-600 hover:text-link"
              no-prefetch>
              {{ typo.name }} {{ props.location.prefix2 }} {{ props.location.department }}
            </NuxtLink>
          </div>
        </template>
      </div>
    </div>
    <div class="highlight-bottom bg-gray-200" />
  </section>
</template>

<script setup lang="ts">
import categories from '~/data/typologies.json'
import type { City } from '~/types/places'

interface Location {
  dptCode: string
  departmentSlug: string
  prefix2: string
  department: string
}

interface Props {
  cities?: City[]
  location?: Location
  typologies?: boolean
  localTypologies?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  cities: () => [],
  location: () => ({}),
  typologies: false,
  localTypologies: false,
})
</script>
