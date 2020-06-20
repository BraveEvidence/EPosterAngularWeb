import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDoctorInputComponent } from './add-doctor-input.component';

describe('AddDoctorInputComponent', () => {
  let component: AddDoctorInputComponent;
  let fixture: ComponentFixture<AddDoctorInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDoctorInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDoctorInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
