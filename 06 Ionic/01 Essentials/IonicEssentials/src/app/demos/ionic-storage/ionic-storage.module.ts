import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { IonicStoragePage } from "./ionic-storage.page";
import { StorageService } from "./storage.service";

const routes: Routes = [
  {
    path: "",
    component: IonicStoragePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IonicStoragePage],
  providers: [StorageService]
})
export class IonicStoragePageModule {}
