<script setup lang="ts">
// Import
import PageNavigation from '@/components/PageNavigation.vue';

// Interface
interface Props {
  isSidebarVisible: boolean;
  as?: string;
}

// Props
withDefaults(defineProps<Props>(), {
  as: 'aside',
});
</script>

<template>
  <component
    :is="as"
    :class="{ 'ml-0': isSidebarVisible, '-ml-64': !isSidebarVisible }"
    class="fixed z-10 min-h-screen w-64 overflow-hidden border-r border-r-gray-200 bg-white transition-all duration-300 lg:static"
  >
    <div class="flex flex-col">
      <!-- Title -->
      <h2 class="p-4 text-sm font-semibold text-gray-500 uppercase">Applications</h2>

      <!-- Navigation -->
      <PageNavigation />
    </div>
  </component>
</template>

<style scoped></style>
