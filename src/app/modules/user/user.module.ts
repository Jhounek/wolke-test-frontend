import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    EditUserComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
