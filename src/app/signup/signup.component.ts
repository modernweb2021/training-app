import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

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
        Validators.minLength(2)
      ]),
      email: new FormControl('',  Validators.required),
      password: new FormControl('',  Validators.required)
    }
  )
  constructor() { }

  ngOnInit(): void {
  }
  submitSignUpform() {
    console.log(this.signUpForm);
  }
}

function nameValidation(control: FormControl) {
  console.log(control.value);
  let nameValid = (control.value).toLowerCase() !== 'admin';
  console.log('nameValid: ', nameValid);
  if(nameValid) {
    return null;
  } else {
    return {
      invalidName: true
    }
  }
}
