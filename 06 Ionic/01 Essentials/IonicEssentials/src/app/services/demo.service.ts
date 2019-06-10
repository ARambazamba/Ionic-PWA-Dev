import { Injectable } from "@angular/core";
import { DemoItem } from "../shared/model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class DemoService {
  constructor(public http: HttpClient) {
    console.log("Hello DemoProvider Provider");
  }

  getDemos(): DemoItem[] {
    return [
      { Title: "Tabs on Sub-Page", Url: "tabs" },
      { Title: "Ionic Storage", Url: "ionic-storage" },
      { Title: "Custom Events", Url: "custom-events" }
    ];
  }
}
