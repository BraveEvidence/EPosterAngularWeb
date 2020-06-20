import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoctorHomeComponent } from './add-doctor-home.component';

describe('AddDoctorHomeComponent', () => {
  let component: AddDoctorHomeComponent;
  let fixture: ComponentFixture<AddDoctorHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDoctorHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoctorHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
