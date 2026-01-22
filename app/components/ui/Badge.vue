<template>
  <div
    :class="`badge-${state} py-1 px-min sm:py-min sm:px-2 font-semibold text-blue bg-blue-100 rounded-md`">
    <p>
      <slot />
    </p>
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(
  defineProps<{
    state?: string
  }>(),
  {
    state: 'active',
  }
)
</script>
