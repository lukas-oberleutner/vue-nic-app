import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Heading from '@/components/base/BaseHeading.vue';

describe('Heading', () => {
  it('renders a div element by default', () => {
    const wrapper = mount(Heading);
    expect(wrapper.find('div').exists()).toBe(true);
  });

  it('renders a different element based on the "as" prop', () => {
    const wrapper = mount(Heading, {
      props: {
        as: 'h1',
      },
    });
    expect(wrapper.find('h1').exists()).toBe(true);
  });

  it('applies the "c-heading" class', () => {
    const wrapper = mount(Heading);
    expect(wrapper.classes()).toContain('c-heading');
  });

  it('renders the slot content', () => {
    const wrapper = mount(Heading, {
      slots: {
        default: '<span>My Heading</span>',
      },
    });
    expect(wrapper.text()).toContain('My Heading');
  });
});
