import { Component, OnInit } from '@angular/core';
import { Weakaura } from '../util/weakaura';
import { WeakauraService } from "../services/weakaura.service";

@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
    latestWeakauras: Weakaura[];
    mostPopularWeakauras: Weakaura[];
    bestRatedWeakauras: Weakaura[];

    constructor(private weakauraService: WeakauraService) {}

    ngOnInit(): void {
        this.weakauraService.getWeakauras().subscribe((result) => {
            this.latestWeakauras = JSON.parse(result["_body"]);
            this.bestRatedWeakauras = JSON.parse(result["_body"]);
            this.mostPopularWeakauras = JSON.parse(result["_body"]);
        });
    }
}