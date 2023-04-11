import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public messages:any = [];

  public getData(){
    fetch('http://localhost:5050/messages')
         .then(res => res.json() )
         .then( data => this.messages = data );
  }
}
