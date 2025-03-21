<script setup lang="ts">
// Imports
import { computed } from 'vue';
import { TYPE_SUBMIT, VARIANT_GHOST, VARIANT_ICON, VARIANT_PRIMARY, VARIANT_SECONDARY } from '@/constants';

// Interface
interface Props {
  as?: string;
  variant?: string;
  type?: string;
  isDisabled?: boolean;
}

// Props
const props = withDefaults(defineProps<Props>(), {
  as: 'button',
  type: TYPE_SUBMIT,
});

// Emits
const emit = defineEmits(['click']);

// Styles
const computedClass = computed(() => {
  return {
    'c-base-button--primary text-white uppercase px-4 py-1 bg-sky-500 hover:bg-sky-600 shadow-md':
      props.variant === VARIANT_PRIMARY,
    'c-base-button--secondary': props.variant === VARIANT_SECONDARY,
    'c-base-button--ghost px-2 py-2': props.variant === VARIANT_GHOST,
    'c-base-button--icon px-2 py-2': props.variant === VARIANT_ICON,
  };
});

// Methods
function handleClick(e: Event) {
  if (!props.isDisabled) {
    return emit('click', e);
  }
}
</script>

<template>
  <component
    class="c-base-button flex cursor-pointer gap-2 rounded-sm duration-500 ease-out disabled:cursor-not-allowed disabled:opacity-40"
    :class="computedClass"
    :is="as"
    :type="type"
    :disabled="isDisabled"
    @click="handleClick"
  >
    <slot name="icon" />
    <slot name="value" />
  </component>
</template>
