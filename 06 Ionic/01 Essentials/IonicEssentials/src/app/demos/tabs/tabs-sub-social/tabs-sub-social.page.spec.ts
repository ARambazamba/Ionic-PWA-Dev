import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsSubSocialPage } from './tabs-sub-social.page';

describe('TabsSubSocialPage', () => {
  let component: TabsSubSocialPage;
  let fixture: ComponentFixture<TabsSubSocialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsSubSocialPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsSubSocialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
