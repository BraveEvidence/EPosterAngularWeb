import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SendGreetingsRoutingModule } from './send-greetings-routing.module';
import { SendGreetingsHomeComponent } from './send-greetings-home/send-greetings-home.component';


@NgModule({
  declarations: [SendGreetingsHomeComponent],
  imports: [
    CommonModule,
    SendGreetingsRoutingModule
  ]
})
export class SendGreetingsModule { }
