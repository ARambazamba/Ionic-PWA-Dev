import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormattingPage } from './formatting.page';

describe('FormattingPage', () => {
  let component: FormattingPage;
  let fixture: ComponentFixture<FormattingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormattingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormattingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
