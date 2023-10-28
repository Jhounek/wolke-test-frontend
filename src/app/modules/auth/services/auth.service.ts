import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenModel } from 'src/app/core/models/token.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly URL = environment.api

  constructor(private http: HttpClient) { }

  sendCredentials(email: string, password: string): Observable<TokenModel> {
    const body = {
      email,
      password
    }
    return this.http.post<TokenModel>(`${this.URL}/auth/login`, body)
  }
}
