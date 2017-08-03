import { Weakaura } from './Weakaura';
import { User } from './User';
import { NotificationType } from './NotificationTypes';

export class Notification {
    actor1: User;
    actor2: User;
    weakaura: Weakaura;
    type: NotificationType;
}