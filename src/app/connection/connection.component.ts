import { Component } from '@angular/core';

@Component({
  selector: 'app-connection',
  templateUrl: './connection.component.html',
  styleUrls: ['./connection.component.scss']
})
export class ConnectionComponent {

  credentials = {
    email:'A',
    password:'B'
  }

  login(){}
  cancel(){}
}
