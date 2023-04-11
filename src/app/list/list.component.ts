import { Component, Input } from '@angular/core';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Input()
  public messages:any[] = [];

}
