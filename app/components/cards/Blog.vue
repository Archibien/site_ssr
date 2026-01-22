<template>
  <NuxtLink
    :href="inspi.url"
    external
    class="max-w-[250px] sm:max-w-card hover:shadow-md transition-shadow duration-300 ease-in-out h-full">
    <div class="h-[167px] sm:h-[218px] w-full overflow-hidden">
      <img
        :src="inspi.img"
        :alt="inspi.alt"
        loading="lazy"
        fetch-priority="low"
        sizes="250 lg:328px"
        class="object-cover object-center w-full h-full" />
    </div>
    <div class="bg-gray-200 py-4 px-3 sm:py-5 sm:px-4">
      <p class="text-sm sm:text-caption uppercase mb-min text-gray-600">
        {{ inspi.tag }}
      </p>
      <h5 class="text-title-s font-semibold text-darkblue mb-3 sm:mb-s">
        {{ inspi.title }}
      </h5>
      <img
        src="/img/logo-blog.png"
        alt="Logo du blog Archibien"
        fetch-priority="low"
        loading="lazy"
        class="h-5 sm:h-6 w-auto" />
    </div>
  </NuxtLink>
</template>

<script setup lang="tsx">
defineProps({
  inspi: {
    type: Object,
    required: true,
  },
})
</script>
