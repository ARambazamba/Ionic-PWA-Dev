import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CapCameraPage } from './cap-camera.page';

describe('CapCameraPage', () => {
  let component: CapCameraPage;
  let fixture: ComponentFixture<CapCameraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CapCameraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CapCameraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
