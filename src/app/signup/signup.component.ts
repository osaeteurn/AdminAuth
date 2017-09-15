import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { AuthSignupService } from '../shared/services/auth-signup.service';
import { ValidateSignupService } from '../shared/services/validate-signup.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {
    name: String;
    username: String;
    email: String;
    password: String;
    
    constructor(private validateSignupService: ValidateSignupService) {}
    
    ngOnInit() {
     }

    onSignupSubmit(ngform){
        const user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        }
        
        // ValidateSignup Service 
        if(!this.validateSignupService.validateSignup(user)){
            console.log('Please fill in all fields');
            return false;
        }
        // ValidateSignup Service 
        if(!this.validateSignupService.validateEmail(user.email)){
            console.log('Please use a vaild email');
            return false;
        }
    }

    /* 
    constructor(private SignupAuthService: SignupAuthService) { 
        this.SignupAuthService.signupUser(user).subscribe(data => {
            if(data.success){
                console.log('user authenticated');
            }else{
                 console.log('user not authenticated');
            }
        });
    }
 */



}
