<template>
  <div class="card-member pb-xs">
    <div class="w-20 h-20 rounded-full mb-4 overflow-hidden mx-auto flex">
      <img
        :src="
          data.avatar ? data.avatar.default || data.avatar.original : '/img/placeholders/avatar.png'
        "
        :alt="meta.alt"
        :title="meta.title"
        class="object-cover m-auto"
        loading="lazy" />
    </div>
    <div class="text-center">
      <h5 class="text-title-s font-semibold text-darkblue mb-1 sm:mb-min">
        {{ data.full_name }}
      </h5>
      <p class="text-sm sm:text-caption uppercase mb-min sm:mb-xs text-gray-600">
        {{ data.type }}
      </p>
      <p v-if="data.order_num" class="text-sm text-darkblue">
        Affiliation à l’ordre des architectes - {{ data.order_num }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  data: {
    type: Object,
    required: true,
  },
  meta: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.card-member {
  width: 154px;
}
@media (max-width: 640px) {
  .card-member {
    width: 162px;
  }
}
</style>
