import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logs: string[] = [];
  display: boolean = false;

  toggleDetails() {
    this.display = !this.display;
    this.logs.push(String(Date.now()));
  }
}
