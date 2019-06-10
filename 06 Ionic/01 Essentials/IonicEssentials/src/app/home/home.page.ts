import { Component } from "@angular/core";
import { DemoItem } from "../shared/model";
import { NavController, Events } from "@ionic/angular";
import { DemoService } from "../services/demo.service";
import { PushDemoPage } from "../demos/push-demo/push-demo.page";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  pushPage: any;

  items: DemoItem[];

  constructor(
    public navCtrl: NavController,
    private ds: DemoService,
    public events: Events
  ) {
    this.items = this.ds.getDemos();
    this.pushPage = PushDemoPage;
  }

  doNav(key) {
    this.navCtrl.navigateForward(key);
  }

  useNavigateParam(parm?: string) {
    if (parm == null) {
      this.navCtrl.navigateForward("push-target");
    } else {
      this.navCtrl.navigateForward("push-target/" + parm);
    }
  }
}
