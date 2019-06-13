import { Component, OnInit } from "@angular/core";
import { Plugins } from "@capacitor/core";
import { NavController } from "@ionic/angular";
const { Browser } = Plugins;

@Component({
  selector: "app-browser",
  templateUrl: "./browser.page.html",
  styleUrls: ["./browser.page.scss"]
})
export class BrowserPage implements OnInit {
  constructor(public navCtrl: NavController) {}

  url = "https://www.integrations.at";

  ngOnInit(): void {}

  async openURL(url) {
    await Browser.open({ url: url });
  }
}
