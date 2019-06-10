import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomEventsPage } from './custom-events.page';

describe('CustomEventsPage', () => {
  let component: CustomEventsPage;
  let fixture: ComponentFixture<CustomEventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomEventsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomEventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
