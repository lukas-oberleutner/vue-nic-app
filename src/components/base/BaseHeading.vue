<script setup lang="ts">
// Interface
interface Props {
  as?: string;
}

// Props
withDefaults(defineProps<Props>(), {
  as: 'div',
});
</script>

<template>
  <component
    class="c-heading font-bold"
    :is="as"
  >
    <slot />
  </component>
</template>
