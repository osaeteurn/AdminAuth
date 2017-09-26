import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';
import { AuthSignupService } from "../services/auth-signup.service";

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(public authSignupService: AuthSignupService,  private router: Router) { }

    canActivate() {
        if (localStorage.getItem('isLoggedin')) {
            return true;
        }
        this.router.navigate(['/login']);
        return false;
    }
}
