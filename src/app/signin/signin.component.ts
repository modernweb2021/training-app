import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { NgForm } from '@angular/forms';
import { SignInData } from '../model/signin.model';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  showPassword: boolean = false;
  signInData: SignInData = {
    email: '',
    password: ''
  };
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

  submitSignInForm(form: NgForm) {
    console.log(form);
    console.log(this.signInData);
    // call api
    form.reset();
  }

  clear(form: NgForm) {
    form.reset();
  }
}
