import { Component, OnInit } from "@angular/core";
import { ActionSheetController } from "@ionic/angular";

@Component({
  selector: "app-action-sheets",
  templateUrl: "./action-sheets.page.html",
  styleUrls: ["./action-sheets.page.scss"]
})
export class ActionSheetsPage implements OnInit {
  constructor(public actionSheetController: ActionSheetController) {}

  ngOnInit() {}

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: "Albums",
      buttons: [
        {
          text: "Delete",
          role: "destructive",
          icon: "trash",
          handler: () => {
            console.log("Delete clicked");
          }
        },
        {
          text: "Share",
          icon: "share",
          handler: () => {
            console.log("Share clicked");
          }
        },
        {
          text: "Play (open modal)",
          icon: "arrow-dropright-circle",
          handler: () => {
            console.log("Play clicked");
          }
        },
        {
          text: "Favorite",
          icon: "heart",
          handler: () => {
            console.log("Favorite clicked");
          }
        },
        {
          text: "Cancel",
          icon: "close",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          }
        }
      ]
    });
    await actionSheet.present();
  }
}
