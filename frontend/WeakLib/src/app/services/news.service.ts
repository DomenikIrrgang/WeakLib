import { Injectable } from '@angular/core';

import { News } from '../util/news';
import { NEWS } from '../mockdata/news';

@Injectable()
export class NewsService {
    getNews(): Promise<News[]> {
        return Promise.resolve(NEWS);
    }

    getNewsWithLatency(): Promise<News[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getNews()), 2000);
        });
    }
}