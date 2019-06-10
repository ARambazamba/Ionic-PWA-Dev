import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { UsingComponentsPage } from "./using-components.page";
import { HoundModule } from "src/app/components/hound.module";

const routes: Routes = [
  {
    path: "",
    component: UsingComponentsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HoundModule
  ],
  declarations: [UsingComponentsPage]
})
export class UsingComponentsPageModule {}
