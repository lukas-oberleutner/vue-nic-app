<script setup lang="ts">
// Import
import { computed } from 'vue';
import { SIZE_MD, VARIANT_ERROR, VARIANT_INFO, VARIANT_WARNING } from '@/constants';
import { iconInfo, iconWarning, iconError } from '@/assets/icons.ts';
import BaseIcon from '@/components/base/BaseIcon.vue';

// Interface
interface Props {
  as?: string;
  variant: string;
}

// Props
const props = withDefaults(defineProps<Props>(), {
  as: 'div',
  variant: '',
});

const iconMap = {
  [VARIANT_INFO]: iconInfo,
  [VARIANT_WARNING]: iconWarning,
  [VARIANT_ERROR]: iconError,
};

// Styles
const computedClass = computed(() => {
  return {
    'c-base-status--info bg-sky-100 text-sky-500': props.variant === VARIANT_INFO,
    'c-base-button--warning bg-yellow-100 text-yellow-600': props.variant === VARIANT_WARNING,
    'c-base-button--error bg-red-100 text-red-500': props.variant === VARIANT_ERROR,
  };
});
</script>

<template>
  <component
    class="c-base-status flex gap-2 rounded-sm p-2"
    :class="computedClass"
    :is="as"
  >
    <BaseIcon :size="SIZE_MD">
      <span v-html="iconMap[props.variant] || null"></span>
    </BaseIcon>
    <slot />
  </component>
</template>

<style scoped></style>
