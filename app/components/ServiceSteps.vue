<template>
  <div>
    <ul class="space-y-4 sm:space-y-6">
      <li
        v-for="(step, index) in steps"
        :key="step.anchor"
        class="text-gray-500 flex items-center cursor-pointer">
        <div
          class="h-4 w-4 flex justify-center items-center mr-4"
          :class="{ [`rounded-full bg-${color}-200`]: index == activeIndex }">
          <div
            class="h-2 w-2 rounded-full"
            :class="index == activeIndex ? `bg-${color}-600` : 'bg-gray-500'" />
        </div>
        <span
          :class="{ [`font-semibold text-${color}-500`]: index == activeIndex }"
          @click="goToStep(step, index)"
          >{{ step.label }}</span
        >
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps({
  steps: {
    type: Array as () => { anchor: string; label: string }[],
    required: true,
  },
  color: {
    type: String,
    default: 'blue',
  },
})

const emit = defineEmits(['click'])

const activeIndex = ref(0)

const goToStep = (step: { anchor: string }, index: number) => {
  activeIndex.value = index
  emit('click', step.anchor)
}
</script>
