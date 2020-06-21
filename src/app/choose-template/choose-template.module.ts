import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChooseTemplateRoutingModule } from './choose-template-routing.module';
import { ChooseTemplateHomeComponent } from './choose-template-home/choose-template-home.component';


@NgModule({
  declarations: [ChooseTemplateHomeComponent],
  imports: [
    CommonModule,
    ChooseTemplateRoutingModule
  ]
})
export class ChooseTemplateModule { }
