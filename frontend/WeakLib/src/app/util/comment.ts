import { User } from "./user";

export class Comment {
    user: User;
    text: String;
    created: number;
    comments: Comment[];
}