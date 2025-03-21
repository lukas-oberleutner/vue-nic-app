import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseStatus from '@/components/base/BaseStatus.vue';
import { VARIANT_INFO, VARIANT_WARNING, VARIANT_ERROR } from '@/constants';

describe('BaseStatus', () => {
  it('applies correct classes for VARIANT_INFO', () => {
    const wrapper = mount(BaseStatus, {
      props: {
        variant: VARIANT_INFO,
      },
    });
    expect(wrapper.classes()).toContain('c-base-status--info');
  });

  it('applies correct classes for VARIANT_WARNING', () => {
    const wrapper = mount(BaseStatus, {
      props: {
        variant: VARIANT_WARNING,
      },
    });
    expect(wrapper.classes()).toContain('c-base-button--warning');
  });

  it('applies correct classes for VARIANT_ERROR', () => {
    const wrapper = mount(BaseStatus, {
      props: {
        variant: VARIANT_ERROR,
      },
    });
    expect(wrapper.classes()).toContain('c-base-button--error');
  });

  it('renders the slot content', () => {
    const wrapper = mount(BaseStatus, {
      props: {
        variant: VARIANT_INFO,
      },
      slots: {
        default: '<span>Status content</span>',
      },
    });
    expect(wrapper.text()).toContain('Status content');
  });
});
