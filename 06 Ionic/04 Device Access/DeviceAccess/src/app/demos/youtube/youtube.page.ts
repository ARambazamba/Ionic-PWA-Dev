import { Component, OnInit } from "@angular/core";
import { YoutubeVideoPlayer } from "@ionic-native/youtube-video-player/ngx";

@Component({
  selector: "app-youtube",
  templateUrl: "./youtube.page.html",
  styleUrls: ["./youtube.page.scss"],
  providers: [YoutubeVideoPlayer]
})
export class YoutubePage implements OnInit {
  constructor(private youtube: YoutubeVideoPlayer) {}

  ngOnInit() {}

  playVideo() {
    this.youtube.openVideo("BlkjVmHHwK4");
  }
}
