import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { MarkerDetailsPage } from "./marker-details.page";
import { MarkerService } from "src/services/markers/markers";

const routes: Routes = [
  {
    path: "",
    component: MarkerDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MarkerDetailsPage],
  providers: [MarkerService]
})
export class MarkerDetailsPageModule {}
