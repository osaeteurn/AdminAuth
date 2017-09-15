import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { AuthSignupService } from '../shared/services/auth-signup.service';
import { ValidateSignupService } from '../shared/services/validate-signup.service';

@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule
  ],
  declarations: [SignupComponent],
  providers: [AuthSignupService, ValidateSignupService]
})
export class SignupModule { }
