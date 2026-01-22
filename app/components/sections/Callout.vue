<template>
  <section class="callout-section">
    <div :class="`highlight-top ${bgColor}`" />
    <div :class="`py-xl sm:py-xxl text-center ${bgColor}`">
      <div class="app-container">
        <svg
          v-if="logoColor"
          width="140"
          height="48"
          viewBox="0 0 140 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0)">
            <path
              d="M49.7503 7.50696L49.603 20.397V48.0001H90.3969V20.397L49.7503 7.50696Z"
              fill="#9EBDFF"
              :class="`fill-current ${logoColor}`" />
            <path
              d="M20.895 0.540161L0.498047 20.3969V48H41.2858V20.3969L20.895 0.540161Z"
              fill="#9EBDFF"
              :class="`fill-current ${logoColor}`" />
            <path
              d="M116.551 0.159554C106.203 1.41173 98.708 10.7232 98.708 21.158V47.9877H139.496V20.3662C139.497 17.4707 138.883 14.608 137.693 11.9684C136.503 9.32878 134.765 6.97267 132.594 5.05667C130.423 3.14068 127.869 1.70868 125.102 0.855866C122.335 0.00304985 119.418 -0.251051 116.545 0.110448"
              fill="#9EBDFF"
              :class="`fill-current ${logoColor}`" />
          </g>
          <defs>
            <clipPath id="clip0">
              <rect width="139.004" height="48" fill="white" transform="translate(0.498047)" />
            </clipPath>
          </defs>
        </svg>
        <slot>
          <p :class="`${textColor} text-title-l font-semibold max-w-title mx-auto`">
            {{ content }}
          </p>
        </slot>
      </div>
    </div>
    <div :class="`highlight-bottom ${bgColor}`" />
  </section>
</template>

<script>
export default {
  name: 'Callout',
  props: {
    content: {
      type: String,
      default: '',
    },
    bgColor: {
      type: String,
      required: true,
    },
    textColor: {
      type: String,
      required: true,
    },
    logoColor: {
      type: String,
      default: '',
    },
  },
}
</script>

<style>
@reference '~/assets/css/main.css';
.callout-section svg {
  @apply block mx-auto my-s sm:my-m w-auto h-9 sm:h-12;
}
</style>
