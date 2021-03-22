import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { NgForm } from '@angular/forms';
import { SignInData } from '../model/signin.model';
import { UserService } from '../service/user.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  error: string;
  showPassword: boolean = false;
  signInData: SignInData = {
    email: '',
    password: ''
  };
  constructor(private route: ActivatedRoute,
    private userService: UserService,
    private router: Router) {
  }

  ngOnInit(): void {
  }

  submitSignInForm(form: NgForm) {
    this.error = '';
    console.log(form);
    console.log(this.signInData);
    // call api
    this.userService.signIn(this.signInData).subscribe(
      (data) => {
        console.log(data);
        this.userService.setToken(data['token']);
        this.router.navigate(['/home']);
      }, (error) => {
        console.log(error);
        console.log(error.status);
        if(error && error.status === 401) {
          this.error = 'Invalid login credentials';
        }
      }
    );
    // console.log('signInSubmission : ', signInSubmission);
    // if(signInSubmission.error) {
    //   this.error = signInSubmission.error;
    // } else if (signInSubmission.success) {
    //   // redirect to a home/dasboard page
    //   this.router.navigateByUrl('/home');
    // }

    //form.reset();
  }

  clear(form: NgForm) {
    form.reset();
  }
}
