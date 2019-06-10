import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationTargetPage } from './navigation-target.page';

describe('NavigationTargetPage', () => {
  let component: NavigationTargetPage;
  let fixture: ComponentFixture<NavigationTargetPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationTargetPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationTargetPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
