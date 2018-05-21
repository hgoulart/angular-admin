import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'user-detail',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public users = [];
  id: any;
  sub: any;
  user: any = {
    id: "",
    name: "",
    email: "",
    profile: [{id: "", name: ""}]
  };
  
  constructor(private userService: UserService, private route: ActivatedRoute) { }

  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      if(this.id){
        this.user = this.userService.getUser(this.id);
      }
      
    })

  }

}
