import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header-user',
  templateUrl: './header-user.component.html',
  styleUrls: ['./header-user.component.css']
})
export class HeaderUserComponent {

  constructor(
    private cookie: CookieService,
    private router: Router
  ){

  }

  closeSession(){
    this.cookie.deleteAll();
    window.location.reload();
  }

  goToProfile(){
    this.router.navigate(['/', 'edit-profile']);
  }
}
