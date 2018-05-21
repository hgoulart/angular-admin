import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-form',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formData: FormGroup;
  title: string = 'Sign in';
  showLoading: Boolean = false;

  constructor(private router: Router, private userService: UserService,) {

   }

  ngOnInit() {

    console.log(this.userService.getProfile());
    this.formData = new FormGroup({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      password: new FormControl('', [
        Validators.minLength(4),
        Validators.required
      ])
    });
    
  }
  onSubmit(data){

    this.userService.setProfile(undefined);
    this.showLoading = true;

    let loginData = this.userService.getLoginData(data.email);
    console.log(data);
    console.log(loginData);
    
    if( loginData.id !== null ){
      setTimeout(()=>{
        this.showLoading = false;
        this.userService.setProfile(loginData.profile[0].id);
        console.log(loginData);
        this.router.navigate(['/users/list']);

      }, 2000)
 
    }else{
      setTimeout(()=>{
        this.showLoading = false;
        alert("Senha inválida!");
      }, 2000)
      
    }
    
  }

}
