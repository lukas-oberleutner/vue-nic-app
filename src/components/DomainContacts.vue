<script setup lang="ts">
// Import
import type { IContact } from '@/types/index.d.ts';

// Interface
interface Props {
  title: string;
  data: IContact[];
}

defineProps<Props>();
</script>

<template>
  <div class="w-full rounded-sm text-sm shadow-md">
    <h2 class="rounded-t-sm border-b border-b-zinc-200 bg-zinc-100 px-4 py-2 font-bold">{{ title }}:</h2>
    <div class="flex flex-col gap-2 p-4">
      <div
        v-for="(contact, index) in data"
        :key="index"
        class="flex gap-4"
      >
        <strong class="basis-30">{{ contact.name }}:</strong>
        <span class="text-sky-500">{{ contact.handle }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
