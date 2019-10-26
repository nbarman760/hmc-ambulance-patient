import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectLocationPage } from './select-location.page';

describe('SelectLocationPage', () => {
  let component: SelectLocationPage;
  let fixture: ComponentFixture<SelectLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectLocationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
