import { Component } from "@angular/core";
import { NavController } from "@ionic/angular";
import { Marker } from "src/shared/model";
import { MarkerService } from "src/services/markers/markers";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(private router: Router, private ms: MarkerService) {
    this.ms.getMarkers().subscribe(data => {
      this.markers = data;
    });
  }

  markers: Marker[];

  showMarker(marker: Marker) {
    this.router.navigate(["marker-details", marker.id]);
  }
}
