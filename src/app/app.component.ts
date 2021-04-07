import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'timer-google';

  isFinish = '';

  finishCoundown() {
    this.isFinish = 'Ket thuc';
  }
}
