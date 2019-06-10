import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Dog } from "./dog";

@Injectable({
  providedIn: "root"
})
export class DummyService {
  constructor() {}

  getBestDogs(): Observable<Dog[]> {
    return of([
      { name: "Cleo", breed: "Whippet" },
      { name: "Soi the Whippet", breed: "Whippet" },
      { name: "Giro", breed: "Galgo Español" },
      { name: "Flora", breed: "Italian Greyhound" }
    ]);
  }
}
