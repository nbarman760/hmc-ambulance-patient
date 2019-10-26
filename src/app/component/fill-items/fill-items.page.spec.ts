import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillItemsPage } from './fill-items.page';

describe('FillItemsPage', () => {
  let component: FillItemsPage;
  let fixture: ComponentFixture<FillItemsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillItemsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillItemsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
