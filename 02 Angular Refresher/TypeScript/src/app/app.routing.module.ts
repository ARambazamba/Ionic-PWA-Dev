import { DemosComponent } from "./demos/demos.component";
import { RouterModule, Routes } from "@angular/router";
import { NgModule, ViewChild } from "@angular/core";
import { TsintroComponent } from "./demos/tsintro/tsintro.component";

const appRoutes: Routes = [
  {
    path: "",
    component: DemosComponent,
    children: [{ path: "intro", component: TsintroComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { enableTracing: false })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
