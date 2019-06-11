import { Component, OnInit } from "@angular/core";
import { BarcodeScanner } from "@ionic-native/barcode-scanner/ngx";

@Component({
  selector: "app-barcode",
  templateUrl: "./barcode.page.html",
  styleUrls: ["./barcode.page.scss"],
  providers: [BarcodeScanner]
})
export class BarcodePage implements OnInit {
  constructor(private barcodeScanner: BarcodeScanner) {}

  ngOnInit() {}

  results: any;

  scan() {
    this.barcodeScanner.scan().then(
      barcodeData => {
        // Success! Barcode data is here
        this.results = barcodeData;
      },
      err => {
        // An error occurred
        alert(`Error scanning: ${err}`);
      }
    );
  }

  reset() {
    this.results = null;
  }

  lookup() {
    window.open(`http://www.upcindex.com/${this.results.text}`, "_system");
  }
}
