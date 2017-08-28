import { Injectable } from '@angular/core';
import { User } from '../util/User';
import { USER } from '../mockdata/user';
import { WeaklibService } from "./weaklib.service";
import { HttpService } from "./http.service";

import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UserService extends WeaklibService {

    constructor(private http: Http, private httpService: HttpService) {
        super();
    }

    getUser(userName: String): Promise<User> {
        return this.http.get(this.baseURI + "/api/user?name=" + userName)
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => err);
    }

    getAllUser(): Promise<User[]> {
        return this.http.get(this.baseURI + "/api/user")
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => err);
    }

    registerUser(user: User): any {
        let bodyString = JSON.stringify(user);
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.baseURL + this.baseURI + "api/user", bodyString, options);
    }

    logout(): any {
        return this.http.post(this.baseURL + this.baseURI + "/logout", "");
    }

    login(name: string, password: string): any {
        return this.http.post(this.baseURL + this.baseURI + "/login?name=" + name + "&password=" + password, "");
    }

    getAuthenticatedUser(): Promise<User> {
        return this.http.get(this.baseURI + "/login")
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => err);
    }
}

