import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingToolbarPage } from './using-toolbar.page';

describe('UsingToolbarPage', () => {
  let component: UsingToolbarPage;
  let fixture: ComponentFixture<UsingToolbarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingToolbarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingToolbarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
