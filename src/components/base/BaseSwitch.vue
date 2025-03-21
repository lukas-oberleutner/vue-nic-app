<script setup lang="ts">
// Imports
import { computed } from 'vue';

// Interface
interface Props {
  checked: boolean;
  label?: string;
  disabled?: boolean;
}

// Props
const props = defineProps<Props>();

// Emits
const emit = defineEmits<{
  (event: 'change', value: boolean): void;
}>();

// Styles
const switchClasses = computed(() => ({
  'bg-sky-500': props.checked,
  'bg-gray-300': !props.checked,
  'cursor-not-allowed opacity-50': props.disabled,
}));

// Methods
const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emit('change', target.checked);
};
</script>

<template>
  <label class="flex cursor-pointer items-center gap-2">
    <div class="relative">
      <input
        type="checkbox"
        class="sr-only"
        :checked="checked"
        :disabled="disabled"
        @change="handleChange"
      />
      <div
        class="flex h-4 w-10 items-center rounded-full transition-colors duration-200"
        :class="switchClasses"
      >
        <span
          class="h-6 w-6 transform rounded-full shadow-md transition-transform duration-200"
          :class="{ 'translate-x-4 bg-sky-600': checked, 'translate-x-0 bg-white': !checked }"
        ></span>
      </div>
    </div>
    <span
      v-if="label"
      class="text-sm"
    >
      {{ label }}
    </span>
  </label>
</template>
