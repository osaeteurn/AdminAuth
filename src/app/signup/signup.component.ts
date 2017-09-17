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
    nameAlert: string = 'Your name is required';
    emailAlert: string = 'Your email is required';
    passwordAlert: string = 'Your name is required';

    constructor(private formBuilder: FormBuilder, 
    private authSignupService: AuthSignupService) {}
    
    ngOnInit() {
    const user = this.form = this.formBuilder.group({
                name: [null, [Validators.required]],
                email: [null, [Validators.required, Validators.email]],
                password: [null, [Validators.required]]
                })
            }

    onSignupSubmit(){
        if (this.form.valid) {
                        console.log('form submitted');
            this.authSignupService.signupUser(this.form.value).subscribe( data => {
                if (data){
                    console.log('your are ready to login');
           
                } else{
                    console.log('you are not registered');
                }
            });
        } else {
            console.log('form not submitted');
        }

    }
}
