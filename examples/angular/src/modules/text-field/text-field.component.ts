import { Component } from '@angular/core';
import { register, LeTextField, SeTextField } from 'awesome-components';

register(LeTextField, SeTextField);

@Component({
  standalone: true,
  template: `
    <le-text-field [value]="text" (input)="inputText($event)"></le-text-field>
    <le-text-field [value]="text" (input)="inputText($event)"></le-text-field>

    <se-text-field [value]="text" (input)="inputText($event)"></se-text-field>
    <se-text-field [value]="text" (input)="inputText($event)"></se-text-field>

    {{ text }}
  `,
})
export class TextFieldComponent {
  text = '';

  inputText(event: Event) {
    this.text = (event.target as HTMLInputElement).value;
  }
}
