import {Component} from '@angular/core';
import { LikeComponent } from './like.component'
import {ZippyComponent} from './zippy.component'
import {CrudComponent} from './crud-table.component'
import {PostService} from './post.service'
import {HttpModule} from '@angular/http'
import {OnInit} from '@angular/core'


@Component({
  selector: 'app',
  template: `
            <router-outlet></router-outlet><like [totalLikes]="tweet.totalLikes" [iLike]="tweet.iLike"></like>
            
        <zippy title="Who can see my stuff?">
            Content of who can see my stuff
        </zippy>
        <zippy title="Who can contact me?">
            Content of who can contact me
        </zippy>
  <crud></crud>
  <div tiny-calendar></div>

  <div *ngIf="isLoading">Getting data...</div>
  `,
  providers: [PostService]

})
export class AppComponent implements OnInit {
    tweet = {
        totalLikes: 10,
        iLike: false
    }
   
   isLoading = true;
    constructor (private _postService: PostService){
        this._postService.createPost({ userId: 1, title:"a", body:"b" }); 
           }

    ngOnInit(){
         this._postService.getPosts()
            .subscribe (posts => {
                this.isLoading = false;
                console.log(posts[0].ID);
                });
    }
}





