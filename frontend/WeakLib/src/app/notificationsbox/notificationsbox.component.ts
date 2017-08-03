import { Component,OnInit } from '@angular/core';
import {NotificationService} from '../services/notification.service';
import {Notification} from '../util/notification';


@Component({
    selector: 'notificationsbox',
    templateUrl: './notificationsbox.component.html',
    styleUrls: ['./notificationsbox.component.css'],
})
export class NotificationsBoxComponent implements OnInit {
notification: Notification[];

constructor(private notificationService: NotificationService) {}


ngOnInit(): void {
this.notificationService.getNotifications().then(notifications => this.notification= notifications);

}
}

