import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { User } from "../util/user";

@Component({
    selector: 'contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
    url: string = "";

    constructor(private userService: UserService) {}

    sendRequest(): void {

    }

    ngOnInit(): void {
        //this.result = this.userService.getAllUser();
    }
}