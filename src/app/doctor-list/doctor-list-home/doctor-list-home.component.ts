import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctor-list-home',
  templateUrl: './doctor-list-home.component.html',
  styleUrls: ['./doctor-list-home.component.css'],
})
export class DoctorListHomeComponent implements OnInit {
  doctorList = ['Sandipan', 'Pronali', 'Sumeet'];
  tempList = [];
  doctorName = '';

  constructor() {}

  ngOnInit(): void {
    this.tempList.push(...this.doctorList);
  }

  goBack() {}

  onDoctorNameChange(value: string) {
    this.doctorName = value;
    let filter = this.doctorList.filter((item) =>
      item.toLowerCase().includes(this.doctorName)
    );
    this.tempList = [];
    this.tempList.push(...filter);
  }
}
