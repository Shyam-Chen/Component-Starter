import { html, css, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('le-checkbox')
export class LeCheckbox extends LitElement {
  static styles = css`
    @unocss-placeholder;
  `;

  private _checked = false;

  @property({ type: Boolean })
  set checked(checked: boolean) {
    const oldValue = this._checked;
    this._checked = checked;
    this.requestUpdate('checked', oldValue);
  }

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
