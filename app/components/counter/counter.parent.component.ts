import { Component, OnInit,ViewChild } from '@angular/core';
import { CounterComponent }      from '../counter/counter.child.component';

@Component({
    moduleId: module.id,
    selector: 'counter-parent',
    templateUrl: 'counter.parent.html'
})
export class CounterParentComponent implements OnInit {
    constructor() { }
     @ViewChild(CounterComponent) counterComponent: CounterComponent;

    ngOnInit() { }

    ClearCounter()
    {
        this.counterComponent.clear();
    }
}