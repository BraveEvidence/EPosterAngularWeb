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
    path: 'send-grettings',
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
