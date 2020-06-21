import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { EposterService } from 'src/app/eposter.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-add-doctor-home',
  templateUrl: './add-doctor-home.component.html',
  styleUrls: ['./add-doctor-home.component.css'],
})
export class AddDoctorHomeComponent implements OnInit {
  showProgressBar = false;

  doctorForm = new FormGroup({
    doctorName: new FormControl('', [Validators.required]),
    doctorCode: new FormControl('', [
      Validators.required,
      // Validators.pattern(/^[0-9]\d*$/),
      // Validators.min(1),
    ]),
  });

  constructor(
    private router: Router,
    private ePosterService: EposterService,
    private location: Location
  ) {}

  ngOnInit(): void {}

  addDoctor() {
    if (!this.doctorForm.valid) {
      return;
    }
    this.showProgressBar = true;
    this.ePosterService
      .addDoctor(
        this.doctorForm.value.doctorName,
        this.doctorForm.value.doctorCode
      )
      .subscribe((response) => {
        this.showProgressBar = false;
        if (response.status === 1) {
          this.router.navigateByUrl('/');
        } else {
          alert('Error');
        }
      });
  }

  goBack() {
    this.location.back();
  }
}
