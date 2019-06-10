import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingComponentsPage } from './using-components.page';

describe('UsingComponentsPage', () => {
  let component: UsingComponentsPage;
  let fixture: ComponentFixture<UsingComponentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingComponentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingComponentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
