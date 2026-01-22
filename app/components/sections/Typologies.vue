<template>
  <section>
    <div class="flex app-container mb-m cursor-pointer" aria-label="Tabs">
      <span
        class="whitespace-nowrap px-m py-xs border-b-2 font-semibold"
        :class="
          active == 'housing'
            ? 'text-blue border-blue'
            : 'text-gray-500 hover:text-blue hover:border-blue border-transparent transition-all ease-in-out duration-200'
        "
        @click="active = 'housing'">
        Particuliers
      </span>
      <span
        class="whitespace-nowrap px-m py-xs border-b-2 font-semibold"
        :class="
          active == 'others'
            ? 'text-blue border-blue'
            : 'text-gray-500 hover:text-blue hover:border-blue border-transparent transition-all ease-in-out duration-200'
        "
        @click="active = 'others'">
        Professionnels
      </span>
    </div>

    <SectionsCarousel>
      <NuxtLink
        v-for="category in selectedCategories"
        :key="category.slug"
        tag="div"
        class="cursor-pointer group basis-[280px] md:basis-[320px] max-w-[20rem] mr-5 container-slide w-full"
        :to="
          location
            ? `/typologies/${category.slug}/${location.code}-${location.departmentSlug}/`
            : `/typologies/${category.slug}/`
        ">
        <img
          :src="`/img/categories/${category.image.url}`"
          :title="category.image.title"
          :loading="loading"
          sizes="120px sm:250px md:320px 2xl:320px"
          fetch-priority="low"
          :alt="category.image.alt"
          class="max-w-[320px] h-auto w-full transform md:hover:scale-105 transition-all duration-300 ease-in-out" />
        <span
          class="text-gray-700 group-hover:text-blue font-semibold text-title-s mt-xs transition-all ease-in-out duration-300 block mb-5"
          >{{ category.name }}</span
        >
      </NuxtLink>
      <div
        class="max-w-[320px] basis-[280px] md:basis-[320px] mr-5 container-slide h-full bg-blue-0 hover:shadow-md transition-shadow duration-300 ease-in-out">
        <div class="flex flex-col h-full items-center justify-center p-xs">
          <h4 class="text-title-m font-semibold mb-m sm:mb-l text-darkblue text-center">
            Votre projet ne rentre pas dans les cases ?
          </h4>
          <UiButton
            size="s"
            block
            type="link"
            to="https://meetings.hubspot.com/simon18/rdv-telephonique-20-minutes">
            Parlons-en directement !
          </UiButton>
        </div>
      </div>
      <!-- <CardsTypologyCalloutCard class="cursor-pointer basis-[140px] sm:basis-[170px] mr-5 container-slide" /> -->
    </SectionsCarousel>
  </section>
</template>

<script setup lang="ts">
import allCategories from '~/data/typologies.json'

type Location = {
  code: string
  departmentSlug: string
}

const props = withDefaults(
  defineProps<{
    location?: Location | null
    loading?: 'lazy' | 'eager'
  }>(),
  {
    location: undefined,
    loading: 'lazy',
  }
)

const active: Ref<'housing' | 'others'> = ref('housing')
const selectedCategories = computed(() =>
  active.value == 'housing'
    ? allCategories.filter((c) => c.housing)
    : allCategories.filter((c) => !c.housing)
)
</script>
