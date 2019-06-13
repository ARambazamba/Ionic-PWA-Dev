import { Component } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor() {}

  items: { name: string; url: string }[] = [
    { name: "Camera", url: "camera" },
    { name: "Browser", url: "browser" }
  ];
}
