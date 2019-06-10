import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { map } from "rxjs/operators";
import { Marker } from "../../app/shared/model";

@Injectable()
export class MarkerServiceWithState {
  constructor(private httpClient: HttpClient) {
    this.loadMarkersRemote();
  }

  private arrMarkers: Marker[] = [];
  private markers: BehaviorSubject<Marker[]> = new BehaviorSubject(
    this.arrMarkers
  );

  private loadMarkersRemote() {
    this.httpClient
      .get<Marker[]>("http://localhost:5000/api/markers")
      .subscribe(data => {
        this.arrMarkers = data;
        this.markers.next(this.arrMarkers);
      });
  }

  private saveMarkerRemote(m: Marker): Observable<Marker> {
    return this.httpClient.post<Marker>("http://localhost:5000/api/markers", m);
  }

  private removeMarkerRemote(m: Marker): Observable<any> {
    return this.httpClient.delete(`http://localhost:5000/api/markers/${m.id}`);
  }

  private addMarkerArray(m: Marker): void {
    this.arrMarkers.push(m);
  }

  private updateMarkerArray(m: Marker): void {
    let old = this.arrMarkers.find(m => m.id == m.id);
    var idx = this.arrMarkers.indexOf(old);
    this.arrMarkers.splice(idx, 1, m);
  }

  getMarkers(): Observable<Marker[]> {
    return this.markers;
  }

  getMarker(id: number): Observable<Marker> {
    return this.markers.pipe(map(m => m.find((m: Marker) => m.id == id)));
  }

  addMarker(m: Marker): Observable<any> {
    this.addMarkerArray(m);
    this.markers.next(this.arrMarkers);
    return null;
  }

  saveMarker(m: Marker): Observable<any> {
    if (m.id == undefined) {
      this.addMarkerArray(m);
    } else {
      this.updateMarkerArray(m);
    }
    this.saveMarkerRemote(m).subscribe(() =>
      this.markers.next(this.arrMarkers)
    );
    return null;
  }

  removeMarker(m: Marker): Observable<any> {
    var idx = this.arrMarkers.indexOf(m);
    if (idx !== -1) {
      this.arrMarkers.splice(idx, 1);
    }
    this.removeMarkerRemote(m).subscribe(() =>
      this.markers.next(this.arrMarkers)
    );
    return Observable.create(null);
  }
}
