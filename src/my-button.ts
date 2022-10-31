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

  @property({ type: String }) label: string = 'Hello LitElement';

  constructor() {
    super();
  }

  render() {
    return html`<span @click=${this.handleClick}> ${this.label} </span>`;
  }

  private handleClick(e: MouseEvent) {
    // this.dispatchEvent(new Event("myClick"));
    const event = new CustomEvent<MyButtonEvent>('myClick', {
      detail: {
        label: this.label,
        date: new Date().toISOString(),
      },
    });
    this.dispatchEvent(event);
  }
}
