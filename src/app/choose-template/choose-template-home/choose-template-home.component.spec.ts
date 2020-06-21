import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseTemplateHomeComponent } from './choose-template-home.component';

describe('ChooseTemplateHomeComponent', () => {
  let component: ChooseTemplateHomeComponent;
  let fixture: ComponentFixture<ChooseTemplateHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseTemplateHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseTemplateHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
