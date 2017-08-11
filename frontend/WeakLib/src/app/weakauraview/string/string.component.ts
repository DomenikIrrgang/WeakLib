import { Component, OnInit, Input } from '@angular/core';
import { WeakauraVersion } from "../../util/weakauraversion";

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
            document.execCommand('copy');
        } catch (err) {
        }
        document.body.removeChild(textArea);
    }
}