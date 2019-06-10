import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefresherListPage } from './refresher-list.page';

describe('RefresherListPage', () => {
  let component: RefresherListPage;
  let fixture: ComponentFixture<RefresherListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefresherListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefresherListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
