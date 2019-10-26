import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarBookPage } from './car-book.page';

describe('CarBookPage', () => {
  let component: CarBookPage;
  let fixture: ComponentFixture<CarBookPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarBookPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarBookPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
