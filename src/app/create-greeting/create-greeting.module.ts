import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateGreetingRoutingModule } from './create-greeting-routing.module';
import { CreateGreetingHomeComponent } from './create-greeting-home/create-greeting-home.component';


@NgModule({
  declarations: [CreateGreetingHomeComponent],
  imports: [
    CommonModule,
    CreateGreetingRoutingModule
  ]
})
export class CreateGreetingModule { }
