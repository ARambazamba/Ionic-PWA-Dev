import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { HomePage } from "../home/home";
import { AngularFireAuth } from "angularfire2/auth";
import firebase from "firebase";
import { AuthService } from "../../providers/auth-service/auth-service";
import { AlertService } from "../../providers/alert-service/alert-service";

@Component({
  selector: "page-registration",
  templateUrl: "registration.html"
})
export class RegistrationPage {
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public as: AlertService,
    public fbAuth: AngularFireAuth,
    public auth: AuthService
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad RegistrationPage");
  }

  reg = {
    displayName: "",
    email: "",
    pwd: "",
    pwd2: ""
  };

  registerAcct() {
    if (this.reg.pwd != this.reg.pwd2) {
      this.as.displayAlert("Passwords", "Your passwords dont match");
      this.reg.pwd = "";
      this.reg.pwd2 = "";
    } else {
      if (this.reg.displayName == "") {
        this.reg.displayName = this.reg.email;
      }

      this.auth
        .createUser(this.reg.email, this.reg.pwd)
        .then((user: firebase.User) => {
          this.as.displayAlert(user.email, "Acct created - Please Login");

          let p = { displayName: this.reg.displayName, photoURL: "" };
          user.updateProfile(p);
        });
    }
  }
}
