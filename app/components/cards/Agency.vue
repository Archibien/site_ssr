<template>
  <NuxtLink :to="data.url" tag="div" class="cursor-pointer max-w-[140px] sm:max-w-[170px]">
    <div class="mx-auto rounded-full mb-4 overflow-hidden size-[60px] sm:size-[100px]">
      <img
        :src="
          data.is_subscribed
            ? data.logo.default || data.logo.original
            : '/img/placeholders/logo-archibien.jpg'
        "
        loading="lazy"
        class="object-cover w-full h-full"
        sizes="60px sm:100px"
        :alt="data?.metadata?.alt"
        :title="data?.metadata?.title" />
    </div>
    <!-- :modifiers="{ passThrough: 'true' }" -->
    <div class="text-center">
      <p class="text-sm sm:text-caption uppercase mb-min text-gray-600">
        {{ data.type }}
      </p>
      <h5 class="text-title-s font-semibold text-darkblue mb-xs truncate">
        {{ data.name }}
      </h5>
      <p class="text-sm sm:text-caption font-semibold uppercase text-gray-600">
        {{ data.work_zones.map((wl) => wl.city).join(', ') }}
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { AgencyWithMeta } from '~/types/agency'
defineProps<{
  data: AgencyWithMeta
}>()
</script>
