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
  }

  signUp(newUser: User) {
    console.log('posting: ', newUser);
    return this.http.post(this.baseURL, newUser);
  }

  updateUser(userToUpdate: User) {
    return this.http.put(this.baseURL+'/'+userToUpdate.email, userToUpdate);

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
    return this.http.get(this.baseURL+'/loggedUser')
  }

  fetchUserList() {
    return this.http.get(this.baseURL);
  }

  deleteUser(email) {
    return this.http.delete(this.baseURL+'/'+email)
  }
}
