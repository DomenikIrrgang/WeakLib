import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'clickablepanel',
    templateUrl: 'clickablepanel.component.html',
    styleUrls: ['clickablepanel.component.css'],
})

export class ClickablePanelComponent implements OnInit {
    @Input() heading: String;
    contentVisible: boolean = false;

    constructor() { }

    ngOnInit() { }

    panelClick() {
        this.contentVisible = !this.contentVisible;
    }
}