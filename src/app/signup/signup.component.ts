import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { emailValidation, passwordValidation } from '../helper/utility';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  showPassword: boolean = false;
  signUpForm: FormGroup = new FormGroup(
    {
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25),
        nameValidation,
      ]),
      lastName: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(25),
        nameValidation,
      ]),
      email: new FormControl('',  [Validators.required, emailValidation]),
      password: new FormControl('', [Validators.required, passwordValidation])
    }
  )
  constructor() { }

  ngOnInit(): void {
  }
  submitSignUpform() {
    console.log(this.signUpForm);
  }

  togglePassword() {
    this.showPassword = !this.showPassword;
  }
  clear() {
    this.signUpForm.reset();
  }

  scroll() {
    window.scrollTo(0,0);
  }
}

function nameValidation(control: FormControl) {
  console.log(control.value);
  if(control.value) {
    let nameValid = (control.value).toLowerCase() !== 'admin';
    console.log('nameValid: ', nameValid);
    if(nameValid) {
      return null;
    } else {
      return {
        invalidName: true
      }
    }
  } else {
    return null;
  }
}


