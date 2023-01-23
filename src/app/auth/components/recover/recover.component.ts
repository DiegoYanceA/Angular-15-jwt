import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { faAt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recover',
  templateUrl: './recover.component.html',
  styleUrls: ['./recover.component.scss']
})
export class RecoverComponent {
  //#region Icons
  faAt = faAt;
  //#endregion Icons

  public readonly maxLengthEmail:number = 50;

  public formRecover:FormGroup;

  constructor(private formBuilder:FormBuilder, private titleService:Title){
    this.titleService.setTitle("Sign up");

    this.formRecover = this.formBuilder.group({
      email: [null,
        [
          Validators.required,
          Validators.pattern(/^[^\s]*$/),
          Validators.email,
          Validators.maxLength(this.maxLengthEmail),
          
        ]
      ]
    })

  }

}
