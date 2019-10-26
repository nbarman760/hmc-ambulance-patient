import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackStatusPage } from './track-status.page';

describe('TrackStatusPage', () => {
  let component: TrackStatusPage;
  let fixture: ComponentFixture<TrackStatusPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrackStatusPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
