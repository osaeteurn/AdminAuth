import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';
import { AuthSignupService } from '../shared/services/auth-signup.service';


@NgModule({
  imports: [
    CommonModule,
    SignupRoutingModule, 
    ReactiveFormsModule 
  ],
  declarations: [SignupComponent],
  providers: [AuthSignupService]
})
export class SignupModule { }
