import type { DirectiveBinding } from 'vue';

const clickOutside = {
  mounted(el: HTMLElement, binding: DirectiveBinding) {
    const onClick = (event: MouseEvent) => {
      if (!el.contains(event.target as Node)) {
        binding.value(event);
      }
    };
    document.addEventListener('click', onClick);
    (el as any)._clickOutside = onClick;
  },
  unmounted(el: HTMLElement) {
    document.removeEventListener('click', (el as any)._clickOutside);
    delete (el as any)._clickOutside;
  },
};

export default clickOutside;
