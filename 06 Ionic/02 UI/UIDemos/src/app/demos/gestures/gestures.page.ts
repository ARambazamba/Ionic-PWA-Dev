import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";

@Component({
  selector: "app-gestures",
  templateUrl: "./gestures.page.html",
  styleUrls: ["./gestures.page.scss"]
})
export class GesturesPage implements OnInit {
  constructor(public navCtrl: NavController) {}

  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 0;

  pressEvent(e) {
    this.press++;
  }
  panEvent(e) {
    this.pan++;
  }
  swipeEvent(e) {
    this.swipe++;
  }
  tapEvent(e) {
    this.tap++;
  }

  ngOnInit() {}
}
