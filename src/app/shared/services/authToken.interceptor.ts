import { Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import { AuthSignupService } from './auth-signup.service';
@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  
  constructor(private authSignupService: AuthSignupService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authenticationReq = req.clone({
      headers: req.headers.set('Authorization', this.authSignupService.getToken())
    }) 
    return next.handle(authenticationReq);
  }
}