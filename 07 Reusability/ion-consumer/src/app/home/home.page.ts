import { Component } from "@angular/core";
import { DummyService, Dog } from "ng-codesharelib";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(private ds: DummyService) {
    this.ds.getBestDogs().subscribe(data => {
      this.dogs = data;
    });
  }

  dogs: Dog[];
}
