import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-template-home',
  templateUrl: './choose-template-home.component.html',
  styleUrls: ['./choose-template-home.component.css'],
})
export class ChooseTemplateHomeComponent implements OnInit {
  images = [
    'http://zedexeposter.fbmlive.com/public/template_images/zQ5bTp9HfQLS1I03.jpg',
    'http://zedexeposter.fbmlive.com/public/template_images/G2pEo4ufZG88uH3X.jpg',
  ];

  constructor(private location: Location, private router: Router) {}

  ngOnInit(): void {}

  next() {
    this.router.navigateByUrl('/create-greeting');
  }

  goBack() {
    this.location.back();
  }
}
