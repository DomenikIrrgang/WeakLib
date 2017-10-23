import { Component, OnInit } from '@angular/core';
import { User } from "../util/user";
import { UserService } from "../services/user.service";
import { Globals } from "../util/globals";

@Component({
    selector: 'navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent implements OnInit {

    global = Globals;

    constructor(private userService: UserService) { }

    ngOnInit() {
        this.userService.getAuthenticatedUser().subscribe(data => {
            if (data["_body"] !== "ERROR") {
                Globals.authenticatedUser = JSON.parse(data["_body"]);
            }
        });
    }

    navigationElementClick(): void {
        if (window.innerWidth < 768) {
            document.getElementsByName("collapse-button")[0].click()
        } 
    }

    logout(event) {
        this.userService.logout().subscribe((data) => {
            Globals.authenticatedUser = undefined;
        },
        (error) => {
            console.log(error);
        });
    }
} 