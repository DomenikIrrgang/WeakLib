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
        this.weakauraService.getWeakauras().then(weakauras => this.latestWeakauras = weakauras);
        this.weakauraService.getWeakauras().then(weakauras => this.mostPopularWeakauras = weakauras);
        this.weakauraService.getWeakauras().then(weakauras => this.bestRatedWeakauras = weakauras);
    }
}