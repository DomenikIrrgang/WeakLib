import { Component, OnInit, Input } from '@angular/core';
import { ImageUploadService } from "../services/imageupload.service";

@Component({
    selector: 'imageupload',
    templateUrl: 'imageupload.component.html',
    styleUrls: ["imageupload.component.css"],
})

export class ImageUploadComponent implements OnInit {
    @Input()
    multiple: boolean = false;
    caption: string = "Upload";
    uploads: object[] = [];
    files: string[] = [];

    constructor(private imageUploadService: ImageUploadService) { }

    ngOnInit() { }

    filesChanged(event: any) {
        if (event.target.files.length == 1) {
            this.caption = event.target.files[0].name;
            this.imageUploadService.uploadImages(event.target.files).subscribe(function (data) {
                var response = JSON.parse(data._body);
                for (var entry of response) {
                    if (entry.url != "") {
                        this.uploads.push(entry);
                    }
                }                
            }.bind(this));
        }
        if (event.target.files.length > 1) {
            this.caption = event.target.files.length + " files selected";
            this.imageUploadService.uploadImages(event.target.files).subscribe(function (data) {
                var response = JSON.parse(data._body);
                for (var entry of response) {
                    if (entry.url != "") {
                        this.uploads.push(entry);
                    }
                }     
            }.bind(this));
        }
    }
}