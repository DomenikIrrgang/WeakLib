import { Component, OnInit, Input } from '@angular/core';
import { WeakauraVersion } from "../../util/WeakauraVersion";

@Component({
    selector: 'weakaurastring',
    templateUrl: 'string.component.html',
    styleUrls: ['string.component.css'],
})

export class StringComponent implements OnInit {
    @Input() weakauraVersion: WeakauraVersion;

    constructor() { }

    ngOnInit() { }

    copyClick() {
        var textArea = document.createElement("textarea");
        textArea.style.position = 'fixed';
        textArea.value = String(this.weakauraVersion.string);
        document.body.appendChild(textArea);
        textArea.select();
        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copying text command was ' + msg);
        } catch (err) {
            console.log('Oops, unable to copy');
        }
        document.body.removeChild(textArea);
    }
}