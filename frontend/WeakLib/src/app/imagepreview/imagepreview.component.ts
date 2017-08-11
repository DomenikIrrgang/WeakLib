import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'imagepreview',
    templateUrl: 'imagepreview.component.html',
    styleUrls: ['imagepreview.component.css'],
})

export class ImagePreviewComponent implements OnInit {
    @Input()
    imageURLs: string[];
    currentImage: number = 0;
    isVisible: boolean = false;

    constructor() { }

    ngOnInit() { }

    open(): void {
        this.isVisible = true;
    }

    close(): void {
        this.isVisible = false;
    }

    nextImage(): void {
        this.currentImage++;
        if (this.currentImage > this.imageURLs.length - 1) {
            this.currentImage = 0;
        }
    }

    previousImage() {
        console.log(this.currentImage);
        if (this.currentImage <= 0) {
            this.currentImage = this.imageURLs.length - 1;
        } else {
            this.currentImage--;
        }
    }
}