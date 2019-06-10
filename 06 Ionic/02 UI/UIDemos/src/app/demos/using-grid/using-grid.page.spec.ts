import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingGridPage } from './using-grid.page';

describe('UsingGridPage', () => {
  let component: UsingGridPage;
  let fixture: ComponentFixture<UsingGridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsingGridPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingGridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
