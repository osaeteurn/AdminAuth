import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { AuthSignupService } from '../shared/services/auth-signup.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})


export class SignupComponent implements OnInit {
    form: FormGroup;
    constructor(private formBuilder: FormBuilder, 
    private authSignupService: AuthSignupService) {}
    
    ngOnInit() {
         this.form = this.formBuilder.group({
            name: [null, [Validators.required]],
            email: [null, [Validators.required, Validators.email]],
            password: [null, [Validators.required]]
                })
            }

    onSignupSubmit(){
        const user = this.form.value;
        if (this.form.valid) {
            this.authSignupService.signupUser(user);
            console.log('form submitted');
        } else {
            console.log('form not submitted');
        }
    }
}

