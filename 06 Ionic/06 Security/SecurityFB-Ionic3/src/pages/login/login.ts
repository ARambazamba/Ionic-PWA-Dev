import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { AuthService } from "../../providers/auth-service/auth-service";
import { HomePage } from "../home/home";
import { RegistrationPage } from "../registration/registration";
import { AlertService } from "../../providers/alert-service/alert-service";

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  regPage: any;

  login = {
    email: "",
    pwd: ""
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public as: AlertService,
    public auth: AuthService
  ) {
    this.regPage = "RegisterPage";
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  signIn() {
    if (!this.login.email || !this.login.pwd) {
      this.as.displayAlert("Error !", "You must enter email and password");
    } else {
      this.auth.logOn(this.login.email, this.login.pwd).then(returned => {
        this.as.displayAlert("Logon", "you are now logged on");
        this.navCtrl.push(HomePage);
      });
    }
  }

  goToRootPage() {
    this.navCtrl.popToRoot(null);
  }

  goToRegistration() {
    this.navCtrl.push(RegistrationPage);
  }
}
