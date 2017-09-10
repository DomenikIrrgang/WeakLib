import { Injectable } from '@angular/core';
import { Weakaura } from '../util/weakaura';
import { WEAKAURAS } from '../mockdata/weakauras';
import { List } from "../util/list";
import { WeaklibService } from "./weaklib.service";
import { HttpService } from "./http.service";
import { User } from "../util/user";

import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class WeakauraService extends WeaklibService {

    constructor(private http: Http, private httpService: HttpService) {
        super();
    }

    getWeakauras(): Promise<Weakaura[]> {
        return this.http.get(this.baseURI + "/api/weakaura")
        .toPromise()
        .then(response => {
            return response.json();
        })
        .catch(err => err);
    }

    getWeakaurasWithLatency(): Promise<Weakaura[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getWeakauras()), 2000);
        });
    }

    getWeakauraWithHash(hash: String) {
        return this.http.get(this.baseURI + "/api/weakaura?hash=" + hash)
        .toPromise()
        .then(response => {
            return response.json();
        })
        .catch(err => err);
    }

    getWeakaurasFromUser(username: String): Promise<Weakaura[]> {
        return this.http.get(this.baseURI + "/api/weakaura?user=" + username)
        .toPromise()
        .then(response => {
            return response.json();
        })
        .catch(err => err);
    }

    searchWeakaura(name: string, user: string, categories: string[]): Promise<Weakaura[]> {
        var url: string = "/api/weakaura?";
        if (name.length > 0) {
            url += "name=" + name + "&";
        }
        if (user.length > 0) {
            url += "user=" + user + "&";
        }
        if (categories.length > 0) {
            url += "categories=";
            for (var category of categories) {
                url += category + ",";
            }
            url = url.substring(0, url.length - 1);
            url += "&";
        }
        return this.http.get(this.baseURI + url)
        .toPromise()
        .then(response => {
            return response.json();
        })
        .catch(err => err);
    }
}