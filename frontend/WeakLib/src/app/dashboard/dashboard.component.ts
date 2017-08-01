import { Component } from '@angular/core';
import { Weakaura } from '../util/Weakaura';

const WEAKAURAS: Weakaura[] = [
    { name: 'Test1', author: 'author1', uploadTime: Date.now() },
    { name: 'Test2', author: 'author2', uploadTime: Date.now() },
];

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
    weakauras: Weakaura[] = WEAKAURAS;
}