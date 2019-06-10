import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";
import { HttpClient } from "@angular/common/http";
import { Marker } from "../../app/shared/model";

@IonicPage()
@Component({
  selector: "page-observable-crud",
  templateUrl: "observable-crud.html"
})
export class ObservableCrudPage {
  constructor(public httpClient: HttpClient) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ObservableCrudPage");
  }

  result: any;

  getMarkers() {
    this.httpClient
      .get<Marker[]>("http://localhost:5000/api/markers")
      .subscribe(data => {
        this.result = data;
      });
  }

  getMarker() {
    this.httpClient
      .get<Marker>("http://localhost:5000/api/markers/2")
      .subscribe(data => {
        this.result = data;
      });
  }

  insertMarker() {
    var marker = {
      imgURL: "http://www.xyz.at/pic.jpg",
      label: "Super Markers",
      type: 3,
      lat: 12.2342,
      lng: 16.111
    };
    console.log("Voucher to insert: ", marker);
    this.httpClient
      .post("http://localhost:5000/api/markers", marker)
      .subscribe(data => {
        if (data == null) this.result = "Marker inserted";
      });
  }

  updateMarker() {
    this.httpClient
      .get("http://localhost:5000/api/markers/1002")
      .subscribe(data => {
        let mtu: Marker = <Marker>data;
        mtu.lable = "Updated by Angular";
        console.log("Marker to update: ", mtu);
        this.httpClient
          .put("http://localhost:5000/api/markers", mtu)
          .subscribe(data => {
            this.result = "Marker updated";
          });
      });
  }

  deleteMarker() {
    var id = 1002;
    var url = "http://localhost:5000/api/markers/" + id;
    this.httpClient.delete(url).subscribe(data => {
      this.result = `Marker with id ${id} deleted`;
      console.log(this.result);
    });
  }
}
