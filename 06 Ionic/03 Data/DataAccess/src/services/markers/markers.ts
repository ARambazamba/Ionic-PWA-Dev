import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Marker } from "../../shared/model";
import { environment } from "../../shared/environment";
import { Observable } from "rxjs";

@Injectable()
export class MarkerService {
  constructor(public httpClient: HttpClient) {}

  getMarkers(): Observable<Marker[]> {
    return this.httpClient.get<Marker[]>(`${environment.apiUrl}api/markers`);
  }

  getMarker(id: number): Observable<Marker> {
    return this.httpClient.get<Marker>(
      `${environment.apiUrl}api/markers/${id}`
    );
  }

  insertMarker(marker: Marker): Observable<any> {
    return this.httpClient.post(`${environment.apiUrl}api/markers`, marker);
  }

  updateMarker(marker: Marker): Observable<any> {
    return this.httpClient.put(`${environment.apiUrl}api/markers`, marker);
  }

  deleteMarker(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.apiUrl}api/markers/${id}`);
  }
}
