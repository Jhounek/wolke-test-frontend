import { Component } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';
import { UserModel } from 'src/app/core/models/user.model';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent {

  formUser: UntypedFormGroup = new UntypedFormGroup({});

  constructor(
    private userService: UserService,
  ){
    this.formUser = new UntypedFormGroup(
      {
        name: new UntypedFormControl('', [
          Validators.required,
        ]),
        email: new UntypedFormControl('',[
            Validators.required,
        ]),
        password: new UntypedFormControl('',[
          Validators.required,
        ])
      });
  }

  ngOnInit(): void {
    this.getUserInfo();
  }

  getUserInfo(){
    this.userService.findUser().subscribe(result =>{
      const {name,email} = result.data;
      this.formUser.setValue({name,email,password:''});
    },
    err => {
      console.log('Error getting info about current User');
    });
  }

  updateUserInfo(){
    const {name,email,password} = this.formUser.value;
    let objRequest:UserModel = {name,email,password}
    this.userService.updateUser(objRequest).subscribe(result =>{
      this.formUser.reset();
      console.log(result);
      window.location.reload();
    },
    err => {
      console.log('Error updating the User');
    }
    )}

}
