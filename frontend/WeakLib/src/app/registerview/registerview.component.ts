import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { User } from "../util/user";
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
    statusType: string = "";
    statusMessage: string = "";
    buttonDisabled: boolean = false;

    constructor(private userService: UserService) { }

    ngOnInit() { }

    register(): void {
        if (this.password == this.passwordRepeat) {
            this.userService.registerUser(new User(this.username, this.password, this.email)).subscribe(function (data) {
                if (data._body.indexOf("ERROR") >= 0) {
                    this.statusType = "error";
                    if (data._body.indexOf("name") >= 0 && data._body.indexOf("length") >= 0) {
                        this.statusMessage = "Your username needs to contain at least 3 characters!";
                    }

                    if (data._body.indexOf("name") >= 0 && data._body.indexOf("taken") >= 0) {
                        this.statusMessage = "A user with that name already exists!";
                    }

                    if (data._body.indexOf("email") >= 0 && data._body.indexOf("taken") >= 0) {
                        this.statusMessage = "A user with that email already exists!";
                    }

                    if (data._body.indexOf("email") >= 0 && data._body.indexOf("invalid") >= 0) {
                        this.statusMessage = "Please enter a valid email!";
                    }
                }
                if (data._body.indexOf("SUCCESS") >= 0) {
                    this.statusType = "success";
                    this.statusMessage ="Your account has been created!";
                    this.buttonDisabled = true;
                }
            }.bind(this));
        } else {
            this.statusType = "error"
            this.statusMessage = "The passwords need to match!";
        }
            
    }
}