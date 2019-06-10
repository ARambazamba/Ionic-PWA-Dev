import { Component, OnInit } from "@angular/core";
import { SocialSharing } from "@ionic-native/social-sharing/ngx";

@Component({
  selector: "app-social-sharing",
  templateUrl: "./social-sharing.page.html",
  styleUrls: ["./social-sharing.page.scss"],
  providers: [SocialSharing]
})
export class SocialSharingPage implements OnInit {
  constructor(private socialSharing: SocialSharing) {}

  ngOnInit() {}

  shareMail() {
    this.socialSharing
      .canShareViaEmail()
      .then(() => {
        // Sharing via email is possible
      })
      .catch(() => {
        // Sharing via email is not possible
      });

    // Share via email
    this.socialSharing
      .shareViaEmail("Body", "Subject", ["recipient@example.org"])
      .then(() => {
        // Success!
      })
      .catch(() => {
        // Error!
      });
  }
}
