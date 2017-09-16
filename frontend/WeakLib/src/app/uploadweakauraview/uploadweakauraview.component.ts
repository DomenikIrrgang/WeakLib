import { Component, OnInit, ViewChild } from '@angular/core';
import { ImageUploadService } from "../services/imageupload.service";
import { Weakaura } from "../util/weakaura";
import { Globals } from "../util/globals";
import { WeakauraService } from "../services/weakaura.service";

@Component({
    selector: 'uploadweakaura',
    templateUrl: 'uploadweakauraview.component.html',
    styleUrls: ["uploadweakauraview.component.css"]
})

export class UploadWeakauraViewComponent {
    @ViewChild('descriptionElement') descriptionElement;
    @ViewChild("image") image;
    name: string = "";
    description: string = "";
    string: string = "";
    version: string = "";
    categories: string[] = [];

    constructor(private imageUploadService: ImageUploadService, private weakauraService: WeakauraService) { }

    textAreaAdjust() {
        this.descriptionElement.nativeElement.style.height = "1px";
        this.descriptionElement.nativeElement.style.height = (1 + this.descriptionElement.nativeElement.scrollHeight) + "px";
    }

    upload() {
        if (this.image.files.length > 0) {
            this.imageUploadService.uploadImages(this.image.files).subscribe(function (data) {
                var response = JSON.parse(data._body);
                if (response[0].error === "OK") {
                    let weakaura: Weakaura = new Weakaura();
                    weakaura.description = this.description;
                    weakaura.name = this.name;
                    weakaura["string"] = this.string;
                    weakaura["version"] = this.version;
                    weakaura.profilePicture = response[0].url;
                    weakaura.user = Globals.authenticatedUser;
                    weakaura["categories"] = this.categories;
                    this.weakauraService.uploadWeakaura(weakaura).subscribe(function (data) {
                        console.log(data._body);
                    });
                } else {
                    console.log(response);
                }
            }.bind(this));
        }
    }

    categoriesChanged(categories) {
        this.categories = categories;
    }
}