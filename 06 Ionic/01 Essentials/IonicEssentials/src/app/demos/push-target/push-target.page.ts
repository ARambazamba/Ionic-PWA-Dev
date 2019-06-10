import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-push-target",
  templateUrl: "./push-target.page.html",
  styleUrls: ["./push-target.page.scss"]
})
export class PushTargetPage implements OnInit {
  constructor(public navCtrl: NavController, private route: ActivatedRoute) {}

  title: string = "Title Not Set";

  ngOnInit() {
    let t = this.route.snapshot.paramMap.get("title");
    if (t != null) {
      this.title = t;
    }
  }

  goBack() {
    this.navCtrl.pop();
  }

  goToRoot() {
    this.navCtrl.navigateRoot("/");
  }
}
