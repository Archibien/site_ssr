<template>
  <section class="app-container">
    <div class="flex flex-wrap justify-between">
      <h2 class="text-title-m font-semibold text-darkblue w-full mb-m lg:mb-0 sm:w-1/3 pr-xs">
        Archibien répond à vos questions
      </h2>
      <UiCollapsableQuestions :questions="baseQuestions" class="w-full sm:w-2/3" />
    </div>
  </section>
</template>

<script setup>
import baseQuestions from '~/assets/js/baseQuestions'
</script>
