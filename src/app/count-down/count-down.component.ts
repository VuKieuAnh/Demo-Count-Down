import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.scss']
})
export class CountDownComponent implements OnInit {
  seconds: number;
  startTimer: any;
  message: string;
  isStart = false;

  @Input('times')

  get seconds1() {
    return this.seconds;
  }

  set seconds1(value) {
    const v = Number(value);
    this.seconds = Number.isNaN(v) ? 7 : v;
  }

  constructor() {
  }

  ngOnInit() {
  }

  start() {
    this.isStart = true;
    this.startTimer = setInterval(() => {
      if (this.seconds > 0) {
        this.seconds--;
      }
      else {
        this.stop();
        this.message = "da xong";
      }
      console.log('Ham dang chay');

    }, 1000);
  }

  stop() {
    this.isStart = false;
    clearInterval(this.startTimer);
  }

  reset() {
    this.seconds = 7;
  }



}
