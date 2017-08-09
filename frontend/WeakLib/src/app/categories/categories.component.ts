import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { List } from "../util/list";

@Component({
    selector: 'categories',
    templateUrl: 'categories.component.html',
    styleUrls: ['categories.component.css'],
})

export class CategoriesComponent implements OnInit {
    categories: string[] = ["Druid", "Monk", "Warrior"];
    selectedCategories: string[] = [];
    categoryList: List<string> = new List<string>();
    selectedCategory: string;
    @Output() notify: EventEmitter<string[]> = new EventEmitter<string[]>();

    constructor() { }

    ngOnInit() { }

    addCategory(): void {
        if (!this.categoryList.contains(this.selectedCategory) && this.selectedCategory != "" && this.selectedCategory != undefined) {
            this.categoryList.add(this.selectedCategory);
        }
        this.selectedCategories = this.categoryList.toArray();
        this.notify.emit(this.selectedCategories);
    }

    removeCategory(category: string): void {
        this.categoryList.remove(category);
        this.selectedCategories = this.categoryList.toArray();
        this.notify.emit(this.selectedCategories);
    }
}