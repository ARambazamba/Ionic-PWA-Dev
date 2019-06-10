import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import { DemoItem } from "../shared/model";

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
      { Title: "Camera", Url: "camera" },
      { Title: "Barcode Scanner", Url: "barcode" },
      { Title: "Vibration", Url: "vibration" },
      { Title: "Local Notification", Url: "notification" },
      { Title: "Social Share", Url: "social-sharing" },
      { Title: "Youtube", Url: "youtube" }
    ];
  }

  doNav(key) {
    this.navCtrl.navigateForward(key);
  }
}
