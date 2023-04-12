import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-edition',
  templateUrl: './edition.component.html',
  styleUrls: ['./edition.component.scss']
})
export class EditionComponent {

  msgText = '';

  constructor(public srv: MessageService) { }

  send() {
    if( this.msgText === '' ) return;
    this.srv.sendData(
      { text: this.msgText, date: Date.now() }
    );
    this.empty();
  }

  empty(){
    this.msgText = '';
  }

}
