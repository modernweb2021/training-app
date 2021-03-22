import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import { User } from '../model/signin.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userToEdit: User;
  userEditing: boolean = false;
  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.fetchLoggedInUser().subscribe(
      (data) => {
        console.log('logged User data: ', data);
        this.userService.saveLoggedUser(data['user']);
      }, (error) => {
        console.log(error);
        this.userService.logoutUser();
      }
    )
  }

  editUser() {
    this.userEditing = true;
    this.userToEdit = {
      ...this.userService.loggedUser
    };
  }

  updateUser() {
    this.userEditing = false;
    this.userService.updateUser(this.userToEdit).subscribe(
      (data) => {
        console.log('updated user data: ', data);
        this.userService.saveLoggedUser(data['data']);
      }, (error) => {
        console.log(error);
      }
    )
  }
}
