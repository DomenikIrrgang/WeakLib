import { Injectable } from '@angular/core';
import {COMMENTS} from '../mockdata/comment';
import {Comment}  from '../util/comment';

@Injectable()
export class CommentService {
    getComment(): Promise<Comment[]>{
        return Promise.resolve(COMMENTS);
    }
}