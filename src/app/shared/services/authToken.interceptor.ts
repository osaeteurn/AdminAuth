import { Injectable, Injector} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import { AuthSignupService } from './auth-signup.service';
import { Router } from '@angular/router';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {
  private authSignupService: AuthSignupService;
  constructor(private injector: Injector, private router: Router){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authSignupService = this.injector.get(AuthSignupService);
    const authReq = req.clone({
      headers: req.headers.set('Authorization', 'token' + localStorage.getItem('token'))
    }) 
    return next.handle(authReq).do((event: HttpEvent<any>) => {
      if (event instanceof HttpResponse) {
        localStorage.setItem('isLoggedin', 'true');
        this.router.navigate(['dashboard']); 
      }
    },  
      (err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401 || err.status === 403) {             
            localStorage.setItem('isLoggedin', 'false');
            localStorage.removeItem('isLoggedin');
            this.router.navigate(['login']);
          }
        }
      }
    )
  }
}
