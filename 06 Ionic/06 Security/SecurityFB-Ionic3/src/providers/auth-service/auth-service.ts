import { Injectable } from "@angular/core";
import { AngularFireAuth } from "angularfire2/auth";
import firebase from "firebase";
import { AlertService } from "../alert-service/alert-service";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class AuthService {
  private fbUser: firebase.User = null;
  public User: BehaviorSubject<firebase.User> = new BehaviorSubject(
    this.fbUser
  );

  constructor(private afAuth: AngularFireAuth, public as: AlertService) {
    this.afAuth.auth.onAuthStateChanged(user => {
      if (user) {
        this.fbUser = user;
        this.User.next(this.fbUser);
      }
    });
  }

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
