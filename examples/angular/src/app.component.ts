import '@material/mwc-textfield';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { register, SimpleGreeting, WcHello, WcSwitch } from 'awesome-components';

register(SimpleGreeting, WcHello, WcSwitch);

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule],
})
export class AppComponent {
  textfield = '';
  text = '';
  checked = false;

  inputTextfield(event: Event) {
    this.textfield = (event.target as HTMLInputElement).value;
  }

  helloClick(event: CustomEvent) {
    this.text = event.detail.helloText;
  }

  changeWcSwitch(event: CustomEvent) {
    this.checked = !event.detail.checked;
  }
}
