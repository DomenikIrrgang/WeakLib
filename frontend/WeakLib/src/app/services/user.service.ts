import { Injectable } from '@angular/core';
import { User } from '../util/User';
import { USER } from '../mockdata/user';

import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    constructor(private http: Http) { }

    getUser(userName: String) {
        for (let user of USER)
            if (user.name == userName) {
                return user;
            }
        return null;
    }

    getAllUser(): Promise<User[]> {
        return this.http.get("http://localhost/backend/api/user")
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => err);
    }
}

