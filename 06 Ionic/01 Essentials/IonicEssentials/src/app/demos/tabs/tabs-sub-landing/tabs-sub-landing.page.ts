import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Sighthound } from "src/app/shared/model";
import { TabsSubDetailsPage } from "../tabs-sub-details/tabs-sub-details.page";
import { TabsSubSocialPage } from "../tabs-sub-social/tabs-sub-social.page";

@Component({
  selector: "app-tabs-sub-landing",
  templateUrl: "./tabs-sub-landing.page.html",
  styleUrls: ["./tabs-sub-landing.page.scss"]
})
export class TabsSubLandingPage implements OnInit {
  constructor(public navCtrl: NavController) {
    this.hound = {
      id: 3,
      race: "Galgo Espanol",
      origin: "Spain",
      imgUrl: "/assets/images/galgo.png",
      likes: 20
    };
  }

  hound: Sighthound;
  houndDetailTab = TabsSubDetailsPage;
  houndSocialTab = TabsSubSocialPage;

  ngOnInit() {}
}
