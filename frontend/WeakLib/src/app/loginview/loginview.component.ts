import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { Router } from "@angular/router";
import { Globals } from "../util/globals";

@Component({
    selector: 'loginview',
    templateUrl: 'loginview.component.html',
    styleUrls: ['loginview.component.css'],
})

export class LoginViewComponent implements OnInit {
    username: string = "";
    password: string = "";
    remember: boolean = true;
    statusType: string = "";
    statusMessage: string = "";

    constructor(private userService: UserService, private router: Router) { }

    ngOnInit() { }

    checkboxClick(): void {
        this.remember = !this.remember;
    }

    loginClick(): void {
        this.userService.login(this.username, this.password).subscribe(function (data) {
            if (data._body == "SUCCESS") {
                this.userService.getAuthenticatedUser().then(user => Globals.authenticatedUser = user);
                this.router.navigate(["/dashboard"]);
            }

            if (data._body == "ERROR") {
                this.statusType = "error";
                this.statusMessage = "Username or password is wrong!";
            }
        }.bind(this));
    }
}