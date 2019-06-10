import { Component } from "@angular/core";
import { IonicPage } from "ionic-angular";
import { Subscription } from "rxjs/Subscription";
import { Marker } from "../../app/shared/model";
// import { isArray } from "ionic-angular/umd/util/util";
import { MarkerProvider } from "../../providers/marker/marker";
import { map, tap } from "rxjs/operators";

@IonicPage()
@Component({
  selector: "page-observables-operators",
  templateUrl: "observables-operators.html"
})
export class ObservablesOperatorsPage {
  constructor(public ms: MarkerProvider) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad ObservablesOperatorsPage");
  }

  markers: Marker[] = null;
  sub: Subscription = null;

  unsbscribe = () => (this.sub != null ? this.sub.unsubscribe() : null);
  setLabel = v => ({ ...v, Label: `${v.Text} costs € ${v.Amount}` });

  log = (msg: string, data: any) => {
    console.log(`executing ${msg}, 'data' is Array: ${data}`, data);
    this.markers = data;
  };

  usePipeAndMap() {
    this.ms
      .getMarkers()
      .pipe(map(vs => vs.map(this.setLabel)))
      .subscribe(data => this.log("use pipe() & map() - RxJS 6 pattern", data));
  }

  usePipeMapAndTap() {
    this.ms
      .getMarkers()
      .pipe(
        tap(data => console.log("logged by tap(): ", data)),
        map(vs => vs.map(this.setLabel))
      )
      .subscribe(data =>
        this.log("use pipe(), map() & tap() - RxJS 6 pattern", data)
      );
  }

  getByID() {
    this.ms
      .getMarkers()
      .pipe(map(markers => markers.find((m: Marker) => m.id == 3)))
      .subscribe(data => this.log("getByID - using find()", data));
  }

  useFilter() {
    this.ms
      .getMarkers()
      .pipe(map(markers => markers.filter((m: Marker) => m.remark)))
      .subscribe(data => this.log("getByID - using find()", data));
  }
}
