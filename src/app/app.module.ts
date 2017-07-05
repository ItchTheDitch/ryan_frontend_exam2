import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from'@angular/http';

import { APIServiceService } from './services/apiservice.service'

import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AdduserComponent } from './adduser/adduser.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    AdduserComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    { path: '', component: UserlistComponent },
    { path: 'adduser', component: AdduserComponent },
  ]),
  FormsModule,
  HttpModule
  ],
  providers: [APIServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
