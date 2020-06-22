import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorListRoutingModule } from './doctor-list-routing.module';
import { DoctorListHomeComponent } from './doctor-list-home/doctor-list-home.component';


@NgModule({
  declarations: [DoctorListHomeComponent],
  imports: [
    CommonModule,
    DoctorListRoutingModule
  ]
})
export class DoctorListModule { }
