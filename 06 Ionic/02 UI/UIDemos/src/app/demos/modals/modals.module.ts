import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { ModalsPage } from "./modals.page";
import { ModalPopupPage } from "./modal-popup/modal-popup.page";

const routes: Routes = [
  {
    path: "",
    component: ModalsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalsPage, ModalPopupPage],
  entryComponents: [ModalPopupPage]
})
export class ModalsPageModule {}
