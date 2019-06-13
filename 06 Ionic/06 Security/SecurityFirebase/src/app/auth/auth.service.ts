import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { AlertService } from "../shared/alert.service";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, public as: AlertService) {}

  private fbUser: any = null;
  public User: BehaviorSubject<any> = new BehaviorSubject(this.fbUser);

  createUser(email: string, password: string): Promise<any> {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logOn(user, password, onSuccess?) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(user, password)
      .then(onSuccess)
      .catch(err => {
        this.as.displayAlert("Error logging in", err);
        return err;
      });
  }

  logOff() {
    this.afAuth.auth
      .signOut()
      .then(loggedOut =>
        this.as.displayAlert("Logged out", "Come back and visit soon")
      )
      .catch(err => this.as.displayAlert("Error logging out", err));
  }
}
