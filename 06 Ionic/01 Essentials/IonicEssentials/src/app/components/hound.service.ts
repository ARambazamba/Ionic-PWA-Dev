import { Injectable } from "@angular/core";
import { Sighthound } from "../shared/model";
import { map } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class HoundService {
  readonly dataKey: string = "hounds";
  hounds: Sighthound[];

  constructor(public http: HttpClient) {
    this.http.get<Sighthound[]>(`/assets/hounds.json`).subscribe(data => {
      this.hounds = data;
    });
  }

  writeHoundsToStorage() {}

  getHounds() {
    return this.http.get<Sighthound[]>(`/assets/hounds.json`);
  }

  getHound(id: number) {
    return this.http
      .get<Sighthound[]>(`/assets/hounds.json`)
      .pipe(map(sh => sh.find((h: Sighthound) => h.id == id)));
  }
}
