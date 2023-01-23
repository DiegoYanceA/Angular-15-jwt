import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faLock, faUser, faEye, faEyeSlash, faPen, faAt } from '@fortawesome/free-solid-svg-icons';
import {Title} from "@angular/platform-browser";

class LevelPassword {
  public level: number;
  public name: string;
  public color: string;
  public progress: string;

  constructor(level:number, name:string, color:string, progress:string){
    this.level = level;
    this.color = color;
    this.name = name;
    this.progress = progress;
  }
}
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

  public readonly minLengthAccount:number = 8;
  public readonly maxLengthAccount:number = 16;

  public readonly maxLengthName:number = 50;
  public readonly maxLengthEmail:number = 50;

  /* Level password
    1: Only letters or Only letters or uppercase letters
    2: Letters and numbers, or Letters and uppercase letters
    3: Letters, numbers and uppercase letters
    4: Letters, numbers, uppercase letters and special characters
  */
  public readonly levelPassword:LevelPassword [] = [];
  
  public showPassword:boolean = false;
  public currentLevelPassword = 0;
  public formLogin:FormGroup;

  constructor(private formBuilder:FormBuilder, private titleService:Title){
    this.titleService.setTitle("Sign up");

    this.formLogin = this.formBuilder.group({
      name: [null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(this.maxLengthName),
          Validators.pattern(/^[a-zA-Z\s]*$/)
        ]
      ],
      lastname: [null,
        [
          Validators.required,
          Validators.minLength(1),
          Validators.maxLength(this.maxLengthName),
          Validators.pattern(/^[a-zA-Z\s]*$/)
        ]
      ],
      email: [null,
        [
          Validators.required,
          Validators.email,
          Validators.maxLength(this.maxLengthEmail),
          Validators.pattern(/^[^\s]*$/)
        ]
      ],
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

    this.levelPassword = [
      new LevelPassword(1, "Weak", "bg-danger", "w-25"),
      new LevelPassword(1, "Regular", "bg-info", "w-50"),
      new LevelPassword(1, "Strong", "bg-warning", "w-75"),
      new LevelPassword(1, "Unhackable", "bg-success", "w-100")
    ]
  }

  public changeLevelPassword(): Boolean {
    if(this.formLogin.get('password')?.value != null && this.minLengthAccount <= this.formLogin.get('password')?.value.length){
      
      var password = this.formLogin.get('password')?.value;

      // Level 1
      var level = new RegExp(/(^[a-z]*|^[0-9]*|^[A-Z]*|^[\W]*)$/);
      if(level.test(password)){
        this.currentLevelPassword = 0;
        return true;
      } 
      
      // Level 2
      level = new RegExp(/(^[a-z0-9]*|^[A-Z0-9]*|^[a-zA-Z]*|^[a-z\W]*|^[A-Z\W]*|^[0-9\W]*)$/);
      if(level.test(password)){
        this.currentLevelPassword = 1;
        return true;
      }

      // Level 3
      level = new RegExp(/(^[a-z0-9A-Z]*|^[A-Z0-9\W]*|^[a-zA-Z\W]*|^[a-z0-9\W]*)$/);
      if(level.test(password)){
        this.currentLevelPassword = 2;
      } 
      
      if (/[a-z]/.test(password) && /[A-Z]/.test(password) && /[0-9]/.test(password) && /\W/.test(password)) {

        // Level 4
        this.currentLevelPassword = 3;
      }

      return true;
    }
    return false;
  }

  public showRulesToPassword():string[] {
    var rules:string[] = [
      "At least one lowercase letter",
      "At least one uppercase letter",
      "At least one number",
      "At least one special characteres"
    ];

    var result:string[] = [];

    if(this.formLogin.get('password')?.value != null && this.minLengthAccount <= this.formLogin.get('password')?.value.length){
      var password = this.formLogin.get('password')?.value;

      if (!/[a-z]/.test(password)) {
        result.push(rules[0]);
      }

      if (!/[A-Z]/.test(password)) {
        result.push(rules[1]);
      }

      if (!/[1-9]/.test(password)) {
        result.push(rules[2]);
      }

      if (!/[\W]/.test(password)) {
        result.push(rules[3]);
      }
    }

    return result;
  }
}
