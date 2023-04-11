import { Component } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {
  constructor(
    // @Inject(MessageService) public srv: MessageService
    public srv: MessageService
  ) { }

}
