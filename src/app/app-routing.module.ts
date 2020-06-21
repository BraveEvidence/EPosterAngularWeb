import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'choose-template',
    loadChildren: () =>
      import('./choose-template/choose-template.module').then(
        (m) => m.ChooseTemplateModule
      ),
  },
  {
    path: 'create-greeting',
    loadChildren: () =>
      import('./create-greeting/create-greeting.module').then(
        (m) => m.CreateGreetingModule
      ),
  },
  {
    path: 'send-greetings',
    loadChildren: () =>
      import('./send-greetings/send-greetings.module').then(
        (m) => m.SendGreetingsModule
      ),
  },
  {
    path: 'add-doctor',
    loadChildren: () =>
      import('./add-doctor/add-doctor.module').then((m) => m.AddDoctorModule),
  },
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
