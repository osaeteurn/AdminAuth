import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthSignupService {
  authToken: any;
  user: any;

  signupUser(user){
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/users/signup', user, {headers: headers})
    .map(res => res.json);
  }

  constructor(private http: Http) {}  
}