import { Injectable } from '@angular/core';
import { Category } from "../util/category";
import { WeaklibService } from "./weaklib.service";
import { HttpService } from "./http.service";

import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class CategoryService extends WeaklibService {

    constructor(private http: Http, private httpService: HttpService) {
        super();
    }

    getCategories(): Promise<Category[]> {
        return this.http.get(this.baseURI + "/api/categories")
            .toPromise()
            .then(response => {
                return response.json();
            })
            .catch(err => err);
    }
}