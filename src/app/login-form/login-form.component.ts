import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent {

  @Input() email = '';
  @Output() emailChange = new EventEmitter();

  @Input() password ='';
  @Output() passwordChange = new EventEmitter();

}
