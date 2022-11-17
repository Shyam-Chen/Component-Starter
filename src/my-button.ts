import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

export interface MyButtonEvent {
  label: string;
  date: string;
}

@customElement('my-button')
export class MyButton extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      padding: 10px;
      background: #5fe1ee;
      border-radius: 5px;
      cursor: pointer;
    }
  `;

  @property({ type: String }) 'my-label': string = '';

  handleClick() {
    const detail = { label: this['my-label'], date: new Date().toISOString() };

    this.dispatchEvent(new CustomEvent<MyButtonEvent>('my-click', { detail }));
    this.dispatchEvent(new CustomEvent<MyButtonEvent>('MyClick', { detail }));
  }

  render() {
    return html`<span @click=${this.handleClick}> ${this['my-label']} </span>`;
  }
}
