import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

declare var navigator;

@Injectable({
  providedIn: "root"
})
export class GeoServiceHTMLService {
  constructor() {}

  getCurrentPosition(): Observable<any> {
    return Observable.create(observer => {
      navigator.geolocation.getCurrentPosition(position => {
        observer.next(position);
        observer.complete();
      }, observer.error.bind(observer));
    });
  }
}
