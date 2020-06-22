import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorListHomeComponent } from './doctor-list-home.component';

describe('DoctorListHomeComponent', () => {
  let component: DoctorListHomeComponent;
  let fixture: ComponentFixture<DoctorListHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorListHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
