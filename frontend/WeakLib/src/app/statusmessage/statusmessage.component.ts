import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'statusmessage',
    templateUrl: 'statusmessage.component.html',
    styleUrls: ["statusmessage.component.html"]
})

export class StatusMessageComponent implements OnInit {
    @Input()
    type: string;

    @Input()
    message: string;

    @Input()
    closeable: boolean;

    constructor() { }

    ngOnInit() { }
}