import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class AuthSignupService {

  signupUser(user){
   return this.http.post('http://localhost:3000/users/signup', user)
   .subscribe(data => {
      console.log(data);
      error => console.log(error);
    })
  }
  
    authenticateUser(user){
    return this.http.post('http://localhost:3000/users/authenticate', user)
    .subscribe(data => {
      //localStorage.setItem('id_token', data.id_token),
      console.log(data);
      error => console.log(error)
    });
  }

  constructor(private http: HttpClient) {}  
}