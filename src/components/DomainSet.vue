<script setup lang="ts">
// Import
import type { INsset, IKeyset } from '@/types/index.d.ts';

// Interface
interface Props {
  title: string;
  data: INsset | IKeyset;
}

defineProps<Props>();
</script>

<template>
  <div v-if="data">
    <div class="w-full rounded-sm text-sm shadow-md">
      <h2 class="rounded-t-sm border-b border-b-zinc-200 bg-zinc-100 px-4 py-2 font-bold">{{ title }}:</h2>
      <div class="flex flex-col justify-center gap-2 p-4">
        <div
          v-for="(value, key) in data"
          :key="key"
          class="flex overflow-hidden"
        >
          <strong class="shrink-0 basis-30 capitalize">{{ key }}:</strong>

          <div
            v-if="Array.isArray(value)"
            class="flex min-w-0 flex-col gap-1"
          >
            <div
              v-for="(item, index) in value"
              :key="index"
              class="flex flex-wrap gap-1"
            >
              <template v-if="typeof item === 'object'">
                <div
                  v-for="(subValue, subKey) in item"
                  :key="subKey"
                >
                  <span v-if="String(subKey) === 'ip_address'">({{ subValue }})</span>
                  <span
                    v-else
                    class="truncate"
                    >{{ subValue }}</span
                  >
                </div>
              </template>
              <div
                v-else
                class="truncate"
              >
                {{ item }}
              </div>
            </div>
          </div>

          <div
            v-else
            :class="{ 'text-sky-500': key === 'handle' || key === 'registrar' }"
          >
            {{ value }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
