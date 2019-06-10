import { Injectable } from "@angular/core";
import { AlertController } from "ionic-angular";

@Injectable()
export class AlertService {
  constructor(public ac: AlertController) {}

  displayAlert(alertTitle, alertSub) {
    let alertMSG = this.ac.create({
      title: alertTitle,
      subTitle: alertSub,
      buttons: ["OK"]
    });
    alertMSG.present();
  }
}
