import { Component, OnInit } from "@angular/core";
import { GeoPlace } from "src/app/shared/model";

@Component({
  selector: "app-google-maps",
  templateUrl: "./google-maps.page.html",
  styleUrls: ["./google-maps.page.scss"]
})
export class GoogleMapsPage implements OnInit {
  constructor() {}

  location: GeoPlace = {
    lable: "Beerenplatz Waldviertel",
    lng: 15.4276355,
    lat: 48.5839237
  };

  public map: any = {};

  ngOnInit() {
    this.map = {
      lat: this.location.lat,
      lng: this.location.lng,
      zoom: 12,
      markerLabel: this.location.lable
    };
  }
}
