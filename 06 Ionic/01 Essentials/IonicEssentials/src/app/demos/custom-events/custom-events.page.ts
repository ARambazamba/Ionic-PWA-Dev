import { Component, OnInit } from "@angular/core";
import { NavController, Events } from "@ionic/angular";

@Component({
  selector: "app-custom-events",
  templateUrl: "./custom-events.page.html",
  styleUrls: ["./custom-events.page.scss"]
})
export class CustomEventsPage implements OnInit {
  constructor(public navCtrl: NavController, public events: Events) {
    this.subscribeEvts(events);
  }

  ngOnInit() {}

  private subscribeEvts(events: Events) {
    events.subscribe("customEvt:triggered", evt => {
      console.log("Data received", evt);
    });
  }

  triggerCustomEvent() {
    console.log("Triggering custom event ....");
    setTimeout(() => {
      this.events.publish("customEvt:triggered", {
        title: "Custom Evt Msg",
        body: "the body ..."
      });
    }, 2000);
    this.navCtrl.navigateForward("custom-events");
  }
}
