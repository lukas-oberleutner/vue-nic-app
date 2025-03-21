<script setup lang="ts">
import { computed } from 'vue';
import type { IContact, IPublish } from '@/types/index.d.ts';
import { iconEye, iconEyeSlash } from '@/assets/icons.ts';

// Interface
interface Props {
  title: string;
  data: IContact;
}

const props = defineProps<Props>();

const publishData = computed<IPublish>(() => props.data.publish ?? {});

const filteredData = computed(() => {
  const data = props.data || {};
  return Object.entries(data).filter(([key]) => key !== 'publish');
});

const getPublishIcon = (key: string) => {
  const publish = publishData.value;
  const value = publish[key as keyof IPublish];

  if (value === true) {
    return { icon: iconEye, color: 'text-green-500' };
  }

  if (value === false) {
    return { icon: iconEyeSlash, color: 'text-red-500' };
  }

  return null;
};
</script>

<template>
  <div
    class="w-full rounded-sm text-sm shadow-md"
    v-if="filteredData.length"
  >
    <h2 class="rounded-t-sm border-b border-b-zinc-200 bg-zinc-100 px-4 py-2 font-bold">{{ title }}:</h2>
    <div class="grid grid-cols-[1rem_7.5rem_auto] place-content-start items-center gap-x-2 gap-y-1 p-4">
      <template
        v-for="([key, value], index) in filteredData"
        :key="index"
      >
        <!-- Ikona -->
        <span
          v-if="getPublishIcon(key)"
          v-html="getPublishIcon(key)?.icon"
          :class="getPublishIcon(key)?.color"
          class="size-4 shrink-0"
        />
        <span v-else></span>

        <!-- Key -->
        <strong class="truncate capitalize">{{ key }}:</strong>

        <!-- Value -->
        <span
          class="truncate"
          :class="{ 'text-sky-500': key === 'handle' }"
          >{{ value }}</span
        >
      </template>
    </div>
  </div>
</template>

<style scoped></style>
