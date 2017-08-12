import { Component, OnInit } from '@angular/core';
import { News } from "../util/news";
import { ActivatedRoute } from '@angular/router';
import { Time } from "../util/time";
import { NewsService } from "../services/news.service";

@Component({
    selector: 'newsview',
    templateUrl: 'newsview.component.html',
    styleUrls: ['newsview.component.css'],
})

export class NewsViewComponent implements OnInit {

    news: News;

    constructor(private newsService: NewsService, private route: ActivatedRoute, private time: Time) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            var hash: string = params['hash'];
            this.newsService.getNewsWithHash(hash).then(news => this.news = news);
        });
    }
}