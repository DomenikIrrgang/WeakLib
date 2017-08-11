import { WeakauraVersion } from "./weakauraversion";

export class Weakaura {
    name: string;
    author: string;
    uploadTime: number;
    hash: string;
    description: string;
    profilePicture: string;
    strings: WeakauraVersion[];
    images: string[];
}