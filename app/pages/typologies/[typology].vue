<script setup lang="ts">
import typologies from '~/data/typologies.json'
import contents from '~/data/typologyContent'
import type { AgencyWithMeta } from '~/types/agency'
import type { ReferenceWithMeta } from '~/types/reference'
import type { Typology } from '~/types/typology'

const route = useRoute()
const typology = typologies.find((c) => c.slug === route.params.typology) as Typology
const typologyName = typology.name.toLowerCase()
const description = ref(
  `Vous avez un projet de ${typologyName} ? Nous travaillons avec des architectes dans toute la France.`
)
// const title = ref(typology.name)
// const typologyPrefix = 'aeiouyh'.includes(typologyName) ? "d'" : 'de '
// const content = contents[typology.slug as string]

const { data: agencies } = await useAsyncData<AgencyWithMeta[]>(
  `agencies-carousel:${typology.slug}`,
  () =>
    $fetch('/api/agencies', {
      query: { type: typology.actions, category: typology.categories },
    }),
  { server: true }
)
</script>

<template>
  <div>
    <h1 class="font-semibold text-title-xl max-w-title">
      Votre {{ typologyName }} avec un architecte
    </h1>
    <p class="text-gray-600 max-w-title mx-auto text-center">
      {{ description }}
    </p>
  </div>
  <div>
    <SlidersAgencies :agencies="agencies" />
  </div>
</template>
