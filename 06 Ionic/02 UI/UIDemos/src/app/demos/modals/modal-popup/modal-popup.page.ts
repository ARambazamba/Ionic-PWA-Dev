import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-modal-popup",
  templateUrl: "./modal-popup.page.html",
  styleUrls: ["./modal-popup.page.scss"]
})
export class ModalPopupPage implements OnInit {
  @Input() param: string;

  constructor() {}

  ngOnInit() {}
}
