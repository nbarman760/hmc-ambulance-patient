import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteMapPage } from './route-map.page';

describe('RouteMapPage', () => {
  let component: RouteMapPage;
  let fixture: ComponentFixture<RouteMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
