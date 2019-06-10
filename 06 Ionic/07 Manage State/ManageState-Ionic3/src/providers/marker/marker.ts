import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Marker } from "../../app/shared/model";
import { Observable } from "rxjs/Observable";

@Injectable()
export class MarkerProvider {
  constructor(public httpClient: HttpClient) {
    console.log("Hello MarkerProvider Provider");
  }

  getMarkers(): Observable<Marker[]> {
    return this.httpClient.get<Marker[]>("http://localhost:5000/api/markers");
  }

  getMarker(): Observable<Marker> {
    return this.httpClient.get<Marker>("http://localhost:5000/api/markers/2");
  }

  insertMarker(marker: Marker): Observable<any> {
    return this.httpClient.post("http://localhost:5000/api/markers", marker);
  }

  updateMarker(marker: Marker): Observable<any> {
    return this.httpClient.put("http://localhost:5000/api/markers", marker);
  }

  deleteMarker(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:5000/api/markers/${id}`);
  }
}
