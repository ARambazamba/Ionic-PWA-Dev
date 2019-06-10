import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-using-testbed",
  templateUrl: "./using-testbed.page.html",
  styleUrls: ["./using-testbed.page.scss"]
})
export class UsingTestbedPage implements OnInit {
  constructor() {}

  items: { id: number; text: string }[] = [
    { id: 1, text: "cleo" },
    { id: 2, text: "flora" },
    { id: 3, text: "soi" },
    { id: 4, text: "giro" }
  ];

  ngOnInit() {}
}
