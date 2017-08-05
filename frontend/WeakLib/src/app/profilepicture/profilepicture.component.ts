import { Weakaura } from '../util/Weakaura';
import { Component,Input } from '@angular/core';


@Component ({
    selector:'profilepicture',
    templateUrl: './profielpicture.html',
    styleUrls: ['./profilepicture.css'],

})
export class ProfilepictureComponent {

  @Input()  profilepicture: String;

}