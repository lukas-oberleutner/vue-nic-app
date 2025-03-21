<script setup lang="ts">
// Import
import { ref } from 'vue';
import DomainDetailView from './views/DomainDetailView.vue';
import PageHeader from '@/components/PageHeader.vue';
import PageRow from '@/components/PageRow.vue';

// Constants
const isSidebarVisible = ref(true);

// Methods
const toggleSidebar = () => {
  isSidebarVisible.value = !isSidebarVisible.value;
};
</script>

<template>
  <!-- Header -->
  <PageHeader @toggleSidebar="toggleSidebar" />

  <!-- Container -->
  <div class="flex w-full">
    <!-- Left -->
    <PageRow :isSidebarVisible="isSidebarVisible" />

    <!-- Content -->
    <main class="flex-1 overflow-x-hidden">
      <DomainDetailView />
    </main>
  </div>
</template>

<style scoped></style>
