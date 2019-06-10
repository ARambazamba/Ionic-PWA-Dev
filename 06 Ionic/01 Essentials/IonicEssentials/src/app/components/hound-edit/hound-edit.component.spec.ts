import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoundEditComponent } from './hound-edit.component';

describe('HoundEditComponent', () => {
  let component: HoundEditComponent;
  let fixture: ComponentFixture<HoundEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoundEditComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoundEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
