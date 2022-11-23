export const register = (...cpn: any[]) => null;

import _WcHello from './WcHello.svelte';

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
export { default as WcSwitch } from './WcSwitch.svelte';
