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
    result: User = new User();

    constructor(private userService: UserService) {}

    sendRequest(): void {
        this.userService.getAllUser().then(user => this.result = user[0] )
    }

    ngOnInit(): void {
        //this.result = this.userService.getAllUser();
    }
}