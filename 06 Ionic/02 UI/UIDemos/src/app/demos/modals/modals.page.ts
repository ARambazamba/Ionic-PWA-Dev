import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ModalPopupPage } from "./modal-popup/modal-popup.page";

@Component({
  selector: "app-modals",
  templateUrl: "./modals.page.html",
  styleUrls: ["./modals.page.scss"]
})
export class ModalsPage implements OnInit {
  constructor(public modalController: ModalController) {}

  async openModal(val) {
    const modal = await this.modalController.create({
      component: ModalPopupPage,
      componentProps: {
        param: val
      }
    });
    return await modal.present();
  }

  ngOnInit() {}
}
