import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';

import 'rxjs/add/observable/interval';
import 'rxjs/add/operator/throttle';
import 'rxjs/add/operator/merge';
import { Observable } from 'rxjs/Observable';

/**
 * Inactivity directive
 */
@Directive({
  selector: '[ngxInactivity]'
})
export class NgxInactivityDirective {

  /**
   * Mouse move event emitter
   */
  private mousemove = new EventEmitter();

  /**
   * Mouse down event emitter
   */
  private mousedown = new EventEmitter();

  /**
   * Keypress event emitter
   */
  private keypress = new EventEmitter();

  /**
   * SetTimeout method id
   */
  private timeoutId: any;

  /**
   * Inactivity timeout limit (defaults 15 minutes)
   */
  @Input() ngxInactivity: number = 15;

  /**
   * Inactivity interval (defaults 1000 ms)
   */
  @Input() ngxInactivityInterval: number = 1000;

  /**
   * Inactivity callback after timeout
   */
  @Output() ngxInactivityCallback = new EventEmitter();

  /**
   * Attach a mouse move listener
   */
  @HostListener('document:mousemove', ['$event'])
  onMousemove(event: any) {
    this.mousemove.emit(event);
  }

  /**
   * Atach a mouse down listener
   */
  @HostListener('document:mousedown', ['$event'])
  onMousedown(event: any) {
    this.mousedown.emit(event);
  }

  /**
   * Attach a key press listener
   */
  @HostListener('document:keypress', ['$event'])
  onKeypress(event: any) {
    this.keypress.emit(event);
  }

  constructor() {
    /*
     * Merge to flattens multiple Observables together
     * by blending their values into one Observable
     */
    this.mousemove
      .merge(this.mousedown, this.keypress)

      /*
       * Debounce to emits a value from the source Observable
       * only after a particular time span
       */
      .throttle(() => Observable.interval(this.ngxInactivityInterval))

      /*
       * Subscribe to handle emitted values
       */
      .subscribe(() => {
        this.reset();
        this.start();
      });
  }

  /**
   * Start inactivity timer
   */
  public start(): void {

    /**
     * Inactivity callback if timeout (in minutes) is exceeded
     */
    this.timeoutId = setTimeout(() => this.ngxInactivityCallback.emit(true), this.ngxInactivity * 60000);
  }

  /**
   * Reset inactivity timer
   */
  public reset(): void {
    clearTimeout(this.timeoutId);
  }

}
