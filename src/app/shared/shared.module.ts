import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderUserComponent } from './components/header-user/header-user.component';



@NgModule({
  declarations: [
    HeaderUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderUserComponent
  ]
})
export class SharedModule { }
