import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faLock, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  //#region Icons
  faLock = faLock;
  faUser = faUser;
  faEye = faEye;
  faEyeSlash = faEyeSlash;
  //#endregion Icons
  
  public readonly minLength:number = 8;
  public readonly maxLength:number = 16;
  
  public showPassword:boolean = false;
  public formLogin:FormGroup;

  constructor(private formBuilder:FormBuilder){
    this.formLogin = this.formBuilder.group({
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

  ngOnInit(): void {
    
  }

  test(a:any){
    console.log(a)
  }
}
