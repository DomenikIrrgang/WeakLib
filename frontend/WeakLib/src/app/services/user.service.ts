import { Injectable } from '@angular/core';
import { User } from '../util/User';
import { USER } from '../mockdata/user';
import { WeaklibService } from "./weaklib.service";

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService extends WeaklibService {

    constructor(private http: Http) {
        super();
     }

    getUser(userName: String): Promise<User> {
        return this.http.get(this.baseURL + "/api/user?name=" + userName)
        .toPromise()
        .then(response => {
            return response.json();
        })
        .catch(err => err);
    }

    getAllUser(): Promise<User[]> {
        return this.http.get(this.baseURL + "/api/user")
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => err);
    }
}

