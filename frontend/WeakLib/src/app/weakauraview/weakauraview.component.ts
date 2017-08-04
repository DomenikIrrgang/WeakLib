import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Weakaura } from '../util/weakaura';
import { WeakauraService } from '../services/weakaura.service';

@Component({
    selector: 'weakauraview',
    templateUrl: 'weakauraview.component.html',
    styleUrls: ['weakauraview.component.css'],
})

export class WeakauraViewComponent implements OnInit {
    weakaura: Weakaura;

    constructor(private weakauraService: WeakauraService, private route: ActivatedRoute) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            var hash: String = params['hash']; 
            this.weakaura = this.weakauraService.getWeakauraWithHash(hash);
        });
    }
}