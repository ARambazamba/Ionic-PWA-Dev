import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";
import { BehaviorSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private fireAuth: AngularFireAuth) {
    this.fireAuth.auth.onAuthStateChanged(user => {
      this.setUserToken(user);
    });
  }

  private usrToken: string = "";
  public Token: BehaviorSubject<string> = new BehaviorSubject<string>(
    this.usrToken
  );

  private fbUser: firebase.User = null;
  public User: BehaviorSubject<firebase.User> = new BehaviorSubject(
    this.fbUser
  );

  private setUserToken(user) {
    this.fbUser = user;
    this.User.next(this.fbUser);

    if (user != null) {
      this.fbUser.getIdToken().then(token => {
        this.setToken(token);
      });
    } else {
      this.setToken(null);
    }
  }

  private setToken(token) {
    this.usrToken = token;
    this.Token.next(this.usrToken);
  }

  createUser(email: string, password: string): Promise<any> {
    return this.fireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  logOn(user, password, onSuccess?) {
    return this.fireAuth.auth
      .signInWithEmailAndPassword(user, password)
      .then(onSuccess)
      .catch(err => {
        console.log("Error logging in", err);
        return err;
      });
  }

  logOff() {
    this.fireAuth.auth
      .signOut()
      .then(() => {
        this.setUserToken(null);
      })
      .catch(err => console.log("Error logging out", err));
  }
}
