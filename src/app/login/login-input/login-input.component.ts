import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-login-input',
  templateUrl: './login-input.component.html',
  styleUrls: ['./login-input.component.css'],
})
export class LoginInputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() input: string;

  constructor() {}

  ngOnInit(): void {}

  showErrors() {
    return this.control.touched && this.control.errors;
  }
}
