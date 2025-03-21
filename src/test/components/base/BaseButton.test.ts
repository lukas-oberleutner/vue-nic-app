import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseButton from '@/components/base/BaseButton.vue';

describe('BaseButton', () => {
  it('renders a button element', () => {
    const wrapper = mount(BaseButton);
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('applies correct primary style', () => {
    const wrapper = mount(BaseButton, { props: { variant: 'primary' } });
    expect(wrapper.classes()).toContain('c-base-button--primary');
  });

  it('emits a click event', async () => {
    const wrapper = mount(BaseButton);
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('does not emit click when disabled', async () => {
    const wrapper = mount(BaseButton, { props: { isDisabled: true } });
    await wrapper.trigger('click');
    expect(wrapper.emitted('click')).toBeFalsy();
  });

  it('renders slots', () => {
    const wrapper = mount(BaseButton, {
      slots: {
        value: '<span>Test</span>',
      },
    });
    expect(wrapper.text()).toContain('Test');
  });
});
