<script setup lang="ts">
// Import
import { ref } from 'vue';
import { formatDate } from '@/utils/date.ts';
import BaseButton from '@/components/base/BaseButton.vue';
import { VARIANT_PRIMARY } from '@/constants';

// Interface
interface Props {
  data: string;
  password: string;
}

// Props
defineProps<Props>();

// Constants
const showPassword = ref(false);

// Methods
const togglePassword = () => {
  showPassword.value = !showPassword.value;
};
</script>

<template>
  <div class="flex w-full flex-col gap-2 rounded-sm p-4 text-sm shadow-md">
    <div class="flex items-center gap-4">
      <strong class="basis-30">AuthInfo:</strong>
      <div>
        <BaseButton
          :variant="VARIANT_PRIMARY"
          @click="togglePassword"
        >
          <template #value>{{ showPassword ? 'Hide' : 'Show' }}</template>
        </BaseButton>
      </div>
      <div v-if="showPassword">
        {{ password }}
      </div>
    </div>
    <div
      v-if="data"
      class="flex gap-4"
    >
      <strong class="basis-30">Expires at:</strong>
      <div>{{ formatDate(data) }}</div>
    </div>
  </div>
</template>

<style scoped></style>
