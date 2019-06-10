import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { TabsSubLandingPage } from "./tabs-sub-landing.page";

const routes: Routes = [
  {
    path: "",
    component: TabsSubLandingPage,
    children: [
      {
        path: "details",
        children: [
          {
            path: "",
            loadChildren:
              "../tabs-sub-details/tabs-sub-details.module#TabsSubDetailsPageModule"
          }
        ]
      },
      {
        path: "social",
        children: [
          {
            path: "",
            loadChildren:
              "../tabs-sub-social/tabs-sub-social.module#TabsSubSocialPageModule"
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsSubLandingPage]
})
export class TabsSubLandingPageModule {}
