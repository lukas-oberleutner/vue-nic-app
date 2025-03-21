<script setup lang="ts">
// Import
import { ref } from 'vue';
import { iconLogout, iconUser } from '@/assets/icons.ts';
import { SIZE_MD, SIZE_LG, VARIANT_GHOST } from '@/constants';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseIcon from '@/components/base/BaseIcon.vue';

// Interface
interface Props {
  as?: string;
}

// Props
withDefaults(defineProps<Props>(), {
  as: 'div',
});

// Constants
const isUserNavigationVisible = ref(false);

// Methods
const toggleUserNavigation = (event: MouseEvent) => {
  event.stopPropagation();
  isUserNavigationVisible.value = !isUserNavigationVisible.value;
};

const closeUserNavigation = () => {
  isUserNavigationVisible.value = false;
};
</script>

<template>
  <component
    :is="as"
    class="relative"
  >
    <!-- Button -->
    <BaseButton
      :variant="VARIANT_GHOST"
      class="hover:bg-sky-600"
      aria-label="Toggle user navigation"
      @click="toggleUserNavigation"
    >
      <template #icon>
        <BaseIcon :size="SIZE_MD">
          <span v-html="iconUser"></span>
        </BaseIcon>
      </template>
      <template #value>
        <span>Jan Musílek</span>
      </template>
    </BaseButton>

    <!-- Navigation -->
    <div
      v-click-outside="closeUserNavigation"
      class="absolute right-0 z-10 mt-2 min-w-64 rounded-sm bg-white text-black shadow-md"
      :class="{ hidden: !isUserNavigationVisible }"
    >
      <div class="flex items-center gap-2 border-b border-b-zinc-200 p-4">
        <BaseIcon
          :size="SIZE_LG"
          class="text-zinc-700"
        >
          <span v-html="iconUser"></span>
        </BaseIcon>
        <div class="flex flex-col">
          <span>Jan Musílek</span>
          <span class="text-sm text-gray-500">admin</span>
        </div>
      </div>
      <div class="p-2">
        <BaseButton
          class="group w-full"
          :variant="VARIANT_GHOST"
        >
          <template #icon>
            <BaseIcon
              :size="SIZE_MD"
              class="text-zinc-700 group-hover:text-sky-600"
            >
              <span v-html="iconLogout"></span>
            </BaseIcon>
          </template>
          <template #value>
            <span class="group-hover:text-sky-600">Logout</span>
          </template>
        </BaseButton>
      </div>
    </div>
  </component>
</template>

<style scoped></style>
