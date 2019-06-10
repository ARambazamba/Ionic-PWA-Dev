import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Sighthound } from "src/app/shared/model";

@Component({
  selector: "app-hound-list",
  templateUrl: "./hound-list.component.html",
  styleUrls: ["./hound-list.component.scss"]
})
export class HoundListComponent implements OnInit {
  @Input()
  houndSource: Sighthound[] = null;
  @Output()
  houndSelected: EventEmitter<Sighthound> = new EventEmitter();
  noHounds: string = "Sorry No Hounds available";

  constructor() {}

  ngOnInit(): void {}

  selectHound(id: number) {
    this.houndSelected.emit(this.houndSource.find(h => h.id == id));
  }
}
