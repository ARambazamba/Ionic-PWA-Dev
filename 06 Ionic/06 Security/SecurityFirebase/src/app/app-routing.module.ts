import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { FbGuardService } from "./auth/fb-guard.service";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", loadChildren: "./home/home.module#HomePageModule" },
  { path: "about", loadChildren: "./about/about.module#AboutPageModule" },
  {
    path: "account",
    loadChildren: "./account/account.module#AccountPageModule",
    canActivate: [FbGuardService]
  },
  { path: "hounds", loadChildren: "./hounds/hounds.module#HoundsPageModule" }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
