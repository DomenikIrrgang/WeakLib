import {Injectable} from '@angular/core';
import {Notification} from '../util/Notification';
import {NOTIFICATIONS} from '../mockdata/notification';

@Injectable()
export class NotificationService{
  getNotifications() : Promise <Notification[]>{
  return Promise.resolve(NOTIFICATIONS);
}
}