import { Injectable, EventEmitter } from '@angular/core';
import {User, SignInData} from '../model/signin.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
// import
@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: User[] = this.getUsers();
  loggedUser: User = this.getLoggedUser();
  baseURL = 'http://localhost:3000/users';
  constructor(private http: HttpClient, private router: Router) {
  }

  signIn(signInData: SignInData) {

    return this.http.post(this.baseURL+'/login', signInData);
    // let existingUser = this.checkExistingUser(signInData);
    // if (existingUser) {
    //   if(signInData.password === existingUser.password) {
    //     this.loggedUser = existingUser;
    //     this.saveLoggedUser(this.loggedUser);
    //     return {
    //       success: 'Signin success'
    //     }
    //   } else {
    //     return {
    //       error: 'invalid credentials'
    //     }
    //   }
    // } else {
    //   return {
    //     error: 'invalid credentials'
    //   }
    // }
  }

  signUp(newUser: User) {
    console.log('posting: ', newUser);
    return this.http.post(this.baseURL, newUser);
    // let existingUser = this.checkExistingUser(newUser);
    // if (existingUser) {
    //   return {
    //     error: 'User already exists'
    //   };
    // } else {
    //   this.users = this.getUsers();
    //   this.users.push(newUser);
    //   this.saveUsers();
    //   return {
    //     success: 'User registration success'
    //   };
    // }
  }

  updateUser(userToUpdate: User) {

    return this.http.put(this.baseURL+'/'+userToUpdate.email, userToUpdate, {
      headers: {
        'Authorization' : this.getToken()
      }
    });
    // let users = this.getUsers();
    // let index = users.findIndex((user) => {
    //   return user.email === userToUpdate.email;
    // });
    // users[index] = this.loggedUser = userToUpdate;
    // this.users = users;
    // this.saveLoggedUser(userToUpdate);
    // this.saveUsers();
  }

  saveUsers() {
    localStorage.setItem('users', JSON.stringify(this.users));
    console.log('saved users: ', this.users);
  }

  getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
  }

  checkExistingUser(userTest: any) {
    return this.getUsers().find((user) => {
      return user.email === userTest.email;
    });
  }

  saveLoggedUser(user: User) {
    this.loggedUser = user;
    localStorage.setItem('loggedUser', JSON.stringify(user));
  }

  getLoggedUser(){
    let loggedUser = JSON.parse(localStorage.getItem('loggedUser'));
    return loggedUser || null;
  }

  logoutUser() {
    this.loggedUser = null;
    localStorage.removeItem('loggedUser');
    localStorage.removeItem('token');
    this.router.navigate(['/signin']);
  }

  setToken(token: any) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }

  fetchLoggedInUser() {
    return this.http.get(this.baseURL+'/loggedUser', {
      headers: {
        'Authorization' : this.getToken()
      }
    })
  }
}
