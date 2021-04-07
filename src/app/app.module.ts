import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CountDownComponent } from './count-down/count-down.component';
import { DemoCountDownComponent } from './demo-count-down/demo-count-down.component';

@NgModule({
  declarations: [
    AppComponent,
    CountDownComponent,
    DemoCountDownComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
