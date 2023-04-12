import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  public messages:any = [];

  constructor(private http:HttpClient) {}

  public getData(){
    this.http.get('http://localhost:5050/messages')
             .subscribe( data => this.messages = data );
  }

  public sendData( message = { text:'Default Text', date:Date.now() } ){

    this.http.post('http://localhost:5050/messages', message )
             .subscribe( data => this.messages.push(data) );
  }

  public reset(){
    this.messages = [];
  }
}
