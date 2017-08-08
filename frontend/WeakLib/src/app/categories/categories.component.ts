import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'categories',
    templateUrl: 'categories.component.html',
    styleUrls: ['categories.component.css'],
})

export class CategoriesComponent implements OnInit {
    categories: string[] = ["Druid", "Monk", "Warrior"];
    selectedCategories: string[] = [];
    selectedCategory: string;

    constructor() { }

    ngOnInit() { }

    addCategory(): void {
        this.selectedCategories.push(this.selectedCategory);
        console.log(this.selectedCategory);
    }

    removeCategory(category: string): void {

    }
}