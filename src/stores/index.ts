// Import
import { defineStore } from 'pinia';
import type { IDomainDetailData } from '@/types';

// Constants
const DOMAIN_DETAIL_DATA_URL = 'data/domain-detail.json';

export const useDataStore = defineStore('store', {
  state: (): { data: IDomainDetailData | null; loading: boolean; verboseView: boolean } => ({
    data: null,
    loading: false,
    verboseView: false,
  }),
  actions: {
    async fetchDomainDetailData() {
      this.loading = true;
      try {
        const response = await fetch(DOMAIN_DETAIL_DATA_URL);
        this.data = await response.json();
      } catch (error) {
        console.error(`Failed to load data from ${DOMAIN_DETAIL_DATA_URL}:`, error);
      } finally {
        this.loading = false;
      }
    },
    toggleVerboseView() {
      this.verboseView = !this.verboseView;
    },
  },
});
