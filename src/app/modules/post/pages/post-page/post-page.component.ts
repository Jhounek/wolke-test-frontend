import { Component } from '@angular/core';
import { PostService } from '../../services/post.service';
import { PostModel, typePost } from 'src/app/core/models/post.model';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent {

  userPost?: typePost[];
  formPost: UntypedFormGroup = new UntypedFormGroup({});
  isUpdate:boolean = false;
  currentId:number|undefined = 0;


  constructor(
    private postService: PostService,
    private cookie: CookieService
  ){
    this.loadAllPost();
  }

  ngOnInit(): void {
    this.formPost = new UntypedFormGroup(
      {
        title: new UntypedFormControl('', [
          Validators.required,
        ]),
        description: new UntypedFormControl('',[
            Validators.required,
        ]),
        image: new UntypedFormControl('',[
          Validators.required,
        ])
      }
    )
  }

  loadAllPost():void{
    this.postService.getAllPost().subscribe(result =>{
        this.userPost = result.data;
    },
    err => {
      console.log('Error getting Post');
    }
    );
  }

  checkOperation(){
    const { title, description,image } = this.formPost.value;
    const owner_id = this.cookie.get('user_id')
    let objRequest = {title, description, image, owner_id }
    if(this.isUpdate){
      this.UpdatePost(objRequest);
    }else{
      this.createPost(objRequest);
    }
  }

  createPost(objRequest:typePost):void{
    this.postService.makePost(objRequest).subscribe(result =>{
      this.formPost.reset();
      window.location.reload();
    },
    err => {
      console.log('Error creating the Post');
    }
    );
  }

  UpdatePost(objRequest:typePost):void{
    this.postService.updatePost(this.currentId, objRequest).subscribe(result =>{
      this.formPost.reset();
      console.log(result);
      window.location.reload();
    },
    err => {
      console.log('Error updating the Post');
    }
    )
    this.isUpdate=false;
  }

  receivePost(post:typePost){
    const {id, title, description,image } = post;
    this.formPost.setValue({title,description, image});
    this.currentId = id;
    this.isUpdate = true;
  }

}
