import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { AuthSignupService } from '../shared/services/auth-signup.service';
import { ValidateSignupService } from '../shared/services/validate-signup.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

    constructor(private formBuilder: FormBuilder, private authSignupService: AuthSignupService) {
    }
    
    ngOnInit() {
        const user = this.form.value;
        this.form.get('user').valueChanges.subscribe(data => {
              this.form = this.formBuilder.group({
                name: [null, [Validators.required]],
                email: [null, [Validators.required, Validators.email]],
                password: [null, [Validators.required]]
                })
            }
        )
     }

    onSignupSubmit(){
        if (this.form.valid) {
            this.authSignupService.user(this.form.value).subscribe(data => {
                console.log(data);
            })
        } else {
            console.log('form not submitted');
        }

    }




}
