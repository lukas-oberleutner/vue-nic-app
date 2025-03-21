import { setActivePinia, createPinia } from 'pinia';
import { useDataStore } from '@/stores';
import { describe, it, expect, vi, beforeEach } from 'vitest';

describe('useDataStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('fetchDomainDetailData success', async () => {
    const store = useDataStore();
    const mockData = { fqdn: 'neviditelna-univerzita.cz' };

    global.fetch = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockData),
      } as Response),
    );

    await store.fetchDomainDetailData();

    expect(store.data?.fqdn).toBe('neviditelna-univerzita.cz');
    expect(store.loading).toBe(false);
  });

  it('fetchDomainDetailData error', async () => {
    const store = useDataStore();
    global.fetch = vi.fn(() => Promise.reject('Failed'));

    await store.fetchDomainDetailData();

    expect(store.data).toBeNull();
    expect(store.loading).toBe(false);
  });

  it('toggleVerboseView', () => {
    const store = useDataStore();
    store.toggleVerboseView();
    expect(store.verboseView).toBe(true);
  });
});
