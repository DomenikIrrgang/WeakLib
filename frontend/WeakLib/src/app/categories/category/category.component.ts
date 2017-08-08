import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'category',
    templateUrl: 'category.component.html',
    styleUrls: ['category.component.css'],
})

export class CategoryComponent implements OnInit {
    @Input() name: string;
    @Output() notify: EventEmitter<string> = new EventEmitter<string>();

    constructor() { }

    ngOnInit() { }

    removeClick(): void {
        this.notify.emit(this.name);
    }
}