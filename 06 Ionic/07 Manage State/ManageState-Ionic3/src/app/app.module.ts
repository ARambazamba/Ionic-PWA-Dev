import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { MarkerProvider } from "../providers/marker/marker";
import { MarkerServiceWithState } from "../providers/marker-service-with-state/marker-service-with-state";
import { IntroObservablesPageModule } from "../pages/intro-observables/intro-observables.module";
import { NgRxStatePageModule } from "../pages/ng-rx-state/ng-rx-state.module";
import { ObservableCrudPageModule } from "../pages/observable-crud/observable-crud.module";
import { ObservablesOperatorsPageModule } from "../pages/observables-operators/observables-operators.module";
import { HttpClientModule } from "@angular/common/http";
import { StateServicePageModule } from "../pages/state-service/state-service.module";

import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { CurrencyEffects } from "../ngrx/effects/currencyEffects";
import { reducers } from "../ngrx/reducers";
import { FixerService } from "../providers/fixer.service";

@NgModule({
  declarations: [MyApp, HomePage],
  imports: [
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IntroObservablesPageModule,
    NgRxStatePageModule,
    ObservableCrudPageModule,
    StateServicePageModule,
    ObservablesOperatorsPageModule,
    NgRxStatePageModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CurrencyEffects])
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage],
  providers: [
    MarkerProvider,
    MarkerServiceWithState,
    FixerService,
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule {}
