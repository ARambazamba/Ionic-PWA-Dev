import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", loadChildren: "./home/home.module#HomePageModule" },
  {
    path: "camera",
    loadChildren: "./demos/camera/camera.module#CameraPageModule"
  },
  {
    path: "barcode",
    loadChildren: "./demos/barcode/barcode.module#BarcodePageModule"
  },
  {
    path: "vibration",
    loadChildren: "./demos/vibration/vibration.module#VibrationPageModule"
  },
  {
    path: "notification",
    loadChildren:
      "./demos/notification/notification.module#NotificationPageModule"
  },
  {
    path: "social-sharing",
    loadChildren:
      "./demos/social-sharing/social-sharing.module#SocialSharingPageModule"
  },
  {
    path: "youtube",
    loadChildren: "./demos/youtube/youtube.module#YoutubePageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
