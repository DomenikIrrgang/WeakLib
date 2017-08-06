import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../util/Comment';
import { CommentService } from "../../services/comment.service";
import { Weakaura } from "../../util/weakaura";

@Component({
    selector: 'comments',
    templateUrl: 'comments.component.html',
    styleUrls: ['comments.component.css'],
})

export class CommentsComponent implements OnInit {
    comments: Comment[];
    @Input() weakaura: Weakaura;

    constructor(private commentService: CommentService) { }

    ngOnInit() { 
        this.commentService.getComments(this.weakaura).then(comments => this.comments = comments);
    }

    sendComment(): void {

    }
}