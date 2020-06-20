import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-doctor-input',
  templateUrl: './add-doctor-input.component.html',
  styleUrls: ['./add-doctor-input.component.css'],
})
export class AddDoctorInputComponent implements OnInit {
  @Input() control: FormControl;
  @Input() label: string;
  @Input() input: string;

  constructor() {}

  ngOnInit(): void {}

  showErrors() {
    return this.control.touched && this.control.errors;
  }
}
