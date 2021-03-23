import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { User } from '../model/signin.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[] = [];
  error: string;
  success: string;
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
    if(this.userService.loggedUser && this.userService.loggedUser['userType']!=='admin'){
      this.router.navigate(['/home']);
    }
  }

  getUsers() {
    this.userService.fetchUserList().subscribe(
      (data) => {
        console.log(data);
        this.users = data['users'];
        console.log(this.users);
      }, (error) => {
        console.log(error);
      }
    );
  }

  deleteUser(email) {
    console.log('email: ', email);
    this.error = this.success = '';
    this.userService.deleteUser(email).subscribe(
      (data) => {
        this.success = `User with email ${email} got deleted`;
        this.getUsers();
      }, (error) => {
        console.log(error);
        this.error = 'Deleting user is unsuccessful';
      }
    )
  }

}
