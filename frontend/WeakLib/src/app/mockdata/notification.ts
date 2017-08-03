import {Notification} from '../util/Notification';
import { Weakaura } from '../util/Weakaura';
import { WeakauraService } from "../services/weakaura.service";
import {NotificationType}from '../util/NotificationTypes';
import {WEAKAURAS} from '../mockdata/weakauras';
import {USER} from './user';

export const NOTIFICATIONS: Notification[]=[
     { actor1: USER[1], actor2: USER[2], weakaura:WEAKAURAS[1], type:NotificationType.WEAKAURA_UPDATE },
     { actor1: USER[1], actor2: USER[2], weakaura:WEAKAURAS[1], type:NotificationType.WEAKAURA_UPDATE },
     { actor1: USER[1], actor2: USER[2], weakaura:WEAKAURAS[1], type:NotificationType.WEAKAURA_UPDATE },
     { actor1: USER[1], actor2: USER[2], weakaura:WEAKAURAS[1], type:NotificationType.WEAKAURA_UPDATE },
];