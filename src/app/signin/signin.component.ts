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
  signInData: SignInData = {
    email: '',
    password: ''
  };
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
  }

}