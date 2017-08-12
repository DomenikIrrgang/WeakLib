import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Comment } from '../../util/comment';
import { CommentService } from "../../services/comment.service";
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

    constructor(private commentService: CommentService, private time: Time) { }

    ngOnInit() {
        this.commentService.getComments(this.source).then(comments => this.comments = comments);
    }

    sendComment(): void {

    }

    textAreaAdjust() {
        this.comment.nativeElement.style.height = "1px";
        this.comment.nativeElement.style.height = (1 + this.comment.nativeElement.scrollHeight) + "px";
    }
}