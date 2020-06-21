import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateGreetingHomeComponent } from './create-greeting-home/create-greeting-home.component';

const routes: Routes = [
  {
    path: '',
    component: CreateGreetingHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateGreetingRoutingModule {}
