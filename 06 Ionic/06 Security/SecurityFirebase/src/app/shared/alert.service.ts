import { Injectable } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Injectable({
  providedIn: "root"
})
export class AlertService {
  constructor(public ac: AlertController) {}

  async displayAlert(title, msg) {
    const alert = await this.ac.create({
      header: title,
      message: msg
    });

    await alert.present();
  }
}
