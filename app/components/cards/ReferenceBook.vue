<template>
  <NuxtLink
    :to="realisation.url"
    target="_blank"
    tag="div"
    class="cursor-pointer hover:shadow-md transition-all ease-in-out duration-300 mb-auto">
    <div class="w-full h-[218px] overflow-hidden">
      <img
        :src="realisation.banner.default || realisation.banner.original"
        loading="lazy"
        :alt="realisation.metadata.alt"
        :title="realisation.metadata.title"
        height="218"
        sizes="100vw lg:317px 2xl:403px"
        class="object-cover object-center w-full h-full" />
    </div>
    <div class="bg-white sm:p-s p-xs">
      <p class="text-caption uppercase mb-min text-gray-600">
        {{ label }}
      </p>
      <h5 class="text-title-s font-semibold text-darkblue mb-xs">
        {{ realisation.title }}
      </h5>
      <p class="text-gray-600 text-sm">
        {{ realisation.city
        }}<template v-if="realisation.post_code || realisation.dep_code">
          ({{ realisation.post_code || realisation.dep_code }})
        </template>
      </p>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { typologies, tasks } from '~/assets/js/labels'
import type { ReferenceWithMeta } from '~/types/reference'

const props = defineProps<{ realisation: ReferenceWithMeta }>()

const label = computed(() => {
  return `${tasks.find((task) => task.value === props.realisation.type)?.label} ${typologies[props.realisation.category].withPrefix}`
})
</script>
