<script setup lang="ts">
import type { AgencyWithMeta } from '~/types/agency'
import type { City } from '~/types/places'
import { cities as allCities } from '~/data/cities'
import { departments } from '~/data/departments'

const route = useRoute()
const { depCode, postCode, citySlug } = route.params

type DepResponse = {
  agencies: AgencyWithMeta[]
  references: any[]
} & City

const closeCities = allCities[depCode]
const prefix = closeCities.find((c) => c.url === route.path)?.prefix
const title = ref(`Notre sélection des meilleurs architectes ${prefix}`)
const department = departments[depCode]

const { data, error } = await useAsyncData<DepResponse>(
  `cities:${postCode}:${citySlug}`,
  () =>
    $fetch('/api/cities', {
      query: {
        post_code: postCode,
        city: citySlug,
      },
    }),
  { server: true }
)
</script>

<template>
  <div>
    <h1 class="font-semibold text-title-xl max-w-title">
      Notre sélection d’architectes {{ data?.prefix }} et alentours
    </h1>
  </div>
  <div>
    <p>
      Nos dizaines d’architectes et professionnels partenaires
      <NuxtLink :to="department?.url" class="text-link">
        {{ department?.prefix2 }} {{ department?.department }}
      </NuxtLink>
    </p>
    <SlidersAgencies v-if="data && data.agencies.length > 0" :agencies="data.agencies" />
  </div>

  <div>
    <SlidersReferences v-if="data && data.references.length > 0" :references="data.references" />
  </div>
</template>
