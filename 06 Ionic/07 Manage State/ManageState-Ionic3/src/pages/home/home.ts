import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { DemoItem } from "../../app/shared/model";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  items: DemoItem[];

  constructor(public navCtrl: NavController) {
    this.initDemos();
  }

  initDemos() {
    this.items = [
      { Title: "ObservableCRUD", Url: "ObservableCrudPage" },
      { Title: "Intro Observables", Url: "IntroObservablesPage" },
      { Title: "ObservablesOperators", Url: "ObservablesOperatorsPage" },
      { Title: "Service with State", Url: "StateServicePage" },
      { Title: "NgRx Intro", Url: "NgRxStatePage" }
    ];
  }

  doNav(key) {
    this.navCtrl.push(key);
  }
}
