import { Component, OnInit,Input } from '@angular/core';

@Component({
    selector: 'searchview',
    templateUrl: 'searchview.component.html',
    styleUrls: ['searchview.component.css'],
})

export class SearchViewComponent implements OnInit {
@Input() namesearch: String;

    constructor() { }

    ngOnInit() { }
}