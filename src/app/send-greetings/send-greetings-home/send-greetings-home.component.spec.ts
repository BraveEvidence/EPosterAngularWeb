import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendGreetingsHomeComponent } from './send-greetings-home.component';

describe('SendGreetingsHomeComponent', () => {
  let component: SendGreetingsHomeComponent;
  let fixture: ComponentFixture<SendGreetingsHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendGreetingsHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendGreetingsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
