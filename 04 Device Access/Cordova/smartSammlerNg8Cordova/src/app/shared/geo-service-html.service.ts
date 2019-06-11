import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

declare var navigator;

@Injectable({
  providedIn: "root"
})
export class GeoServiceHTMLService {
  constructor() {}

  getCurrentPosition(): Observable<any> {
    // Wrapping a callback funtion to Observable
    // navigator.geolocation.getCurrentPosition(success[, error[, [options]])
    return Observable.create(observer => {
      navigator.geolocation.getCurrentPosition(position => {
        observer.next(position);
        observer.complete();
      }, observer.error.bind(observer));
    });
  }
}
