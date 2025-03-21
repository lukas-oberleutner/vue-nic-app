<script setup lang="ts">
// Import
import { ref, computed, onMounted } from 'vue';
import { useDataStore } from '@/stores';
import StateFlags from '@/components/StateFlags.vue';
import DomainContact from '@/components/DomainContact.vue';
import DomainContacts from '@/components/DomainContacts.vue';
import DomainSet from '@/components/DomainSet.vue';
import DomainEvents from '@/components/DomainEvents.vue';
import BaseSwitch from '@/components/base/BaseSwitch.vue';
import BaseStatus from '@/components/base/BaseStatus.vue';
import DomainInfo from '@/components/DomainInfo.vue';
import BaseHeading from '@/components/base/BaseHeading.vue';

// Constants
const store = useDataStore();
const data = computed(() => store.data);
const loading = computed(() => store.loading);
const verboseView = computed(() => store.verboseView);
const password = ref('Password');

// Data
onMounted(async () => {
  await store.fetchDomainDetailData();
});

const toggleVerboseView = () => {
  store.toggleVerboseView();
};
</script>

<template>
  <div class="p-6">
    <!-- Loading -->
    <div v-if="loading">
      <BaseStatus variant="info">
        <p>Loading data...</p>
      </BaseStatus>
    </div>

    <div
      v-else-if="data"
      class="flex w-full flex-col gap-6 2xl:flex-row"
    >
      <div class="flex flex-2/3 flex-col gap-6">
        <!-- Title -->

        <BaseHeading
          as="h1"
          class="text-xl"
        >
          {{ data.fqdn }}
        </BaseHeading>

        <!-- Verbose view -->
        <BaseSwitch
          :checked="verboseView"
          @change="toggleVerboseView"
          label="Verbose view"
        />

        <!-- Domain info -->
        <DomainInfo
          :data="data.expires_at"
          :password="password"
        />

        <!-- Events box -->
        <DomainEvents
          title="Events"
          :data="data.events"
        />

        <!-- State flags -->
        <StateFlags
          :data="data.state_flags.flags"
          :verboseView="verboseView"
        />
      </div>
      <div class="flex flex-1/3 flex-col gap-6 2xl:min-w-[500px]">
        <!-- Owner -->
        <DomainContact
          title="Owner"
          :data="data.owner"
        />

        <!-- Administrative contacts -->
        <template v-if="verboseView">
          <div
            v-for="(contact, index) in data.administrative_contacts"
            :key="index"
          >
            <DomainContact
              title="Administrative contact"
              :data="contact"
            />
          </div>
        </template>
        <template v-else>
          <DomainContacts
            title="Administrative contact"
            :data="data.administrative_contacts"
          />
        </template>

        <!-- NSSet -->
        <DomainSet
          title="NSSet"
          :data="data.nsset"
        />

        <!-- KeySet -->
        <DomainSet
          title="KeySet"
          :data="data.keyset"
        />
      </div>
    </div>

    <!-- Error -->
    <div v-else>
      <BaseStatus variant="error">
        <p>Failed load data.</p>
      </BaseStatus>
    </div>
  </div>
</template>

<style scoped></style>
