import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import BaseIcon from '@/components/base/BaseIcon.vue';
import { SIZE_SM, SIZE_MD, SIZE_LG } from '@/constants';

describe('BaseIcon', () => {
  it('renders a span element by default', () => {
    const wrapper = mount(BaseIcon);
    expect(wrapper.find('span').exists()).toBe(true);
  });

  it('renders a different element based on the "as" prop', () => {
    const wrapper = mount(BaseIcon, {
      props: {
        as: 'i',
      },
    });
    expect(wrapper.find('i').exists()).toBe(true);
  });

  it('applies the "c-base-icon" class', () => {
    const wrapper = mount(BaseIcon);
    expect(wrapper.classes()).toContain('c-base-icon');
  });

  it('renders the slot content', () => {
    const wrapper = mount(BaseIcon, {
      slots: {
        default: '<span>Icon content</span>',
      },
    });
    expect(wrapper.text()).toContain('Icon content');
  });

  it('applies the correct classes for size SM', () => {
    const wrapper = mount(BaseIcon, {
      props: {
        size: SIZE_SM,
      },
    });
    expect(wrapper.classes()).toContain('c-base-icon--sm');
    expect(wrapper.classes()).toContain('size-4');
  });

  it('applies the correct classes for size MD', () => {
    const wrapper = mount(BaseIcon, {
      props: {
        size: SIZE_MD,
      },
    });
    expect(wrapper.classes()).toContain('c-base-icon--md');
    expect(wrapper.classes()).toContain('size-6');
  });

  it('applies the correct classes for size LG', () => {
    const wrapper = mount(BaseIcon, {
      props: {
        size: SIZE_LG,
      },
    });
    expect(wrapper.classes()).toContain('c-base-icon--lg');
    expect(wrapper.classes()).toContain('size-8');
  });

  it('applies flex and shrink-0 classes', () => {
    const wrapper = mount(BaseIcon);
    expect(wrapper.classes()).toContain('flex');
    expect(wrapper.classes()).toContain('shrink-0');
  });
});
