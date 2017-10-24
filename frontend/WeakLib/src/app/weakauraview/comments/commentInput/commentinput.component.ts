import { Component, Output, OnInit, Input, ViewChild, EventEmitter } from '@angular/core';

@Component({
    selector: 'commentinput',
    templateUrl: 'commentinput.component.html',
    styleUrls: ['commentinput.component.css'],
})
export class CommentInputComponent {

    @ViewChild('comment') comment;
    @Output() commentNotify: EventEmitter<string> = new EventEmitter<string>();

    sendComment(): void {
        this.commentNotify.emit(this.comment.nativeElement.value);
    }

    textAreaAdjust() {
        this.comment.nativeElement.style.height = "1px";
        this.comment.nativeElement.style.height = (1 + this.comment.nativeElement.scrollHeight) + "px";
    }
}