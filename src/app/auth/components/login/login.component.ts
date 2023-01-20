import { Component } from '@angular/core';
import { faLock, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  faLock = faLock;
  faUser = faUser;
  faEye = faEye;
  faEyeSlash = faEyeSlash;

  public showPassword:boolean = false;
}
