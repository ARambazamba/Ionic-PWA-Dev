import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", loadChildren: "./home/home.module#HomePageModule" },
  {
    path: "using-components",
    loadChildren:
      "./demos/using-components/using-components.module#UsingComponentsPageModule"
  },
  {
    path: "navigation-target",
    loadChildren:
      "./demos/navigation-target/navigation-target.module#NavigationTargetPageModule"
  },
  {
    path: "navigation-target/:id",
    loadChildren:
      "./demos/navigation-target/navigation-target.module#NavigationTargetPageModule"
  },
  {
    path: "push-target",
    loadChildren: "./demos/push-target/push-target.module#PushTargetPageModule"
  },
  {
    path: "push-target/:title",
    loadChildren: "./demos/push-target/push-target.module#PushTargetPageModule"
  },
  {
    path: "custom-events",
    loadChildren:
      "./demos/custom-events/custom-events.module#CustomEventsPageModule"
  },
  {
    path: "push-demo",
    loadChildren: "./demos/push-demo/push-demo.module#PushDemoPageModule"
  },
  {
    path: "tabs",
    loadChildren:
      "./demos/tabs/tabs-sub-landing/tabs.module#TabsSubLandingPageModule"
  },
  {
    path: "using-toolbar",
    loadChildren:
      "./demos/using-toolbar/using-toolbar.module#UsingToolbarPageModule"
  },
  {
    path: "ionic-storage",
    loadChildren:
      "./demos/ionic-storage/ionic-storage.module#IonicStoragePageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
