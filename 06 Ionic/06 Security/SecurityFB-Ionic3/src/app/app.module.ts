import { ErrorHandler, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";
import { IonicStorageModule } from "@ionic/storage";
import { AngularFireModule } from "angularfire2";
import { AngularFireAuthModule } from "angularfire2/auth";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { AboutPageModule } from "../pages/about/about.module";
import { AccountPageModule } from "../pages/account/account.module";
import { HomePage } from "../pages/home/home";
import { HoundsPageModule } from "../pages/hounds/hounds.module";
import { LoginPage } from "../pages/login/login";
import { RegistrationPage } from "../pages/registration/registration";
import { AlertService } from "../providers/alert-service/alert-service";
import { AuthService } from "../providers/auth-service/auth-service";
import { MyApp } from "./app.component";

export const firebaseConfig = {
  apiKey: "AIzaSyDd_5fwjov1rt8szeRIf2CQjaED4A6YdXY",
  authDomain: "sighthoundlovers.firebaseapp.com",
  databaseURL: "https://sighthoundlovers.firebaseio.com",
  projectId: "sighthoundlovers",
  storageBucket: "sighthoundlovers.appspot.com",
  messagingSenderId: "361546095438"
};

@NgModule({
  declarations: [MyApp, HomePage, LoginPage, RegistrationPage],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AccountPageModule,
    HoundsPageModule,
    AboutPageModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [MyApp, HomePage, LoginPage, RegistrationPage],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthService,
    AlertService
  ]
})
export class AppModule {}
