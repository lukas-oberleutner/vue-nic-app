<script setup lang="ts">
// Imports
import { iconMenu } from '@/assets/icons.ts';
import BaseButton from '@/components/base/BaseButton.vue';
import BaseIcon from '@/components/base/BaseIcon.vue';
import { SIZE_MD, VARIANT_ICON } from '@/constants';
import UserNavigation from '@/components/UserNavigation.vue';

// Interface
interface Props {
  as?: string;
}

// Props
withDefaults(defineProps<Props>(), {
  as: 'header',
});

// Emits
const emit = defineEmits(['toggleSidebar']);

// Methods
const toggleSidebar = () => {
  emit('toggleSidebar');
};
</script>

<template>
  <component
    :is="as"
    class="sticky top-0 left-0 z-20 flex w-full justify-between bg-sky-500 p-2 text-white shadow-lg"
  >
    <div class="flex items-center gap-4">
      <!-- Navigation -->
      <BaseButton
        :variant="VARIANT_ICON"
        class="hover:bg-sky-600"
        aria-label="Toggle navigation menu"
        @click="toggleSidebar"
      >
        <template #icon>
          <BaseIcon :size="SIZE_MD">
            <span v-html="iconMenu"></span>
          </BaseIcon>
        </template>
      </BaseButton>

      <!-- Brand -->
      <div>Ferda</div>
    </div>

    <!-- User -->
    <UserNavigation />
  </component>
</template>

<style scoped></style>
