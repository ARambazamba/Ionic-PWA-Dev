import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonicStoragePage } from './ionic-storage.page';

describe('IonicStoragePage', () => {
  let component: IonicStoragePage;
  let fixture: ComponentFixture<IonicStoragePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonicStoragePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonicStoragePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
