import { Component } from "@angular/core";
import { DemoItem } from "../shared/model";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  items: DemoItem[];

  constructor(public navCtrl: NavController) {
    this.initDemos();
  }

  initDemos() {
    this.items = [
      { Title: "Formatting", Url: "formatting" },
      { Title: "Ionic Grid", Url: "using-grid" },
      { Title: "Custom Fonts", Url: "custom-fonts" },
      { Title: "Buttons", Url: "buttons" },
      { Title: "Modals", Url: "modals" },
      { Title: "Alerts", Url: "alerts" },
      { Title: "ActionSheets", Url: "action-sheets" },
      { Title: "Simple Form", Url: "simple-form" },
      { Title: "Reactive Form", Url: "reactive-form" },
      { Title: "Form Validation", Url: "form-validation" },
      { Title: "Cards", Url: "cards" },
      { Title: "Simpel List", Url: "simple-list" },
      { Title: "Sliding List", Url: "sliding-list" },
      { Title: "Segment List", Url: "segment-list" },
      { Title: "Infinite Scroll", Url: "infinite-scroll" },
      { Title: "Virtual Scroll", Url: "virtual-scroll" },
      { Title: "Gestures", Url: "gestures" },
      { Title: "Maps & Navigation", Url: "google-maps" }
    ];
  }

  doNav(url: string) {
    this.navCtrl.navigateForward(url);
  }
}
