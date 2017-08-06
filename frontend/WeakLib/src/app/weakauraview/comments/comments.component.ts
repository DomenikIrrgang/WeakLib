import { Component, OnInit } from '@angular/core';
import { Comment } from '../../util/Comment';
import { Weakaura } from '../../util/weakaura';

@Component({
    selector: 'comments',
    templateUrl: 'comments.component.html',
    styleUrls: ['comments.component.css'],
})

export class CommentsComponent implements OnInit {
    comments: Comment[];

    constructor() { }

    ngOnInit() { }

    sendComment(): void {
        
    }
}