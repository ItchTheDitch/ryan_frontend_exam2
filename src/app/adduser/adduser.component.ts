import { Component, OnInit } from '@angular/core';
import {APIServiceService} from '../services/apiservice.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit {
  newName:string ="";
  newEmail:string ="";
  newAdress:string ="";
  newCompanyName:string = "";

  constructor(private api:APIServiceService) { }

  ngOnInit() {
  }




  // adduser(){
  //   this.api.adduserlist({
  //     "name":this.newName,
  //     "email":this.newName,
  //     "adress":this.newAdress,
  //     "company":this.newCompanyName,
  //   });
  // }

}
