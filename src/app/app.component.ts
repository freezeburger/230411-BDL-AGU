import { Component, Inject } from '@angular/core';
import { MessageService } from './services/message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    // @Inject(MessageService) public srv: MessageService
    public srv: MessageService
  ) { }

}
