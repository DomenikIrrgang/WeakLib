import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'loginview',
    templateUrl: 'loginview.component.html',
    styleUrls: ['loginview.component.css'],
})

export class LoginViewComponent implements OnInit {
    username: string = "";
    password: string = "";
    remember: boolean = true;

    constructor() { }

    ngOnInit() { }

    checkboxClick(): void {
        this.remember = !this.remember;
    }

    loginClick(): void {
        
    }
}