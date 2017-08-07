import { Component, OnInit } from '@angular/core';
import {User} from '../util/user';
import {UserService} from '../services/userservice';

@Component({
    selector: 'userview',
    templateUrl: 'userview.component.html'
})

export class UserViewComponent implements OnInit {
    user: User;
    constructor(private userService: UserService ) { }

    ngOnInit() { }

}