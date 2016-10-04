import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }      from './components/home/home.component';
import { CarsComponent }      from './components/cars/cars.component';
import { CounterParentComponent }      from './components/counter/counter.parent.component';

const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'cars',
    component: CarsComponent
  },
  {
    path: 'counter',
    component: CounterParentComponent
  },
  {
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);