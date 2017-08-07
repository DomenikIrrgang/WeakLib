import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { User } from '../util/user';
import { Weakaura } from "../util/weakaura";
import { WeakauraService } from "../services/weakaura.service";
import { UserService } from '../services/user.service';

@Component({
    selector: 'userview',
    templateUrl: 'userview.component.html',
    styleUrls: ['userview.component.css'],
})
export class UserViewComponent implements OnInit {
    user: User;
    weakauras: Weakaura[];

    constructor(private weakauraService: WeakauraService, private userService: UserService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            var username: String = params['username'];
            this.user = this.userService.getUser(username);
            this.weakauras = this.weakauraService.getWeakaurasFromUser(username);
        });
    }

    follow(): void {
        
    }
}