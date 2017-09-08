import { Injectable } from '@angular/core';
import { Weakaura } from '../util/weakaura';
import { WEAKAURAS } from '../mockdata/weakauras';
import { List } from "../util/list";
import { WeaklibService } from "./weaklib.service";
import { HttpService } from "./http.service";

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
        for (let weakaura of WEAKAURAS) {
            if (weakaura.hash == hash) {
                return weakaura;
            }
        }
        return null;
    }

    getWeakaurasFromUser(username: String): Weakaura[] {
        var tmp: Weakaura[] = [];
        for (let weakaura of WEAKAURAS) {
            if (weakaura.author == username) {
                tmp.push(weakaura);
            }
        }
        return tmp;
    }

    searchWeakaura(name: string, author: string, categories: string[]): Weakaura[] {
        var tmp: Weakaura[] = [];
        for (let weakaura of WEAKAURAS) {
            if (weakaura.name.includes(name) && weakaura.author.includes(author)) {
                tmp.push(weakaura)
            }
        }
        return tmp;
    }
}