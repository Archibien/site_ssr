<template>
  <NuxtLink :to="data.url" target="_blank" as="div" class="max-w-[250px] sm:max-w-card">
    <div class="h-[167px] sm:h-[218px] w-full mb-xs overflow-hidden">
      <img
        :src="data.banner.default || data.banner.thumbnail || data.banner.original"
        :alt="data.metadata.alt"
        :title="data.metadata.title"
        loading="lazy"
        height="218"
        sizes="200px lg:327px"
        width="327"
        class="object-cover object-center w-full h-full" />
    </div>
    <!-- :modifiers="{ passThrough: 'true' }" -->
    <div>
      <p class="text-sm sm:text-caption uppercase mb-min text-gray-600">
        {{ data.agency }}
      </p>
      <h5 class="text-title-s font-semibold text-darkblue mb-xs">
        {{ data.title }}
      </h5>
      <p class="text-gray-600">
        {{ data.city
        }}<template v-if="data.post_code || data.dep_code">
          ({{ data.post_code || data.dep_code }})
        </template>
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { ReferenceWithMeta } from '~/types/reference'

defineProps<{ data: ReferenceWithMeta }>()
</script>
