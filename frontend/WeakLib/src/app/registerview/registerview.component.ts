import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'registerview',
    templateUrl: 'registerview.component.html',
    styleUrls: ['registerview.component.css'],
})

export class RegisterViewComponent implements OnInit {
    username: string = "";
    password: string = "";
    passwordRepeat: string = "";
    email: string = "";

    constructor() { }

    ngOnInit() { }

    register(): void {

    }
}