import { Component, OnInit } from "@angular/core";
import { Picture } from "src/app/shared/model";
import { environment } from "src/environments/environment";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { ToastController } from "@ionic/angular";
import { Camera, CameraOptions } from "@ionic-native/camera/ngx";

@Component({
  selector: "app-camera",
  templateUrl: "./camera.page.html",
  styleUrls: ["./camera.page.scss"],
  providers: [Camera]
})
export class CameraPage implements OnInit {
  ngOnInit() {}

  constructor(
    private camera: Camera,
    private httpClient: HttpClient,
    public toastCtrl: ToastController
  ) {}

  public base64Image: string;

  imgSrc: any;

  async showToast(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1500
    });
    toast.present();
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then(
      imageData => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
      },
      err => {
        console.log(err);
      }
    );
  }

  deletePhoto() {
    this.base64Image = null;
  }

  savePhoto() {
    debugger;

    var pic: Picture = {
      markerId: 1,
      label: "What a cool picture",
      picture: this.base64Image
    };

    let header = new HttpHeaders();
    header.append("Content-Type", "application/json");
    header.append("Access-Control-Allow-Origin", "*");
    header.append("Accept", "application/json");

    let opts = { headers: header };
    this.httpClient
      .post(`${environment.apiUrl}api/pictures`, pic, opts)
      .subscribe(
        resp => {
          console.log(resp);
          this.showToast("Picture saved");
        },
        err => console.log(err)
      );
  }
}
