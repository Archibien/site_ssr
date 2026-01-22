<template>
  <div class="w-full flex flex-col items-center md:items-stretch md:flex-row relative bg-gray-200">
    <div class="highlight-bottom bg-gray-100 absolute top-0 left-0 -my-px" />
    <div class="overflow-hidden md:w-1/2">
      <img
        :src="`/img/categories/blog-images/${image}`"
        loading="lazy"
        :alt="`${imageAlt}`"
        class="object-cover object-center w-full h-full min-h-blogmobile sm:min-h-blog" />
    </div>
    <div class="pb-xxl md:pb-maximum pt-l md:pt-xxl md:w-1/2 md:ml-xl md:my-auto md:pr-l">
      <div
        class="flex flex-col md:flex-row items-center md:justify-between mx-auto md:mx-0 mb-l xl:mr-16">
        <p class="font-semibold text-title-s text-darkblue">Ils sont passés par Archibien</p>
        <a href="https://blog.archibien.com/">
          <img src="/img/logo-blog.png" alt="Logo du blog Archibien" class="h-m mt-xs" />
        </a>
      </div>
      <blockquote>
        <img
          src="/img/quote.png"
          alt="Guillemet"
          class="h-xl block mx-auto md:mx-0"
          loading="lazy" />
        <p
          class="text-title-m text-darkblue font-semibold text-center md:text-left max-w-title mx-auto md:mx-0 -mt-8 mb-xs sm:mb-s px-xs md:px-0">
          {{ quote }}
        </p>
      </blockquote>
      <div class="mx-auto md:mx-0 text-center md:text-left">
        <cite class="not-italic text-gray-600">- {{ author }}</cite>
      </div>
      <div class="mt-l text-center md:text-left">
        <a :href="`${url}`" target="_blank"
          ><UiButton variant="secondary">Découvrir le projet</UiButton></a
        >
      </div>
    </div>
    <div class="highlight-top bg-gray-100 absolute bottom-0 left-0" />
  </div>
</template>

<script setup lang="ts">
interface Props {
  quote: string
  author: string
  url: string
  image: string
  imageAlt: string
}

const props = defineProps<Props>()
</script>
