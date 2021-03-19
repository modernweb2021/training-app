import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { emailValidation, passwordValidation } from '../helper/utility';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  error: string;
  success: string;
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
      password: new FormControl('', [Validators.required, passwordValidation]),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl('')
      }),
      phoneNumber: new FormControl('', [
        Validators.required
      ])
    }
  )
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  submitSignUpform() {
    this.error = this.success = '';
    console.log(this.signUpForm);
    let submission = this.userService.signUp(this.signUpForm.value);
    console.log('submission: ', submission);
    if(submission.error) {
      this.error = submission.error;
    } else if (submission.success) {
      this.success = submission.success;
      this.signUpForm.reset();
    }
    this.scroll();
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
  if(control.value) {
    let nameValid = (control.value).toLowerCase() !== 'admin';
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


