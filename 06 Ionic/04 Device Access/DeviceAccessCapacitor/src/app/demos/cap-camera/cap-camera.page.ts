import { Component, OnInit } from "@angular/core";
import { Plugins, CameraSource, CameraResultType } from "@capacitor/core";
@Component({
  selector: "app-cap-camera",
  templateUrl: "./cap-camera.page.html",
  styleUrls: ["./cap-camera.page.scss"]
})
export class CapCameraPage implements OnInit {
  constructor() {}

  takenPicture: any;

  ngOnInit() {}

  async takePicture() {
    const takePicture = await Plugins.Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      source: CameraSource.Camera,
      resultType: CameraResultType.Uri
    });

    this.takenPicture = takePicture.webPath;
  }
}
