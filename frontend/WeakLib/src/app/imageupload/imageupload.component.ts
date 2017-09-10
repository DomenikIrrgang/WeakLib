import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'imageupload',
    templateUrl: 'imageupload.component.html',
    styleUrls: ["imageupload.component.css"],
})

export class ImageUploadComponent implements OnInit {
    @Input()
    multiple: boolean = false;
    caption: string = "Upload";
    files: string[] = [];

    constructor() { }

    ngOnInit() { }

    filesChanged(event: any) {
        if (event.target.files.length == 1) {
            this.caption = event.target.files[0].name;
        }
        if (event.target.files.length > 1) {
            this.caption = event.target.files.length + " files selected";
        }
        console.log(event.target.files);
    }
}