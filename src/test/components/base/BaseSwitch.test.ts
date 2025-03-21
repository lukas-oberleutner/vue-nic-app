// BaseSwitch.spec.ts
import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseSwitch from '@/components/base/BaseSwitch.vue';

describe('BaseSwitch', () => {
  it('renders a checkbox', () => {
    const wrapper = mount(BaseSwitch, {
      props: {
        checked: false,
      },
    });
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true);
  });

  it('applies correct classes when checked', async () => {
    const wrapper = mount(BaseSwitch, {
      props: {
        checked: true,
      },
    });
    expect(wrapper.find('div.flex').classes()).toContain('bg-sky-500');
    expect(wrapper.find('span.h-6').classes()).toContain('translate-x-4');
  });

  it('applies correct classes when not checked', async () => {
    const wrapper = mount(BaseSwitch, {
      props: {
        checked: false,
      },
    });
    expect(wrapper.find('div.flex').classes()).toContain('bg-gray-300');
    expect(wrapper.find('span.h-6').classes()).toContain('translate-x-0');
  });

  it('emits a change event when clicked', async () => {
    const wrapper = mount(BaseSwitch, {
      props: {
        checked: false,
      },
    });
    await wrapper.find('input[type="checkbox"]').trigger('change');
    expect(wrapper.emitted('change')).toBeTruthy();
  });

  it('renders label when provided', () => {
    const wrapper = mount(BaseSwitch, {
      props: {
        checked: false,
        label: 'Switch label',
      },
    });
    expect(wrapper.text()).toContain('Switch label');
  });

  it('applies disabled classes when disabled', () => {
    const wrapper = mount(BaseSwitch, {
      props: {
        checked: false,
        disabled: true,
      },
    });
    expect(wrapper.find('div.flex').classes()).toContain('cursor-not-allowed');
    expect(wrapper.find('div.flex').classes()).toContain('opacity-50');
  });
});
