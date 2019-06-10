import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TsintroComponent } from './tsintro.component';

describe('TsintroComponent', () => {
  let component: TsintroComponent;
  let fixture: ComponentFixture<TsintroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TsintroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TsintroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
