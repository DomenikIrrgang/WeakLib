import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'imagepreview',
    templateUrl: 'imagepreview.component.html',
    styleUrls: ['imagepreview.component.css'],
})

export class ImagePreviewComponent implements OnInit {
    @Input()
    images: any;
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
        if (this.currentImage > this.images.length - 1) {
            this.currentImage = 0;
        }
    }

    previousImage() {
        if (this.currentImage <= 0) {
            this.currentImage = this.images.length - 1;
        } else {
            this.currentImage--;
        }
    }
}