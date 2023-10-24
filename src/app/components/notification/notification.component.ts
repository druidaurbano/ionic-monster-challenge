import { Component, OnInit } from '@angular/core';
import { LocalNotifications, ScheduleOptions } from '@capacitor/local-notifications';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  async scheduleNotification() {
    let options: ScheduleOptions = {
      notifications: [
        {
          id: 111,
          title: "Notification Challenge",
          body: "Open to get a fun fact about Brazil",
          largeBody: "The name Brazil comes from a tree named Brazilwood",
          summaryText: "Notification works !"
        }
      ]
    };

    try {
      await LocalNotifications.schedule(options);
    }
    catch(ex) {
      alert(JSON.stringify(ex));
    }
  }

}
