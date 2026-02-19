<template>
  <UiButton
    :type="type"
    :variant="variant"
    :size="size"
    :to="to"
    :block="block"
    class="space-x-2 group"
    @click="emit('click')">
    <svg xmlns="http://www.w3.org/2000/svg" v-if="icon == 'call'" :class="iconClass">
      <g clip-path="url(#clip0)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.885.51a1.745 1.745 0 012.61.164L6.29 2.98c.33.423.445.974.315 1.494l-.547 2.19a.678.678 0 00.178.643l2.457 2.457a.678.678 0 00.644.178l2.19-.547a1.745 1.745 0 011.493.315l2.306 1.794c.83.645.905 1.87.163 2.61l-1.034 1.035c-.74.74-1.846 1.065-2.877.702a18.633 18.633 0 01-7.01-4.42 18.634 18.634 0 01-4.42-7.01c-.362-1.03-.037-2.136.703-2.876L1.885.51z" />
      </g>
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" v-else-if="icon == 'message'" :class="iconClass">
      <path
        d="M0 2a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4.414a1 1 0 00-.707.293L.854 15.146A.5.5 0 010 14.793V2zm3.5 1a.5.5 0 100 1h9a.5.5 0 000-1h-9zm0 2.5a.5.5 0 100 1h9a.5.5 0 000-1h-9zm0 2.5a.5.5 0 100 1h5a.5.5 0 100-1h-5z" />
    </svg>
    <svg xmlns="http://www.w3.org/2000/svg" v-else-if="icon == 'tel'" :class="iconClass">
      <g clip-path="url(#clip0)">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M1.65.447a1.527 1.527 0 012.283.142l1.57 2.018c.289.37.39.852.277 1.307L5.3 5.832a.593.593 0 00.157.562l2.15 2.15a.593.593 0 00.563.156l1.915-.479a1.527 1.527 0 011.308.276l2.017 1.57c.726.564.792 1.636.143 2.284l-.905.905c-.647.648-1.615.932-2.517.614a16.305 16.305 0 01-6.134-3.867A16.305 16.305 0 01.13 3.869c-.317-.901-.033-1.87.615-2.517L1.65.447z"
          fill="#3D7BFF" />
      </g>
      <defs>
        <clipPath id="clip0"><path fill="#fff" d="M0 0h14v14H0z" /></clipPath>
      </defs>
    </svg>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      v-else-if="icon == 'mail'"
      :class="iconClass"
      viewBox="0 0 24 24">
      <!-- Icon from HeroIcons by Refactoring UI Inc - https://github.com/tailwindlabs/heroicons/blob/master/LICENSE -->
      <g fill="currentColor">
        <path
          d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0z" />
        <path
          d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0z" />
      </g>
    </svg>
    <span v-if="hasTitle"><slot /></span>
  </UiButton>
</template>

<script setup>
import { computed, useSlots } from 'vue'

const emit = defineEmits(['click'])

const props = defineProps({
  type: {
    type: String,
    default: 'button',
    validator(value) {
      return ['button', 'link', 'nuxt-link'].includes(value)
    },
  },
  variant: {
    type: String,
    default: 'primary',
    validator(value) {
      return ['primary', 'secondary'].includes(value)
    },
  },
  size: {
    type: String,
    default: 's',
    validator(value) {
      return ['s', 'l'].includes(value)
    },
  },
  to: {
    type: String,
    default: null,
  },
  block: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: null,
  },
})

const iconClass = computed(() =>
  props.variant === 'primary'
    ? 'btn-icon text-white group-hover:text-blue'
    : 'btn-icon text-blue group-hover:text-white'
)

// Slots info requested at the end of setup
const slots = useSlots()
const hasTitle = !!slots.default
</script>
