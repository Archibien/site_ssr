<script setup lang="ts">
import { departments } from '~/data/departments'
import typologies from '~/data/typologies.json'
import contents from '~/data/typologyContent'
import type { AgencyWithMeta } from '~/types/agency'
import type { ReferenceWithMeta } from '~/types/reference'
import type { Typology } from '~/types/typology'
type Response = {
  agencies: AgencyWithMeta[]
  references: ReferenceWithMeta[]
}

const route = useRoute()
const { typologySlug, depCode } = route.params
const typology = typologies.find((c) => c.slug === typologySlug) as Typology
const typologyName = typology.name.toLowerCase()
const typologyPrefix = 'aeiouyh'.includes(typologyName[0]) ? "d'" : 'de'
const dep = departments[depCode]
const description = ref(
  `Vous avez un projet ${typologyPrefix}${typology.name.toLowerCase()} ? Nos architectes du département interviennent à ${dep.cities.join(
    ', '
  )}, et dans la plupart des autres villes et villages du ${depCode}.`
)

const { data, error } = await useAsyncData<Response>(
  `typologies:${typologySlug}:${depCode}`,
  () =>
    $fetch('/api/typologies', {
      query: { types: typology.actions.join(','), category: typology.category, code: depCode },
    }),
  { server: true }
)

if (error.value) {
  throw createError({
    statusCode: 500,
    statusMessage: 'Unable to load typologies data',
  })
}
</script>

<template>
  <div>
    <h1 class="font-semibold text-title-xl max-w-title">
      Votre {{ typology.name.toLowerCase() }} avec un architecte {{ dep.prefix2 }}
      {{ dep.department }}
    </h1>
    <p class="text-gray-600 max-w-title mx-auto text-center">
      {{ description }}
    </p>
  </div>
  <div>
    <p>Agences :</p>
    <SlidersAgencies v-if="data" :agencies="data.agencies" />

    <p>Références :</p>
    <SlidersReferences v-if="data" :references="data.references" />
  </div>
</template>
