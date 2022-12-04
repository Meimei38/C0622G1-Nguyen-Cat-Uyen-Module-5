import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, ValidationErrors, ValidatorFn, Validators} from "@angular/forms";

export const reconfirmPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  if (password && confirmPassword && password.touched && confirmPassword.touched && password.value !== confirmPassword.value) {
    return {"reconfirmPassword": true}
  } else {
    return null;
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  rfUser: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.rfUser = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)], Validators.pattern('^\\p{Lu}\\p{Ll}+(\\s\\p{Lu}\\p{Ll}+)*$')],
      age: ['', [Validators.required, Validators.min(18), Validators.max(100)]],
      gender: [0],
      country: ['Viet Nam', [Validators.required]],
      phone: ['', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')]],
      email: ['', [Validators.required, Validators.pattern('^^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$')]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    }, {validators: reconfirmPassword})
  }

  onSubmit() {
    if (this.rfUser.valid) {
      console.log(this.rfUser.value);
    }
  }

}
