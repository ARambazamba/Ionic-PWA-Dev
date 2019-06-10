import { Component, OnInit } from "@angular/core";
import { NavController, NavParams, ToastController } from "@ionic/angular";
import { Marker } from "src/shared/model";
import { MarkerService } from "src/services/markers/markers";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-marker-details",
  templateUrl: "./marker-details.page.html",
  styleUrls: ["./marker-details.page.scss"]
})
export class MarkerDetailsPage implements OnInit {
  constructor(
    private route: ActivatedRoute,
    public ms: MarkerService,
    public toastCtrl: ToastController
  ) {
    this.route.params.subscribe(param => {
      this.ms.getMarker(param["id"]).subscribe(m => {
        this.marker = m;
      });
    });
  }

  marker: Marker = {
    id: 0,
    imgURL: "",
    lable: "",
    type: 0,
    lat: 0,
    lng: 0,
    hasCoords: false,
    remark: "",
    picture: null
  };

  ngOnInit() {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad MarkerDetailsPage");
  }

  showToast(msg: string) {
    this.toastCtrl
      .create({
        message: msg,
        duration: 1500
      })
      .then(toastData => {
        console.log(toastData);
        toastData.present();
      });
  }

  saveMarker() {
    if (this.marker.id == undefined) {
      this.ms.insertMarker(this.marker).subscribe(() => {
        this.showToast("Marker saved");
      });
    } else {
      this.ms.updateMarker(this.marker).subscribe(() => {
        this.showToast("Marker saved");
      });
    }
  }

  deleteMarker() {
    this.ms.deleteMarker(this.marker.id).subscribe(() => {
      this.showToast("Marker deleted");
    });
  }

  addMarker() {
    this.marker = { imgURL: "", lable: "", type: 1, lat: 0, lng: 0 };
  }
}
