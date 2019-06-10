import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgCommonLibComponent } from './ng-common-lib.component';

describe('NgCommonLibComponent', () => {
  let component: NgCommonLibComponent;
  let fixture: ComponentFixture<NgCommonLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgCommonLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgCommonLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
