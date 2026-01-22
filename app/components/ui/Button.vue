<template>
  <NuxtLink v-if="type === 'nuxt-link'" :to="to" tag="button" :class="btnClass">
    <slot />
  </NuxtLink>
  <a v-else-if="type === 'link'" :href="to" rel="noopener" target="_blank" :class="btnClass">
    <slot />
  </a>
  <button
    v-else
    :type="type"
    :disabled="disabled"
    :class="[btnClass, { 'cursor-not-allowed': disabled }]"
    @click="onClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed, type PropType } from 'vue'

const props = defineProps({
  type: {
    type: String as PropType<'button' | 'link' | 'nuxt-link' | 'submit'>,
    default: 'button',
    validator: (value: string) => ['button', 'link', 'nuxt-link', 'submit'].includes(value),
  },
  variant: {
    type: String as PropType<'primary' | 'secondary'>,
    default: 'primary',
    validator: (value: string) => ['primary', 'secondary'].includes(value),
  },
  size: {
    type: String as PropType<'s' | 'l'>,
    default: 's',
    validator: (value: string) => ['s', 'l'].includes(value),
  },
  to: {
    type: String as PropType<string | null>,
    default: null,
  },
  block: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
  disabled: {
    type: Boolean as PropType<boolean>,
    default: false,
  },
})

const emit = defineEmits<{ (e: 'click'): void }>()

const btnClass = computed(
  () => `btn-${props.variant} btn-${props.size} ${props.block ? 'btn-block' : ''}`
)

function onClick() {
  emit('click')
}
</script>
