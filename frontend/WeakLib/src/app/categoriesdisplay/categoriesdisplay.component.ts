import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'categoriesdisplay',
    templateUrl: 'categoriesdisplay.component.html',
    styleUrls: ["categoriesdisplay.component.css"],
})

export class CategoriesDisplayComponent implements OnInit {
    @Input()
    categories: string[];
    @Input()
    align: string = "left";

    constructor() { }

    ngOnInit() { }
}