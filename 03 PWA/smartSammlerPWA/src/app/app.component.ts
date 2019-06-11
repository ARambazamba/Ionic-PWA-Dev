import { Component, OnInit } from "@angular/core";
import { MediaChange, MediaObserver } from "@angular/flex-layout";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "app";
  ltSM = false;

  constructor(private ar: ActivatedRoute, private mediaObs: MediaObserver) {}

  ngOnInit(): void {
    this.mediaObs.media$.subscribe((change: MediaChange) => {
      this.ltSM = change.mqAlias == "sm" ? true : false;
    });
  }
}
