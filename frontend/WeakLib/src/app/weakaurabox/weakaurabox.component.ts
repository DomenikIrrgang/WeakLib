import { Component, Input, Directive, ElementRef } from '@angular/core';
import { Weakaura } from '../util/weakaura';
import { Time } from "../util/time";

@Component({
    selector: 'weakaurabox',
    templateUrl: './weakaurabox.component.html',
    styleUrls: ['./weakaurabox.component.css'],

})
export class WeakauraBoxComponent {
    @Input() weakauras: Weakaura[];
    @Input() heading: String;
    @Input() searchURL: String;

    constructor(private time: Time) {}
}