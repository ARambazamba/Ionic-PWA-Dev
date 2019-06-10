import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoundListComponent } from './hound-list.component';

describe('HoundListComponent', () => {
  let component: HoundListComponent;
  let fixture: ComponentFixture<HoundListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoundListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoundListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
