import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LazyLoadingRoutingModule } from './lazy-loading-routing.module';
import { LazyLoadingComponent } from './lazy-loading.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AlertasModule} from '../alertas/alertas.module';


@NgModule({
  declarations: [
    LazyLoadingComponent
  ],
  imports: [
    CommonModule,
    LazyLoadingRoutingModule,
    BsDatepickerModule.forRoot(),
    AlertasModule
  ]
})
export class LazyLoadingModule { }
