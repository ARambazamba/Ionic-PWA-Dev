import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", loadChildren: "./home/home.module#HomePageModule" },
  {
    path: "action-sheets",
    loadChildren:
      "./demos/action-sheets/action-sheets.module#ActionSheetsPageModule"
  },
  {
    path: "alerts",
    loadChildren: "./demos/alerts/alerts.module#AlertsPageModule"
  },
  {
    path: "buttons",
    loadChildren: "./demos/buttons/buttons.module#ButtonsPageModule"
  },
  { path: "cards", loadChildren: "./demos/cards/cards.module#CardsPageModule" },
  {
    path: "custom-fonts",
    loadChildren:
      "./demos/custom-fonts/custom-fonts.module#CustomFontsPageModule"
  },
  {
    path: "form-validation",
    loadChildren:
      "./demos/form-validation/form-validation.module#FormValidationPageModule"
  },
  {
    path: "formatting",
    loadChildren: "./demos/formatting/formatting.module#FormattingPageModule"
  },
  {
    path: "gestures",
    loadChildren: "./demos/gestures/gestures.module#GesturesPageModule"
  },
  {
    path: "google-maps",
    loadChildren: "./demos/google-maps/google-maps.module#GoogleMapsPageModule"
  },
  {
    path: "modals",
    loadChildren: "./demos/modals/modals.module#ModalsPageModule"
  },
  {
    path: "reactive-form",
    loadChildren:
      "./demos/reactive-form/reactive-form.module#ReactiveFormPageModule"
  },
  {
    path: "refresher-list",
    loadChildren:
      "./demos/refresher-list/refresher-list.module#RefresherListPageModule"
  },
  {
    path: "search-list",
    loadChildren: "./demos/search-list/search-list.module#SearchListPageModule"
  },
  {
    path: "segment-list",
    loadChildren:
      "./demos/segment-list/segment-list.module#SegmentListPageModule"
  },
  {
    path: "simple-form",
    loadChildren: "./demos/simple-form/simple-form.module#SimpleFormPageModule"
  },
  {
    path: "simple-list",
    loadChildren: "./demos/simple-list/simple-list.module#SimpleListPageModule"
  },
  {
    path: "sliding-list",
    loadChildren:
      "./demos/sliding-list/sliding-list.module#SlidingListPageModule"
  },
  {
    path: "using-grid",
    loadChildren: "./demos/using-grid/using-grid.module#UsingGridPageModule"
  },
  {
    path: "virtual-scroll",
    loadChildren:
      "./demos/virtual-scroll/virtual-scroll.module#VirtualScrollPageModule"
  },
  {
    path: "infinite-scroll",
    loadChildren:
      "./demos/infinite-scroll/infinite-scroll.module#InfiniteScrollPageModule"
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
