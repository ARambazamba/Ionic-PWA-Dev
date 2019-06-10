import { Component } from "@angular/core";
import { NavController } from "ionic-angular";
import { AuthService } from "../../providers/auth-service/auth-service";
import { LoginPage } from "../login/login";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  constructor(public navCtrl: NavController, public auth: AuthService) {
    this.loginPage = "LoginPage";
    this.auth.User.subscribe(user => {
      if (user != null) {
        this.email = user.email;
      }
    });
  }

  email: string;

  menuData = [
    { title: "Hounds", pic: "assets/imgs/beach.jpg", pushPage: "HoundsPage" },
    { title: "Account", pic: "assets/imgs/beach.jpg", pushPage: "AccountPage" },
    { title: "About", pic: "assets/imgs/beach.jpg", pushPage: "AboutPage" }
  ];

  loginPage: any;
  loggedIn: any;

  goToLoginPage() {
    this.navCtrl.push(LoginPage);
  }

  signOff() {
    this.auth.logOff();
    this.loggedIn = "";
  }
}
