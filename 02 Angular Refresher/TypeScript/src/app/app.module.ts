import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { DemosComponent } from "./demos/demos.component";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { LOCALE_ID, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NavbarComponent } from "./navbar/navbar.component";
import { TsintroComponent } from "./demos/tsintro/tsintro.component";

@NgModule({
  declarations: [
    AppComponent,
    DemosComponent,
    NavbarComponent,
    TsintroComponent
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
