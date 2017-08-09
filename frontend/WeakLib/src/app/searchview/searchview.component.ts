import { Component, OnInit } from '@angular/core';
import { Weakaura } from "../util/weakaura";

@Component({
    selector: 'searchview',
    templateUrl: 'searchview.component.html',
    styleUrls: ['searchview.component.css'],
})

export class SearchViewComponent implements OnInit {
    namesearch: String;
    author: String;
    categories: String[];
    searchResult: Weakaura[];

    constructor() { }

    ngOnInit() { }

    searchSubmit() {

    }
}