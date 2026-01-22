<template>
  <UiButton
    :type="type"
    :variant="variant"
    :size="size"
    :to="to"
    :block="block"
    class="space-x-2 group"
    @click="$emit('click')">
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
    <span><slot /></span>
  </UiButton>
</template>

<script>
export default {
  props: {
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
  },
  computed: {
    iconClass() {
      if (this.variant === 'primary') {
        return 'btn-icon text-white group-hover:text-blue'
      } else {
        return 'btn-icon text-blue group-hover:text-white'
      }
    },
  },
}
</script>
