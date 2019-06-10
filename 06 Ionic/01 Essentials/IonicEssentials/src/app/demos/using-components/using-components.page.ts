import { Component, OnInit } from "@angular/core";
import { NavController } from "@ionic/angular";
import { HoundService } from "src/app/components/hound.service";
import { Sighthound } from "src/app/shared/model";

@Component({
  selector: "app-using-components",
  templateUrl: "./using-components.page.html",
  styleUrls: ["./using-components.page.scss"]
})
export class UsingComponentsPage implements OnInit {
  constructor(public navCtrl: NavController, private hs: HoundService) {}

  hounds: Sighthound[];
  selectedHound: Sighthound;

  ngOnInit() {
    this.hs.getHounds().subscribe(data => {
      this.hounds = data;
      console.log("hounds loaded", this.hounds);
    });
  }

  clickedHound(hound: Sighthound) {
    console.log("Got Selected Hound from Container", hound);
    this.selectedHound = hound;
  }
}
