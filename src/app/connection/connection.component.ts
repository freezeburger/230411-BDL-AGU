import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent {

  constructor(private auth:AuthService){}

  credentials = {
    email:'',
    password:''
  }

  login(){
    this.auth.login(this.credentials)
  }
  cancel(){
    this.credentials = {
      email:'',
      password:''
    }
  }
}
