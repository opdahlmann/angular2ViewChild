import { 
  Component, 
  OnInit,
  ViewChild,
  trigger,
  state,
  style,
  transition,
  animate,
  group
} from '@angular/core';
import {  Observable, Subscription } from 'rxjs/Rx';
import { Car, CarsService} from '../../services/cars.service'
import { LoggerService } from '../../services/logger.service';
import { FilterService } from '../../services/filter.service';
import animations from '../../shared/animations';
import {Title} from "@angular/platform-browser";
import {FilterBoxComponent} from "../filterBox/filterbox.component";

@Component({
    moduleId: module.id,
    selector: 'cars',
    templateUrl: 'cars.html',
    animations: (animations)
})
export class CarsComponent implements OnInit {
    cars: Car[];
    selectedCar: Car;
    filteredCars = this.cars;
    @ViewChild(FilterBoxComponent) filterComponent: FilterBoxComponent;
    
    constructor(private _carsService: CarsService,private _filterService:FilterService, private _loggerService: LoggerService,private _title : Title) {   _loggerService.log('Cars Component loading success'); }

    ngOnInit() 
    { 
      this._title.setTitle('Cars');
        this.getCars();
    }

 filterChanged(filterText: string) {
    this.filteredCars = this._filterService.filter(filterText, ['brand'], this.cars);
  }

  getCars(value?: string) {
    this.cars = [];
    this._carsService.getCars()
      .subscribe(cars => {
        this.cars = this.filteredCars = cars;
        this.filterComponent.clear();
      });
    }

 

  select(car: Car) {
    this.selectedCar = car;
  }

  closeSelected() {
    this.selectedCar = null;
  }
}