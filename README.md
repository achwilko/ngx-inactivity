# ngx-inactivity
Angular (4.x+) directive to handle user inactivity. Very helpful especially in validated projects.


## Installation
Using NPM:
```
npm install ngx-inactivity --save
```


## Requirements
 - [Angular](https://github.com/angular/angular) (4.x+)
 - [RxJS](https://github.com/Reactive-Extensions/RxJS)  (5.x+)

## Usage
In your app.module file:
```ts
import { NgxInactivity } from 'ngx-inactivity';

@NgModule({
  ...
  imports: [
    NgxInactivity
  ]
  ...
})
```


In your app.component.html file:
```html
<div class="app" (ngxInactivityCallback)="handleInactivityCallback()">
```

In your app.component.ts file
```ts
export class AppComponent {

  /**
   * Handle inactivity callback
   */
  public handleInactivityCallback() {
    // Sign out current user or display specific message regarding inactivity
  }
}
```


## Options
- **[ngxInactivity]** - inactivity timeout in minutes (15 minutes by defualt)
- **(ngxInactivityInterval)** - inactivity time interval in mili seconds (1000 ms by default)
- **[ngxInactivityCallback]** - event emitter to handle inactivity callback


## Examples
- Add callback "handleUserInactivity" after 10 minutes of user's inactivity (no mouse moves, clicks or keypresses):
```html
<div
  [ngxInactivity]="10"
  (ngxInactivityCallback)="handleUserInactivity()">
  Application template..
</div>
```
