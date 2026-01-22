<template>
  <section class="mb-l">
    <SectionsCarousel>
      <div
        v-for="(image, index) in images"
        :key="index"
        :ref="`image_${index}`"
        class="basis-[300px] sm:basis-[400px] xl:basis-[500px] mr-5 container-slide"
        @click="() => showImg(index)">
        <img
          :src="image.image.thumbnail || image.image.original"
          :alt="meta[index].alt"
          :title="meta[index].title"
          class="cursor-pointer"
          loading="lazy" />
        <h4 class="font-semibold text-darkblue text-title-s mt-xs mb-1">
          {{ image.title }}
        </h4>
        <p v-if="image.copyright" class="text-gray-500 text-caption uppercase mb-min">
          @ {{ image.copyright }}
        </p>
        <p class="image-description text-gray-600">
          {{ image.description }}
        </p>
      </div>
    </SectionsCarousel>

    <!-- Gallery of images to display "full resolution" images -->
    <VueEasyLightbox
      :visible="visibleRef"
      :imgs="images.map((img) => ({ src: img.image.hd, title: img.title }))"
      :index="indexRef"
      loop
      move-disabled
      rotate-disabled
      pinch-disabled
      @hide="onHide" />
  </section>
</template>

<script setup lang="ts">
defineProps({
  images: {
    type: Array,
    required: true,
  },
  meta: {
    type: Array,
    required: true,
  },
})

const visibleRef = ref(false)
const indexRef = ref(0)
const showImg = (index: number) => {
  indexRef.value = index
  visibleRef.value = true
}
const onHide = () => (visibleRef.value = false)
</script>

<style>
@reference 'tailwindcss';

.vel-img {
  @apply mb-5;
}
.vel-img-title {
  @apply text-base text-white;
}
</style>
