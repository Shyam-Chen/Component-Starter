import { Component } from '@angular/core';
import { register, WcHello, WcSwitch } from 'awesome-components';

register(WcHello, WcSwitch);

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  text = '';
  checked = false;

  helloClick(event: CustomEvent) {
    this.text = event.detail.helloText;
  }

  changeWcSwitch(event: CustomEvent) {
    this.checked = !event.detail.checked;
  }
}
