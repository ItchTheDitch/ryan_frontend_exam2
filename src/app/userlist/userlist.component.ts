import { Component, OnInit } from '@angular/core';
import {APIServiceService} from '../services/apiservice.service';
import { Router } from '@angular/router';``

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {

  // userlist : object[] = this.api.userlist;
  constructor(private api:APIServiceService ) { }

  ngOnInit() {


  }

  removeuser(name) {
  for (var i = 0; i < this.api.userlist.length; i++) {
    if (this.api.userlist[i]["name"] == name) {
      this.api.userlist.splice(i, 1);
    }
  }
  }

}
