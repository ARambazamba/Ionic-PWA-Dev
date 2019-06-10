import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from "@angular/core";
import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { UsingTestbedPage } from "./using-testbed.page";
import { IonicModule } from "@ionic/angular";
import { By } from "@angular/platform-browser";

describe("UsingTestbedPage", () => {
  let de: DebugElement;
  let component: UsingTestbedPage;
  let fixture: ComponentFixture<UsingTestbedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UsingTestbedPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot()]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingTestbedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css("h3"));
  });

  it("should create component", () => expect(component).toBeDefined());

  it("should have expected <h3> text", () => {
    fixture.detectChanges();
    const header = de.nativeElement;
    expect(header.innerHTML).toMatch("My Sighthounds");
  });

  it("should show the favicon as <img>", () => {
    fixture.detectChanges();
    const img: HTMLImageElement = fixture.debugElement.query(By.css("img"))
      .nativeElement;
    expect(img.src).toContain("assets/icon/favicon.ico");
  });
});
