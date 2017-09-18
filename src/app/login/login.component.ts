import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { HttpClient } from '@angular/common/http';
import { AuthSignupService } from '../shared/services/auth-signup.service' 
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
}) 
export class LoginComponent implements OnInit {  
    form: FormGroup;
    ngOnInit() {
             this.form = this.formBuilder.group({
                email: [null, [Validators.required, Validators.email]],
                password: [null, [Validators.required]]
                })
            }
    constructor(private formBuilder: FormBuilder, 
    private authSignupService: AuthSignupService) {}
    



    onLoggedin() {
        const user = this.form.value;
        if (this.form.valid) {
            this.authSignupService.authenticateUser(user);
            console.log('user authenticated' + user);
        } else {
            console.log('error');
        }
    }

}
