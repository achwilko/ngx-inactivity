import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxInactivity } from './ngx-inactivity/ngx-inactivity.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxInactivity
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
