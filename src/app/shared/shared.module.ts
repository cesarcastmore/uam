import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    LayoutComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ], exports: [LayoutComponent, LoadingComponent ]
})
export class SharedModule { }
