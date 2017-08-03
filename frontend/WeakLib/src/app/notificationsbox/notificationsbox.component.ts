import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import { Notification } from '../util/notification';
import { NotificationType } from "../util/NotificationTypes";


@Component({
    selector: 'notificationsbox',
    templateUrl: './notificationsbox.component.html',
    styleUrls: ['./notificationsbox.component.css'],
})
export class NotificationsBoxComponent implements OnInit {
    notifications: Notification[];
    public NotificationType = NotificationType;

    constructor(private notificationService: NotificationService) { }

    ngOnInit(): void {
        this.notificationService.getNotifications().then(notifications => this.notifications = notifications);

    }
}