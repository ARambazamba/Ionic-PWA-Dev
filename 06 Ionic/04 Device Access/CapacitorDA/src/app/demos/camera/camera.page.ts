import { Component, OnInit } from "@angular/core";
import { Plugins, CameraSource, CameraResultType } from "@capacitor/core";

// Destructoring
let { Camera, Keyboard } = Plugins;

@Component({
  selector: "app-camera",
  templateUrl: "./camera.page.html",
  styleUrls: ["./camera.page.scss"]
})
export class CameraPage implements OnInit {
  constructor() {}

  takenPicture: any;

  ngOnInit() {}

  async takePicture() {
    const takePicture = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      source: CameraSource.Camera,
      resultType: CameraResultType.Uri
    });

    this.takenPicture = takePicture.webPath;
  }
}
