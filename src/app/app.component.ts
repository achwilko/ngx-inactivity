import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

  disabledEvents: string[] = ['mousemoVE'];
  constructor(){
  }
  public callback() {
    console.log('Inactivity callback..');
  }
}
