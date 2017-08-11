import { WeakauraVersion } from "./weakauraversion";

export class Weakaura {
    name: string;
    author: string;
    uploadTime: number;
    updateTime: number;
    hash: string;
    description: string;
    profilePicture: string;
    strings: WeakauraVersion[];
    images: string[];
}