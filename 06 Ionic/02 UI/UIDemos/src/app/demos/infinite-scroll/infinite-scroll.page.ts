import { Component, OnInit, ViewChild } from "@angular/core";
import { IonInfiniteScroll } from "@ionic/angular";
import { MockService } from "./mock.service";

@Component({
  selector: "app-infinite-scroll",
  templateUrl: "./infinite-scroll.page.html",
  styleUrls: ["./infinite-scroll.page.scss"]
})
export class InfiniteScrollPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  items: string[];

  constructor(private mockProvider: MockService) {
    this.items = mockProvider.getData();
  }

  doInfinite(event) {
    this.mockProvider.getAsyncData().then(newData => {
      this.items = this.items.concat(newData);

      event.target.complete();

      if (this.items.length > 90) {
        event.target.disabled = true;
      }
    });
  }

  ngOnInit() {}
}
