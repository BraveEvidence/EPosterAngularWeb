import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EposterService } from 'src/app/eposter.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css'],
})
export class LoginHomeComponent implements OnInit {
  showProgressBar = false;

  loginForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });

  constructor(private ePosterService: EposterService, private router: Router) {}

  loginSubmit(userName: string, password: string) {
    if (!this.loginForm.valid) {
      return;
    }
    this.showProgressBar = true;
    this.ePosterService.login(userName, password).subscribe((response) => {
      this.showProgressBar = false;
      if (response.status === 1) {
        this.router.navigateByUrl('/');
      } else {
        alert('Error');
      }
    });
  }

  ngOnInit(): void {}
}
