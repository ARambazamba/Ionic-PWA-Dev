import { Component, OnInit } from "@angular/core";
import { AlertController } from "@ionic/angular";

@Component({
  selector: "app-alerts",
  templateUrl: "./alerts.page.html",
  styleUrls: ["./alerts.page.scss"]
})
export class AlertsPage implements OnInit {
  constructor(public alertController: AlertController) {}

  async doConfirm() {
    const alert = await this.alertController.create({
      header: "Confirm!",
      message: "Message <strong>text</strong>!!!",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: blah => {
            console.log("Confirm Cancel: blah");
          }
        },
        {
          text: "Okay",
          handler: () => {
            console.log("Confirm Okay");
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {}
}
