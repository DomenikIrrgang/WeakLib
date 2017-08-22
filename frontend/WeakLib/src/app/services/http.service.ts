import { Injectable } from '@angular/core';
import { User } from '../util/User';
import { USER } from '../mockdata/user';
import { WeaklibService } from "./weaklib.service";

import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

    constructor(private http: Http) { }

    headers = new Headers({
        'Content-Type': 'application/json'
    });

    postJSON(url: string, data: any): any {
        return this.http.post(url, JSON.stringify(data), { headers: this.headers });        
    }
    
}