import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('le-checkbox')
export class LeCheckbox extends LitElement {
  static styles = css`
    @unocss-placeholder;
  `;

  private _checked = false;

  set checked(val) {
    const oldVal = this._checked;
    this._checked = val;
    this.requestUpdate('checked', oldVal);
  }

  @property({ type: Boolean })
  get checked() {
    return this._checked;
  }

  onChange(event: Event) {
    this.checked = (event.target as HTMLInputElement).checked;
    this.dispatchEvent(new CustomEvent('change', event));
  }

  render() {
    return html`<input type="checkbox" .checked=${this.checked} @change=${this.onChange} />`;
  }
}
