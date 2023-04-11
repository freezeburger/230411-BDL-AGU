import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  public messages:any = [];

  public getData(){
    fetch('http://localhost:5050/messages')
         .then(res => res.json() )
         .then( data => this.messages = data );
  }
}
