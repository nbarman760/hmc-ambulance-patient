import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpValidatePage } from './otp-validate.page';

describe('OtpValidatePage', () => {
  let component: OtpValidatePage;
  let fixture: ComponentFixture<OtpValidatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpValidatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpValidatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
