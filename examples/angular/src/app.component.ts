import { Component } from '@angular/core';
import { register, WcSwitch } from 'awesome-components';

register(WcSwitch);

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  checked = false;

  changeWcSwitch(event: CustomEvent) {
    this.checked = !event.detail.checked;
  }
}
