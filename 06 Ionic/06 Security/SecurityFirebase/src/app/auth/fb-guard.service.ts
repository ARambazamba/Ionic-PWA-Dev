import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
  providedIn: "root"
})
export class FbGuardService implements CanActivate {
  isAuthenticated: boolean = false;

  constructor(private auth: AuthService, private router: Router) {
    this.auth.Token.subscribe(val => {
      this.isAuthenticated = val != "";
    });
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.isAuthenticated) {
      return true;
    }

    this.router.navigate(["/"]);
    return false;
  }
}
