import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { IonicModule } from "@ionic/angular";
import { InfiniteScrollPage } from "./infinite-scroll.page";
import { MockService } from "./mock.service";
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
  {
    path: "",
    component: InfiniteScrollPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  declarations: [InfiniteScrollPage],
  providers: [MockService]
})
export class InfiniteScrollPageModule {}
