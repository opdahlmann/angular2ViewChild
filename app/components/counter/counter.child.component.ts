import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'counter',
  templateUrl: 'app/components/counter/counter.child.html'
})
export class CounterComponent {
  @Output() changed: EventEmitter<number>;
  counter: number;

  constructor(private _loggerService: LoggerService) {
    this.counter = 0;
    this.changed = new EventEmitter<number>();
  }

  clear() {
    this.counter = 0;
  }

  increase(event: any) {
    event.preventDefault();
    this.counter++;
    this._loggerService.log('Counter event:' + this.counter);
    this.changed.emit(this.counter);
  }
}