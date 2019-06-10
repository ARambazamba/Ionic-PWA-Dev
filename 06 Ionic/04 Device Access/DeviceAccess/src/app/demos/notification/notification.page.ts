import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
  providers: [LocalNotifications]
})
export class NotificationPage implements OnInit {

  constructor(
    private localNotifications: LocalNotifications,
    private pf: Platform
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LocalNotificationPage");
  }

  scheduleNotification() {
    this.localNotifications.schedule({
      id: 1,
      text: "Single ILocalNotification",
      sound: this.pf.is("android") ? "file://sound.mp3" : "file://beep.caf"
    });
  }

  ngOnInit() {
  }

}
