import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faLock, faUser, faEye, faEyeSlash, faPen, faAt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  //#region Icons
  faLock = faLock;
  faUser = faUser;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  faPen = faPen;
  faAt = faAt;
  //#endregion Icons

  public readonly minLength:number = 8;
  public readonly maxLength:number = 16;
  
  public showPassword:boolean = false;
  public formLogin:FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.formLogin = this.formBuilder.group({
      name: [null,
        [
          Validators.required,
          Validators.minLength(this.minLength),
          Validators.maxLength(this.maxLength),
          Validators.pattern(/^[a-z]+[a-z1-9_.]*$/)
        ]
      ],
      lastname: [null,
        [
          Validators.required,
          Validators.minLength(this.minLength),
          Validators.maxLength(this.maxLength),
          Validators.pattern(/^[a-z]+[a-z1-9_.]*$/)
        ]
      ],
      email: [null,
        [
          Validators.required,
          Validators.minLength(this.minLength),
          Validators.maxLength(this.maxLength),
          Validators.pattern(/^[a-z]+[a-z1-9_.]*$/)
        ]
      ],
      username: [null,
        [
          Validators.required,
          Validators.minLength(this.minLength),
          Validators.maxLength(this.maxLength),
          Validators.pattern(/^[a-z]+[a-z1-9_.]*$/)
        ]
      ],
      password: [null,
        [
          Validators.required,
          Validators.minLength(this.minLength),
          Validators.maxLength(this.maxLength),
          Validators.pattern(/^[a-z]+[a-z1-9_.]*$/)
        ]
      ]
    })
  }
}
