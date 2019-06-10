import { Component, OnInit } from "@angular/core";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-segment-list",
  templateUrl: "./segment-list.page.html",
  styleUrls: ["./segment-list.page.scss"]
})
export class SegmentListPage implements OnInit {
  pet: string = "puppies";
  isAndroid: boolean = false;

  constructor(platform: Platform) {
    this.isAndroid = platform.is("android");
  }

  ngOnInit() {}
}
