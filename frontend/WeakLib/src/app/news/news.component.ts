import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { News } from '../util/news';

@Component({
    selector: 'news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css'],
})
export class NewsComponent implements OnInit {
    news: News[];

    constructor(private newsService: NewsService) {

    }

    ngOnInit(): void {
        this.newsService.getNews().then(news => this.news = news);
    }
}