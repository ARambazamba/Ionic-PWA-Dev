import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFontsPage } from './custom-fonts.page';

describe('CustomFontsPage', () => {
  let component: CustomFontsPage;
  let fixture: ComponentFixture<CustomFontsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFontsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFontsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
