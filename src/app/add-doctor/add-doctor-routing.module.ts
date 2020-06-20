import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddDoctorHomeComponent } from './add-doctor-home/add-doctor-home.component';

const routes: Routes = [
  {
    path: '',
    component: AddDoctorHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddDoctorRoutingModule {}
