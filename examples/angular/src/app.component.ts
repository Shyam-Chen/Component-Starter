import { Component } from '@angular/core';
import { SimpleGreeting, MyButton } from 'awesome-components';

SimpleGreeting;
MyButton;

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  myLabel = '';

  myClick(event: CustomEvent) {
    console.log(event);
    this.myLabel = event.detail.label;
  }
}
