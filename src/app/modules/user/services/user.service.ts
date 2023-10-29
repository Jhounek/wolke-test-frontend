import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { UserData, UserModel} from 'src/app/core/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private readonly URL = environment.api;

  constructor(
    private http:HttpClient,
    private cookie: CookieService
  ) { }

  storeUser(){

  }

  findUser():Observable<UserData>{
    return this.http.get<UserData>(`${this.URL}/v1/usuarios/${this.cookie.get('user_id')}`);
  }

  updateUser(obj:UserModel):Observable<UserModel>{
    return this.http.put<UserModel>(`${this.URL}/v1/usuarios/${this.cookie.get('user_id')}`, obj);
  }
}
