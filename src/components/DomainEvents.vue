<script setup lang="ts">
import type { IEvents } from '@/types/index.d.ts';
import { formatDate } from '@/utils/date.ts';

// Interface
interface Props {
  title: string;
  data: IEvents;
}

defineProps<Props>();
</script>

<template>
  <div class="w-full rounded-sm text-sm shadow-md">
    <h2 class="rounded-t-sm border-b border-b-zinc-200 bg-zinc-100 px-4 py-2 font-bold">{{ title }}:</h2>
    <div class="grid grid-cols-[7.5rem_auto] gap-2 p-4 lg:grid-cols-[7.5rem_auto_7.5rem_auto]">
      <!-- Create date -->
      <strong>Create date:</strong>
      <span>{{ formatDate(data.registered.timestamp) }}</span>
      <strong>Registrar:</strong>
      <span class="text-sky-500">{{ data.registered.registrar_handle }}</span>

      <!-- Update date -->
      <strong>Update date:</strong>
      <span>{{ formatDate(data.updated.timestamp) }}</span>
      <strong>Registrar:</strong>
      <span class="text-sky-500">{{ data.updated.registrar_handle }}</span>

      <!-- Transfer date -->
      <strong>Transfer date:</strong>
      <span>{{ formatDate(data.transferred.timestamp) }}</span>
      <strong>Registrar:</strong>
      <span class="text-sky-500">{{ data.transferred.registrar_handle }}</span>

      <!-- Delete date -->
      <strong>Delete date:</strong>
      <span v-if="data.unregistered && data.unregistered.timestamp">{{ formatDate(data.unregistered.timestamp) }}</span>
    </div>
  </div>
</template>

<style scoped></style>
