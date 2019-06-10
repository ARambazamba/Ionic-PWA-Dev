import { Component, OnInit, Input } from "@angular/core";
import { Sighthound } from "src/app/shared/model";

@Component({
  selector: "app-hound-edit",
  templateUrl: "./hound-edit.component.html",
  styleUrls: ["./hound-edit.component.scss"]
})
export class HoundEditComponent implements OnInit {
  @Input()
  hound: Sighthound;

  constructor() {}

  ngOnInit() {}
}
