import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsSubLandingPage } from './tabs-sub-landing.page';

describe('TabsSubLandingPage', () => {
  let component: TabsSubLandingPage;
  let fixture: ComponentFixture<TabsSubLandingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsSubLandingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsSubLandingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
