import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Time } from "../util/time";
import { Weakaura } from '../util/weakaura';
import { WeakauraService } from '../services/weakaura.service';

@Component({
    selector: 'weakauraview',
    templateUrl: 'weakauraview.component.html',
    styleUrls: ['weakauraview.component.css'],
})

export class WeakauraViewComponent implements OnInit {
    weakaura: Weakaura;

    @ViewChild('imagePreview')
    imagePreview;

    constructor(private weakauraService: WeakauraService, private route: ActivatedRoute, private time: Time) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            var hash: String = params['hash']; 
            this.weakaura = this.weakauraService.getWeakauraWithHash(hash);
        });
    }

    follow(): void {
        
    }

    openImagePreview(event) {
        this.imagePreview.currentImage = +event.srcElement.name;
        this.imagePreview.open();
    }
}