import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeasuresRoutingModule } from './measures-routing.module';
import { MeasuresComponent } from './main/measures.component';
import { SharedModule } from '../shared/shared.module';
import { DataTablesModule } from 'angular-datatables';
import { MeasuresService } from './services/measures.service';


@NgModule({
  declarations: [MeasuresComponent],
  imports: [
    CommonModule,
    MeasuresRoutingModule,
    SharedModule,
    DataTablesModule
  ],
  providers: [
    MeasuresService
  ]
})
export class MeasuresModule { }
