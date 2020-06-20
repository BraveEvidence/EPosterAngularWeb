import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { LoginHomeComponent } from './login-home/login-home.component';
import { LoginInputComponent } from './login-input/login-input.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [LoginHomeComponent, LoginInputComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    ReactiveFormsModule,
    MatProgressBarModule,
  ],
})
export class LoginModule {}
