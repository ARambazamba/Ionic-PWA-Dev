import { Component, OnInit } from "@angular/core";
import { Plugins } from "@capacitor/core";
import { NavController } from "@ionic/angular";

const { Browser } = Plugins;

@Component({
  selector: "app-cap-browser",
  templateUrl: "./cap-browser.page.html",
  styleUrls: ["./cap-browser.page.scss"]
})
export class CapBrowserPage implements OnInit {
  constructor(public navCtrl: NavController) {}

  url = "https://www.integrations.at";

  ngOnInit(): void {}

  async openURL(url) {
    await Browser.open({ url: url });
  }
}
