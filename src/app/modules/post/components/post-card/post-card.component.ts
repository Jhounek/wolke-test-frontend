import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PostModel, typePost } from 'src/app/core/models/post.model';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css']
})
export class PostCardComponent {

  @Input() postData?: typePost[];
  onePost:typePost = {};
  @Output() postEvent = new EventEmitter<typePost>();

  constructor(
    private postService: PostService,
  ){

  }

  deletePost(id:number|undefined):void {
    this.postService.dropPost(id).subscribe(result =>{
      console.log(result);
      window.location.reload();
    },
    err => {
      console.log('Error deleting post');
    }
    )
  }

  sendPostEdit(post:typePost){
    this.onePost = post;
    this.postEvent.emit(this.onePost);
  }

}
