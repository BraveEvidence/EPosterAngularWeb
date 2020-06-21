import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGreetingHomeComponent } from './create-greeting-home.component';

describe('CreateGreetingHomeComponent', () => {
  let component: CreateGreetingHomeComponent;
  let fixture: ComponentFixture<CreateGreetingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateGreetingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGreetingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
