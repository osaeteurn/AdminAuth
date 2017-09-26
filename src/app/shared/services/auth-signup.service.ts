import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { JwtHelper } from 'angular2-jwt';
import { Router } from '@angular/router';

interface UserResponse {
  token: string;
}

@Injectable()
export class AuthSignupService {
  loggedIn = false;
  isAdmin = false;

  jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http: HttpClient, private router: Router) {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = this.decodeUserFromToken(token);
    }    
  }


  signupUser(user){
   return this.http.post('http://localhost:3000/users/signup', user)
   .subscribe(data => {
      console.log(data);
      error => console.log(error);
    })
  }

  authenticateUser(user){
  return this.http.post<UserResponse>('http://localhost:3000/users/authenticate', user)
  .subscribe( data => {
      localStorage.setItem('token', data.token); 
      const decodedUser = this.decodeUserFromToken(data.token);
      return this.loggedIn;
  },
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error){
        console.log('Client-side Error. Something went wrong in the frontend '+ Error)
      } else {
        console.log('Server-side Error. Something went wrong in the database '+ Error)
      }
    }
  )  
}

  logout() {
    localStorage.removeItem('token');
    localStorage.setItem('isLoggedin', 'false');
  }

  decodeUserFromToken(token) {
    return this.jwtHelper.decodeToken(token).user;
  }


}