import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SigninComponent } from '../signin/signin.component';
import { SignupComponent } from '../signup/signup.component';
import { AuthRoutingModule } from '../auth-routing/auth-routing.module';

@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    FormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
