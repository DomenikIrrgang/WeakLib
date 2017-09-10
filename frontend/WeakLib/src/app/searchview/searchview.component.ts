import { Component, OnInit, ViewChild } from '@angular/core';
import { Weakaura } from "../util/weakaura";
import { WeakauraService } from "../services/weakaura.service";
import { Time } from "../util/time";

@Component({
    selector: 'searchview',
    templateUrl: 'searchview.component.html',
    styleUrls: ['searchview.component.css'],
})

export class SearchViewComponent implements OnInit {
    name: string = "";
    author: string = "";
    categories: string[] = [];
    searchResult: Weakaura[] = [];
    @ViewChild('filterPanel') filterPanel;
    @ViewChild('resultPanel') resultPanel;

    constructor(private weakauraService: WeakauraService, private time: Time) { }

    ngOnInit() { }

    searchSubmit() {
        this.weakauraService.searchWeakaura(this.name, this.author, this.categories).then(weakauras => this.searchResult = weakauras);
        this.filterPanel.contentVisible = true;
        this.resultPanel.contentVisible = true;
    }
    
    categoriesChanged(categories) {
        this.categories = categories;
    }

    hasResult(): boolean {
        return this.searchResult.length > 0;
    }

    checkReturnKey(event) {
        if (event.key == "Enter") {
            this.searchSubmit();
        }
    }
}