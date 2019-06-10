import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentListPage } from './segment-list.page';

describe('SegmentListPage', () => {
  let component: SegmentListPage;
  let fixture: ComponentFixture<SegmentListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegmentListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SegmentListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
