<script setup lang="ts">
import type { AgencyWithMeta } from '~/types/agency'
import { departments } from '~/data/departments'
import type { Department } from '~/types/places'

const route = useRoute()
const code = route.params?.department.split('-')[0]
const dep = departments[code] as Department
const depWithPrefix = computed(() => {
  return dep.prefix1.endsWith("'")
    ? `${dep.prefix1}${dep.department}`
    : `${dep.prefix1} ${dep.department}`
})
const title = ref(`Notre sélection des meilleurs architectes ${depWithPrefix.value} (${code})`)
type DepResponse = {
  agencies: AgencyWithMeta[]
  references: any[]
}
const { data } = await useAsyncData<DepResponse>(
  `departments:${code}`,
  () =>
    $fetch(`/api/departments`, {
      query: { code },
    }),
  { server: true }
)
</script>

<template>
  <div>
    <h1 class="font-semibold text-title-xl max-w-title">
      {{ title }}
    </h1>
    <h2 class="text-darkblue font-semibold text-title-l mb-min sm:mb-xs text-center">
      Comparez et choisissez votre architecte {{ dep.prefix2 }} {{ dep.department }} avec Archibien
    </h2>
  </div>
  <div>
    <SlidersAgencies v-if="data && data.agencies.length > 0" :agencies="data.agencies" />
  </div>
</template>
