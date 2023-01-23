import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faLock, faUser, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import {Title} from "@angular/platform-browser";

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
  
  public readonly minLengthAccount:number = 8;
  public readonly maxLengthAccount:number = 16;
  
  public showPassword:boolean = false;
  public formLogin:FormGroup;

  constructor(private formBuilder:FormBuilder, private titleService:Title){
    this.titleService.setTitle("Login");
    
    this.formLogin = this.formBuilder.group({
      username: [null,
        [
          Validators.required,
          Validators.minLength(this.minLengthAccount),
          Validators.maxLength(this.maxLengthAccount),
          Validators.pattern(/^[a-z]+[a-z0-9_.]*$/),
          Validators.pattern(/^[^\s]*$/)
        ]
      ],
      password: [null,
        [
          Validators.required,
          Validators.minLength(this.minLengthAccount),
          Validators.maxLength(this.maxLengthAccount),
          Validators.pattern(/^[^\s]*$/)
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
