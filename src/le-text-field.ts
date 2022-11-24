import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('le-text-field')
export class LeTextField extends LitElement {
  static styles = css`
    @unocss-placeholder;
  `;

  @property() type = 'text';

  private _value = '';

  @property({ type: String })
  set value(value: string) {
    const oldValue = this._value;
    this._value = value;
    this.requestUpdate('value', oldValue);
  }

  get value() {
    return this._value;
  }

  onInput(event: Event) {
    this.value = (event.target as HTMLInputElement).value;
    this.dispatchEvent(new CustomEvent('input', event));
  }

  render() {
    return html`
      <input
        type=${this.type}
        class="box-border appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none"
        .value=${this.value}
        @input=${this.onInput}
      />
    `;
  }
}
