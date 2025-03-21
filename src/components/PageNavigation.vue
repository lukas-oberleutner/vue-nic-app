<script setup lang="ts">
// Import
import { iconGlobe } from '@/assets/icons.ts';
import BaseIcon from '@/components/base/BaseIcon.vue';
import { SIZE_MD } from '@/constants';
</script>

<template>
  <div class="c-navigation">
    <ul>
      <li>
        <a
          href="#"
          class="flex items-center gap-4 bg-yellow-400 px-4 py-2 text-sm font-semibold hover:bg-yellow-500"
        >
          <BaseIcon
            :size="SIZE_MD"
            class="text-zinc-600"
          >
            <span v-html="iconGlobe"></span>
          </BaseIcon>
          Registry
        </a>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
