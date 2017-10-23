import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Comment } from '../../util/comment';
import { WeakauraService } from "../../services/weakaura.service";
import { Weakaura } from "../../util/weakaura";
import { Time } from "../../util/time";

@Component({
    selector: 'comments',
    templateUrl: 'comments.component.html',
    styleUrls: ['comments.component.css'],
})

export class CommentsComponent implements OnInit {
    comments: Comment[];
    @ViewChild('comment') comment;
    @Input() source: any;

    constructor(private commentService: WeakauraService, private time: Time) { }

    ngOnInit() {
        this.commentService.getComments(this.source.hash).subscribe((comments) => {
            this.comments = JSON.parse(comments["_body"]);
            console.log(this.comments);
        });
    }

    public sendComment(comment: string) {
        console.log(comment);
        this.commentService.postComment(this.source.hash, "", comment).subscribe(() => {
            
        });
    }
}