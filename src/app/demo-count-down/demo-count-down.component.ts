import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-demo-count-down',
  templateUrl: './demo-count-down.component.html',
  styleUrls: ['./demo-count-down.component.scss']
})
export class DemoCountDownComponent implements OnInit {
  @Input('times')

  get second() {
    return this.kieuanh;
  }
  set second(value) {
    const v = Number(value);
    this.kieuanh = Number.isNaN(v) ? 15 : v;
  }
  constructor() { }

  startTimer: any;

  kieuanh = 10;

  ngOnInit() {
  }

  start() {
    this.startTimer = setInterval(() => {
      this.kieuanh --;
      this.isCountDownFinish();
      console.log(this.kieuanh);
    }, 1000);
  }

  stop() {
    clearInterval(this.startTimer);
  }

  @Output()
  finish = new EventEmitter<boolean>();
  isCountDownFinish() {
    if (this.kieuanh == 0) {
      this.stop();
      this.finish.emit(true);
    }
  }

}
