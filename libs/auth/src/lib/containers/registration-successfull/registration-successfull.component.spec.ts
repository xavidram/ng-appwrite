import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationSuccessfullComponent } from './registration-successfull.component';

describe('RegistrationSuccessfullComponent', () => {
  let component: RegistrationSuccessfullComponent;
  let fixture: ComponentFixture<RegistrationSuccessfullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrationSuccessfullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrationSuccessfullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
