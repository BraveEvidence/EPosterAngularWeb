import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddDoctorRoutingModule } from './add-doctor-routing.module';
import { AddDoctorHomeComponent } from './add-doctor-home/add-doctor-home.component';
import { AddDoctorInputComponent } from './add-doctor-input/add-doctor-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [AddDoctorHomeComponent, AddDoctorInputComponent],
  imports: [
    CommonModule,
    AddDoctorRoutingModule,
    ReactiveFormsModule,
    MatProgressBarModule,
  ],
})
export class AddDoctorModule {}
