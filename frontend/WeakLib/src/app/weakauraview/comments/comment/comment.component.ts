import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Comment } from '../../../util/comment';
import { Time } from "../../../util/time";

@Component({
    selector: 'comment',
    templateUrl: 'comment.component.html',
    styleUrls: ['comment.component.css'],
})

export class CommentComponent {
    @Input() comment: Comment;

    constructor(private time: Time) { }
}