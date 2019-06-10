import { Component, OnInit } from "@angular/core";
import { keyLOTTO, keyHOUNDS } from "src/app/shared/consts";
import { HttpClient } from "@angular/common/http";
import { Sighthound } from "src/app/shared/model";
import { StorageAction } from "src/app/demos/ionic-storage/StorageAction";
import { StorageService } from "./storage.service";

@Component({
  selector: "app-ionic-storage",
  templateUrl: "./ionic-storage.page.html",
  styleUrls: ["./ionic-storage.page.scss"]
})
export class IonicStoragePage implements OnInit {
  constructor(public http: HttpClient, private storage: StorageService) {}

  hounds: Sighthound[] = [];
  lotto: number[] = [];

  ngOnInit() {
    this.initHounds();
    this.getVal(keyLOTTO);
  }

  private initHounds() {
    this.storage.execute(StorageAction.get, keyHOUNDS).then(data => {
      if (data == null) {
        this.http.get<Sighthound[]>(`/assets/hounds.json`).subscribe(data => {
          this.hounds = data;
          this.storage.execute(StorageAction.set, keyHOUNDS, data);
        });
      } else {
        this.hounds = data;
      }
    });
  }

  private getVal(key: string) {
    this.storage.execute(StorageAction.get, key).then(data => {
      this.hounds = data;
    });
  }

  writeHoundsToStorage() {
    this.hounds.push({
      id: 99,
      race: "Chart Polski",
      origin: "Poland",
      imgUrl: "/assets/images/ChartPolski.jpg",
      likes: 12
    });
    this.storage.execute(StorageAction.set, keyHOUNDS, this.hounds).then(() => {
      this.getVal(keyHOUNDS);
    });
  }

  writeLottoNumbers() {
    this.storage
      .execute(StorageAction.set, keyLOTTO, [2, 3, 22, 19, 11])
      .then(() => {
        this.getVal(keyLOTTO);
      });
  }

  deleteOne() {
    this.storage.execute(StorageAction.delete, keyLOTTO).then(() => {
      this.getVal(keyLOTTO);
      this.getVal(keyHOUNDS);
    });
  }

  deleteAll() {
    this.storage.execute(StorageAction.clear).then(() => {
      this.getVal(keyLOTTO);
      this.getVal(keyHOUNDS);
    });
  }
}
