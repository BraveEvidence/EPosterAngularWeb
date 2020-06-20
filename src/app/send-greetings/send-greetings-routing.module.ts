import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SendGreetingsHomeComponent } from './send-greetings-home/send-greetings-home.component';

const routes: Routes = [
  {
    path: '',
    component: SendGreetingsHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendGreetingsRoutingModule {}
