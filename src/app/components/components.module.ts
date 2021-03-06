import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ChartsModule } from 'ng2-charts';

import { IncrementerComponent } from './incrementer/incrementer.component';
import { DoughnutComponent } from './doughnut/doughnut.component';



@NgModule({
  declarations: [
    IncrementerComponent,
    DoughnutComponent
  ],
  exports: [
    IncrementerComponent,
    DoughnutComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ChartsModule
  ]
})
export class ComponentsModule { }
