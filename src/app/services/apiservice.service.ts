import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx'

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class APIServiceService {

  constructor(private http:Http) {
  this.getData()
  .subscribe(result => this.userlist = result);
}

getData(){

  return this.http
  .get('https://jsonplaceholder.typicode.com/users')
  .map(result => result.json())
  .catch(error => Observable.throw(error.json().error)|| "Server Error");

}

 userlist : Object[]

// adduserlist(obj:object):object[]
//   {
//     this.userlist.push(obj);
//     console.log(this.userlist);
//     return this.userlist;
//
//   }



}
