import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { NavController } from "@ionic/angular";
import { AlertService } from "src/app/shared/alert.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    public navCtrl: NavController,
    public auth: AuthService,
    public alert: AlertService
  ) {}

  login = {
    email: "",
    pwd: ""
  };

  ngOnInit() {}

  signIn() {
    if (!this.login.email || !this.login.pwd) {
      this.alert.displayAlert("Error !", "You must enter email and password");
    } else {
      this.auth.logOn(this.login.email, this.login.pwd).then(returned => {
        this.alert.displayAlert("Logon", "you are now logged on");
        this.navCtrl.navigateRoot("/");
      });
    }
  }

  goToRootPage() {
    this.navCtrl.navigateRoot("/");
  }

  goToRegistration() {
    // this.navCtrl.push(RegistrationPage);
  }
}
