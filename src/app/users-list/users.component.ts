import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { PageEvent, MatTableDataSource } from '@angular/material';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'users-list',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  displayedColumns = [ 'id', 'name', 'email', 'profile', 'detail' ];
  dataSource;
  userData: FormGroup;
  data;
  showLoading: Boolean = false;
  profiles: any;
  selectedId: string;
  admin: boolean = false;

  constructor( private userService: UserService) { }

  ngOnInit() {
    const profile = this.userService.getProfile();
    console.log(profile);
    this.admin = this.userService.checkProfile(profile);
    
    console.log(profile);
    this.userData = new FormGroup({

      name: new FormControl('', {
        validators: Validators.required,
        updateOn: 'change'
      }),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      profile: new FormControl('', {
        validators: Validators.required,
        updateOn: 'change'
      }),
    });
    
    this.profiles = [
      {id: 1, value: 'admin' },
      {id: 2, value: 'user' }
    ];
    this.loadUsers();
  }

  addUser(data){

    this.showLoading = true;

      setTimeout(()=>{
        this.userService.addUser(data);
        this.loadUsers();
        this.showLoading = false;
        this.selectedId = '';

        this.userData.reset();
        
        Object.keys(this.userData.controls).forEach(key => {
          this.userData.controls[key].setErrors(null);
          this.userData.controls[key].markAsPristine();
        });
      }, 2000)
  
  }

  loadUsers(){
    
    this.data = this.userService.getUsers();
    this.updateTableData(this.data);
  }

  private updateTableData(data: any[]) {
    this.dataSource = data && data.length ? new MatTableDataSource(data) : new MatTableDataSource([]);
    this.showLoading = false;
  }
  // onRowClicked(row) {
  //   console.log('Row clicked: ', row);
  // }
  userClicked(user){
    // console.log(user);
  }
}

export interface Users {
  name: string;
  id: number;
  email: string;
  profile: string;
}

