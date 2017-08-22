import { Injectable } from '@angular/core';
import { User } from '../util/User';
import { USER } from '../mockdata/user';
import { WeaklibService } from "./weaklib.service";
import { HttpService } from "./http.service";

import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService extends WeaklibService {

    constructor(private http: Http, private httpService: HttpService) {
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

    registerUser(user: User): any {
        let bodyString = JSON.stringify(user); // Stringify payload
        let headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options = new RequestOptions({ headers: headers }); // Create a request option
        console.log("http://localhost" + this.baseURL + "api/user");
        return this.http.post("http://localhost" + this.baseURL + "api/user", bodyString, options);
    }
}

