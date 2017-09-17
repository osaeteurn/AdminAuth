import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
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

    constructor(private formBuilder: FormBuilder, 
    private authSignupService: AuthSignupService) {}
    
    ngOnInit() {
             this.form = this.formBuilder.group({
                email: [null, [Validators.required, Validators.email]],
                password: [null, [Validators.required]]
                })
            }


    onLoggedin() {
       let user: any;
           console.log(this.form.value);
       this.authSignupService.authenticateUser(user).subscribe(data => {
           console.log(user);
       })
    }

}
