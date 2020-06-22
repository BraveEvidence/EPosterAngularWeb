import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DoctorListHomeComponent } from './doctor-list-home/doctor-list-home.component';

const routes: Routes = [
  {
    path: '',
    component: DoctorListHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorListRoutingModule {}
