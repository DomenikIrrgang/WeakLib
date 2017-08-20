import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { User } from '../util/user';
import { Weakaura } from "../util/weakaura";
import { WeakauraService } from "../services/weakaura.service";
import { UserService } from '../services/user.service';
import { Time } from "../util/time";

@Component({
    selector: 'userview',
    templateUrl: 'userview.component.html',
    styleUrls: ['userview.component.css'],
})
export class UserViewComponent implements OnInit {
    user: User;
    weakauras: Weakaura[];

    constructor(private weakauraService: WeakauraService, private userService: UserService, private route: ActivatedRoute, private time: Time) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            var username: String = params['username'];
            this.userService.getUser(username).then(user => this.user = user);
            console.log(this.user);
            if (this.user.name == "") {
                this.user = null;
            }
            this.weakauras = this.weakauraService.getWeakaurasFromUser(username);
        });
    }

    follow(): void {
        
    }
}