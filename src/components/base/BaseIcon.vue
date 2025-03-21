<script setup lang="ts">
import { computed } from 'vue';
import { SIZE_SM, SIZE_MD, SIZE_LG } from '@/constants';

interface Props {
  as?: string;
  size?: string;
}

const props = withDefaults(defineProps<Props>(), {
  as: 'span',
});

const computedClass = computed(() => {
  return {
    'c-base-icon--sm size-4': props.size === SIZE_SM,
    'c-base-icon--md size-6': props.size === SIZE_MD,
    'c-base-icon--lg size-8': props.size === SIZE_LG,
  };
});
</script>

<template>
  <component
    class="c-base-icon flex shrink-0"
    :class="computedClass"
    :is="as"
  >
    <slot />
  </component>
</template>
