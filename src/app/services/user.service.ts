import { ChangeDetectorRef, Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { user } from '../models/user';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(public request:ApiService) { }
  //variable
  cd:any;
  instance:any = this;
  user:any;
  client:string="";
  token:string="";
  setCD(cd:any){
    this.cd = cd;
  }
  //methods
  public doLogin(){
    (<any>window).google.accounts.id.initialize({
      client_id: environment.client_id,
      callback: this.userLogin.bind(this)
    });  
    (<any>window).google.accounts.id.prompt();
    (<any>window).google.accounts.id.renderButton(
        document.getElementById("sso"),
        { theme: 'outline', size: 'large' }
      );
  }
  userLogin(detail:any){
    this.client = detail.clientId;
    this.token = detail.credential;
    this.request.get(`validateUser/${this.client}/${this.token}`).subscribe((res:any)=>{
      this.user = (JSON.parse(JSON.stringify(res)));
      this.cd.detectChanges();
    })
  }
  getUser(){
    return this.user;
  }
  feeds:any = [
    
  ]
}
