import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-using-toolbar",
  templateUrl: "./using-toolbar.page.html",
  styleUrls: ["./using-toolbar.page.scss"]
})
export class UsingToolbarPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  doSmoething() {
    console.log("Ouch ... you clicked me ...");
  }
}
