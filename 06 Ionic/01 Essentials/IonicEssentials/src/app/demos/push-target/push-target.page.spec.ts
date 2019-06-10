import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushTargetPage } from './push-target.page';

describe('PushTargetPage', () => {
  let component: PushTargetPage;
  let fixture: ComponentFixture<PushTargetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushTargetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushTargetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
