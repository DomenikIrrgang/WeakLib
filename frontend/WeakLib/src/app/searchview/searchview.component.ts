import { Component, OnInit, ViewChild } from '@angular/core';
import { Weakaura } from "../util/weakaura";
import { WeakauraService } from "../services/weakaura.service";

@Component({
    selector: 'searchview',
    templateUrl: 'searchview.component.html',
    styleUrls: ['searchview.component.css'],
})

export class SearchViewComponent implements OnInit {
    name: string = "";
    author: string = "";
    categories: string[];
    searchResult: Weakaura[];
    @ViewChild('filterPanel') filterPanel;
    @ViewChild('resultPanel') resultPanel;

    constructor(private weakauraService: WeakauraService) { }

    ngOnInit() { }

    searchSubmit() {
        this.searchResult = this.weakauraService.searchWeakaura(this.name, this.author, this.categories);
        this.filterPanel.contentVisible = false;
        this.resultPanel.contentVisible = true;
    }
    
    categoriesChanged(categories) {
        this.categories = categories;
    }
}