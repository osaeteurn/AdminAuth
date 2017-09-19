import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
interface UserAuthResponse {
  token: string,
  user: any
}

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
  return this.http.post<UserAuthResponse>('http://localhost:3000/users/authenticate', user)
  .subscribe(data => {
    localStorage.setItem(user, data.token),
    (err: HttpErrorResponse) => {
      if (err.error instanceof Error){
        console.log('Client-side Error')
      } else {
      console.log('Server-side Error')
      }
    }
  })
}

 public getToken(): string {
    return localStorage.getItem('token');
  }
  
/* implementing next when I find time :(
    public tokenAuth(): boolean {
    const token = this.getToken();
    return // logic for check for expired token or use angular-jwt
  }  
*/
  constructor(private http: HttpClient) {}  
}