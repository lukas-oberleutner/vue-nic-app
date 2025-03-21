<script setup lang="ts">
// Import
import { computed } from 'vue';
import { iconCheckCircle, iconXCircle } from '@/assets/icons.ts';
import type { IFlag } from '@/types/index.d.ts';

// Interface
interface Props {
  data: IFlag[];
  verboseView: boolean;
}

const props = defineProps<Props>();

const filteredFlags = computed((): IFlag[] => {
  const flagsArray = props.data;

  if (props.verboseView) {
    return flagsArray;
  } else {
    return flagsArray.filter((flag: IFlag) => flag.active);
  }
});
</script>

<template>
  <div
    v-if="filteredFlags.length"
    class="w-full max-w-full rounded-sm text-sm shadow-md"
  >
    <h2 class="rounded-t-sm border-b border-b-zinc-200 bg-zinc-100 px-4 py-2 font-bold">State flags:</h2>
    <div class="grid gap-2 p-4 lg:grid-cols-2 xl:grid-cols-3">
      <div
        v-for="flag in filteredFlags"
        :key="flag.name"
        :class="{ 'text-green-500': flag.active, 'text-red-500': !flag.active }"
        class="flex gap-2"
      >
        <span
          v-if="flag.active"
          class="size-5 shrink-0"
          v-html="iconCheckCircle"
        />
        <span
          v-else
          class="size-5 shrink-0"
          v-html="iconXCircle"
        />
        <div class="grow-0">{{ flag.description }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
