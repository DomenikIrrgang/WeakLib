import {Injectable} from '@angular/core';
import {User} from '../util/User';
import {USER} from '../mockdata/user';

@Injectable()
export class UserService{
    getUser(userName:String){
        for (let user of USER)
         if (user.name== userName) {
             return user;
         } 
             return null; 
    }
       
    
}

