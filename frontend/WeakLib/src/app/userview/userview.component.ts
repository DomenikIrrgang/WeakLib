import { Component, OnInit } from '@angular/core';
import { User } from '../util/user';
import { Weakaura } from "../util/weakaura";
import { WeakauraService } from "../services/weakaura.service";
//import { UserService } from '../services/user.service';

@Component({
    selector: 'userview',
    templateUrl: 'userview.component.html'
})

export class UserViewComponent implements OnInit {
    user: User;
    weakauras: Weakaura[];

    //private userService: UserService
    constructor(private weakauraService: WeakauraService) { }

    ngOnInit() { }

}