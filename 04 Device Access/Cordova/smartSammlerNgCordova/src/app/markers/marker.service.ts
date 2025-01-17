import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { Router } from "@angular/router";
import { LocalStorageService } from "ngx-webstorage";
import { BehaviorSubject, Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Subscription } from "rxjs/Subscription";
import { Marker } from "../shared/model";

@Injectable()
export class MarkerService {
  constructor(
    private router: Router,
    private obsMedia: MediaObserver,
    private ls: LocalStorageService
  ) {
    this.subscribeScreen();
    this.initMarkers();
  }

  //Marker Data initialization & operations

  private keyMARKERS: string = "keyMARKERS";
  private arrMarkers: Marker[] = [];
  private markers: BehaviorSubject<Marker[]> = new BehaviorSubject(
    this.arrMarkers
  );

  private initMarkers() {
    let persistedMarkers = this.ls.retrieve(this.keyMARKERS);
    if (persistedMarkers == undefined) {
      this.arrMarkers = [
        {
          id: 1000,
          imgURL: "assets/images/beeren.png",
          lable: "Waldviertel",
          type: 1,
          lat: 48.5839237,
          lng: 15.4276355,
          remark: "Mittelmäßige Vorkommen - Dafür 100% Bio",
          picture: null
        },
        {
          id: 1001,
          imgURL: "assets/images/schwammerl.png",
          lable: "Steiermark",
          type: 3,
          lat: 47.5308866,
          lng: 15.9476211,
          remark: "Eierschwammerl & Steinpilze - so weit das Auge reicht",
          picture: null
        },
        {
          id: 1002,
          imgURL: "assets/images/holler.png",
          lable: "Neuwaldegg",
          type: 2,
          lat: 48.234201,
          lng: 16.277753,
          remark:
            "Mittelmäßige Vorkommen - Tendenziell eher auf Marwiesenseite",
          picture: null
        }
      ];
      this.ls.store(this.keyMARKERS, this.arrMarkers);
      console.log("Initialized markers");
    } else {
      this.arrMarkers = persistedMarkers;
      console.log("Markers taken from lokal storage");
    }
    this.markers.next(this.arrMarkers);
  }

  resetMarkers() {
    this.initMarkers();
    this.router.navigateByUrl(`/`);
  }

  makersPersistAndBroadcast() {
    this.ls.store(this.keyMARKERS, this.arrMarkers);
    this.markers.next(this.arrMarkers);
  }

  getMarkers(): Observable<Marker[]> {
    return this.markers;
  }

  getMarker(id: number): Observable<Marker> {
    return this.markers.pipe(map(m => m.find((m: Marker) => m.id == id)));
  }

  saveMarker(m: Marker): void {
    if (m.id == undefined) {
      this.addMarker(m);
    } else {
      this.updateMarker(m);
    }
    this.makersPersistAndBroadcast();
  }

  private updateMarker(m: Marker): void {
    let old = this.arrMarkers.find(m => m.id == m.id);
    var idx = this.arrMarkers.indexOf(old);
    this.arrMarkers.splice(idx, 1, m);
  }

  private addMarker(m: Marker): void {
    this.arrMarkers.push(m);
  }

  removeMarker(m: Marker): void {
    var idx = this.arrMarkers.indexOf(m);
    if (idx !== -1) {
      this.arrMarkers.splice(idx, 1);
    }
    this.markers.next(this.arrMarkers);
    this.makersPersistAndBroadcast();
  }

  //Responsive Screen Service - in larger projects outsourced to it's own service

  private watcher: Subscription;
  ScreenGtSmall: boolean;
  private currentMQ: string;

  private subscribeScreen() {
    this.watcher = this.obsMedia.media$.subscribe((change: MediaChange) => {
      this.currentMQ = change.mqAlias;
      switch (this.currentMQ) {
        case "xs":
          this.ScreenGtSmall = false;
          break;
        case "sm":
          this.ScreenGtSmall = false;
          break;
        default:
          this.ScreenGtSmall = true;
          break;
      }
    });
  }

  //Responsive Routing

  showMarker(id: number): void {
    if (this.ScreenGtSmall) {
      this.router.navigate(["", { outlets: { sidebar: ["showmarker", id] } }]);
    } else {
      this.router.navigate(["", { outlets: { sidebar: null } }]);
      this.router.navigateByUrl(`/markers/${id}`);
    }
  }
}
