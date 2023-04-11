import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent {

  @Input() public disabled = false;
  @Input() public actionLabel = 'Action Text';
  @Input() public cancelLabel = 'Cancel Text';

  @Output() public action = new EventEmitter();
  @Output() public cancel = new EventEmitter();
}
