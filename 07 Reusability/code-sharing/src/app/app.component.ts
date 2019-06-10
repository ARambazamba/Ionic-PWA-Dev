import { Component, OnInit } from "@angular/core";
import { DummyService, Dog } from "ng-common-lib";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  providers: [DummyService]
})
export class AppComponent implements OnInit {
  title = "code-sharing";
  dogs: Dog[];

  constructor(private ds: DummyService) {}

  ngOnInit(): void {
    this.ds.getBestDogs().subscribe(data => {
      this.dogs = data;
    });
  }
}
