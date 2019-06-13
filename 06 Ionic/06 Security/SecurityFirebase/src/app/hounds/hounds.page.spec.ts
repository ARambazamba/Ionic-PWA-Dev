import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoundsPage } from './hounds.page';

describe('HoundsPage', () => {
  let component: HoundsPage;
  let fixture: ComponentFixture<HoundsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoundsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoundsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
