import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionSheetsPage } from './action-sheets.page';

describe('ActionSheetsPage', () => {
  let component: ActionSheetsPage;
  let fixture: ComponentFixture<ActionSheetsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionSheetsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionSheetsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
