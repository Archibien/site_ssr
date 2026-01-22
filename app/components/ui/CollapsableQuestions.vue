<template>
  <div>
    <div
      v-for="(question, index) in questions"
      :key="`question_accordion_${index}`"
      class="p-m border-darkblue border -mb-px">
      <div
        class="flex justify-between space-x-3 items-center group cursor-pointer"
        @click="toggleActive(index)">
        <span
          class="text-title-s font-semibold text-darkblue group-hover:text-blue transition-all duration-300 ease-in-out"
          >{{ question.title }}</span
        >
        <button class="focus:outline-none" aria-label="Toggle content">
          <svg
            width="12"
            height="12"
            class="fill-current text-darkblue transform duration-300 origin-center group-hover:text-blue transition-all ease-in-out group-hover:cursor-pointer"
            :class="index == activeIndex ? 'rotate-45' : 'rotate-0'"
            viewBox="0 0 12 12"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 0C6.19891 0 6.38968 0.0790178 6.53033 0.21967C6.67098 0.360322 6.75 0.551088 6.75 0.75V5.25H11.25C11.4489 5.25 11.6397 5.32902 11.7803 5.46967C11.921 5.61032 12 5.80109 12 6C12 6.19891 11.921 6.38968 11.7803 6.53033C11.6397 6.67098 11.4489 6.75 11.25 6.75H6.75V11.25C6.75 11.4489 6.67098 11.6397 6.53033 11.7803C6.38968 11.921 6.19891 12 6 12C5.80109 12 5.61032 11.921 5.46967 11.7803C5.32902 11.6397 5.25 11.4489 5.25 11.25V6.75H0.75C0.551088 6.75 0.360322 6.67098 0.21967 6.53033C0.0790178 6.38968 0 6.19891 0 6C0 5.80109 0.0790178 5.61032 0.21967 5.46967C0.360322 5.32902 0.551088 5.25 0.75 5.25H5.25V0.75C5.25 0.551088 5.32902 0.360322 5.46967 0.21967C5.61032 0.0790178 5.80109 0 6 0Z" />
          </svg>
        </button>
      </div>
      <Collapse :when="index == activeIndex">
        <div class="text-para text-gray-600 mt-xs space-y-2 max-w-title" v-html="question.answer" />
      </Collapse>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Collapse } from 'vue-collapsed'

const props = defineProps({
  questions: {
    type: Array,
    default: () => [],
  },
})

const activeIndex = ref(null)

const toggleActive = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}
</script>
