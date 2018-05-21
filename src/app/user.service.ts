import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  usersList: ILogin[];
  usersListTemp: ILogin[];
  user: ILogin;
  email: any;
  profile: string;

  constructor(private router: Router,) { 

    this.usersListTemp = [
      { 
        id: 1, 
        name: "João", 
        email: "joao@email.com",
        password: 1234,
        profile: [
          {id: 1, type: 'admin'}
        ] 
      },
      { 
        id: 2, 
        name: "José", 
        email: "jose@email.com",
        password: 1234,
        profile: [
          {id: 2, type: 'user'}
        ] 
      },
      { 
        id: 3, 
        name: "Maria", 
        email: "maria@email.com",
        password: 1234,
        profile: [
          {id: 2, type: 'user'}
        ] 
      },
      { 
        id: 4, 
        name: "Joana", 
        email: "joana@email.com",
        password: 1234,
        profile: [
          {id: 2, type: 'user'}
        ] 
      },
      { 
        id: 5, 
        name: "Hingo", 
        email: "hingo@gmail.com",
        password: 1234,
        profile: [
          {id: 1, type: 'admin'}
        ] 
      }
    ]
    // localStorage.removeItem('usersList');
    if(localStorage.getItem('usersList') === null){
      this.usersList = this.usersListTemp;
    }else{
      this.usersList = JSON.parse(localStorage.getItem('usersList'));
    }

  }

  getUsers(){
    return this.usersList;
  }

  getUser(id){
    
    this.usersList.filter( (e) => {

      if(e.id == id){
        this.user = e;
      };
      
    } )[0];
    return this.user;
  }

  getLoginData(email){

    this.user = {  
      id: null,
      name: '',
      email: '',
      password: null,
      profile: [
        {id: null, type: ''}
      ] 
    }
    
    this.usersList.filter( (e) => {

      if(e.email == email){
        this.user = e;
        console.log(this.user);
      };
      
    } )[0];

    return this.user;
  }

  addUser(user){
    user.id = this.usersList.length+1;
    if(user == '1'){
      user.profile = [
        {id: 1, type: 'admin'}
      ] ;
    }else{
      user.profile = [
        {id: 2, type: 'user'}
      ] ;
    }

    this.usersList.push(user);
    localStorage.setItem('usersList', JSON.stringify(this.usersList));
  }
  getProfile(){
    return this.profile;
  }
  setProfile(profile){
    this.profile = profile;
  }

  checkProfile(profile){
    if(profile !== undefined){
      if(profile == '1'){
        return true;
      }else{
        return false;
      }
    }else{
      this.router.navigate(['/login']);
    }
  }
}
export interface ILogin{
  id: number;
  name: string; 
  email: string;
  password: number;
  profile: [
    {id: number, type: string}
  ] 
}