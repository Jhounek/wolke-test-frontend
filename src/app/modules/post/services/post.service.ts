import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PostModel, typePost } from 'src/app/core/models/post.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  private readonly URL = environment.api;


  constructor(
    private http:HttpClient,
    private cookie: CookieService
  ) { }

  getAllPost():Observable<PostModel>{
    return this.http.get<PostModel>(`${this.URL}/v1/post/${this.cookie.get('user_id')}`);
  }

  makePost(obj:typePost):Observable<typePost>{
    return this.http.post<typePost>(`${this.URL}/v1/post`, obj);
  }

  updatePost(id:number|undefined, obj:typePost):Observable<typePost>{
    return this.http.put<typePost>(`${this.URL}/v1/post/${id}`, obj);
  }

  dropPost(idPost:number|undefined):Observable<PostModel>{
    return this.http.delete<PostModel>(`${this.URL}/v1/post/${idPost}`);
  }

}
