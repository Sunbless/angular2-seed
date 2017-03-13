import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map';
import {Injectable} from '@angular/core';
import {Post} from './post'

@Injectable()
export class PostService {

    private _url = 'https://jsonplaceholder.typicode.com/users';

    constructor(private _http:Http){

    }
    getPosts() : Observable<Post[]> {
        return this._http.get(this._url)
        .map(res=>res.json());        
            }
    createPost(post:Post){
        return this._http.post(this._url, JSON.stringify(post))
            .map(res=>res.json());
    }

}