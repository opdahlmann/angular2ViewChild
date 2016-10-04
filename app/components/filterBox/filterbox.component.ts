import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FilterService } from '../../services/filter.service';
import { LoggerService } from '../../services/logger.service';

@Component({
  selector: 'filter-box',
  templateUrl: 'app/components/filterBox/filterbox.html'
})
export class FilterBoxComponent {
  @Output() changed: EventEmitter<string>;
  filter: string;

  constructor(private _loggerService: LoggerService) {
    this.changed = new EventEmitter<string>();
  }

  clear() {
    this.filter = '';
  }

  filterChanged(event: any) {
    event.preventDefault();
    this._loggerService.log('FilterBox input:' + this.filter);
    this.changed.emit(this.filter);
  }
}