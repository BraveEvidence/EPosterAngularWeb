import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChooseTemplateHomeComponent } from './choose-template-home/choose-template-home.component';

const routes: Routes = [
  {
    path: '',
    component: ChooseTemplateHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChooseTemplateRoutingModule {}
