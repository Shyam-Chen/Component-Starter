export const register = (...cpn: any[]) => null;

/**
 * @lit
 */

export { SimpleGreeting } from './simple-greeting';
export { LeCheckbox } from './le-checkbox';
export { LeTextField } from './le-text-field';

/**
 * @svelte
 */

export { default as SeCheckbox } from './se-checkbox.svelte';
export { default as SeTextField } from './se-text-field.svelte';

import _WcHello from './WcHello.svelte';
import _WcSwitch from './WcSwitch.svelte';

const customElements = {
  define: (tagName, CustomElement) => {
    class CustomElementWrapper extends CustomElement {
      static get observedAttributes() {
        return (super.observedAttributes || []).map((attr) =>
          attr.replace(/([a-zA-Z])(?=[A-Z])/g, '$1-').toLowerCase(),
        );
      }

      attributeChangedCallback(attrName, oldValue, newValue) {
        super.attributeChangedCallback(
          attrName.replace(/-([a-z])/g, (_, up) => up.toUpperCase()),
          oldValue,
          newValue === '' ? true : newValue,
        );
      }
    }

    window.customElements.define(tagName, CustomElementWrapper);
  },
};

export const WcHello = customElements.define('wc-hello', _WcHello);
export const WcSwitch = customElements.define('wc-switch', _WcSwitch);
