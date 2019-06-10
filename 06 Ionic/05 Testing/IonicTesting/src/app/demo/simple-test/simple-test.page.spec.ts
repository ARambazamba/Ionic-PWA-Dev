import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleTestPage } from './simple-test.page';

describe('SimpleTestPage', () => {
  let component: SimpleTestPage;
  let fixture: ComponentFixture<SimpleTestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimpleTestPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleTestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
