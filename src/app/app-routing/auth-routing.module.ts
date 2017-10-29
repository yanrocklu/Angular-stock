import { NgModule } from '@angular/core';
import {Routes, RouterModule} from "@angular/router";

import {SigninComponent} from "../auth/signin/signin.component";
import {SignupComponent} from "../auth/signup/signup.component";

const authRoutes: Routes = [
  {path: 'signin', component: SigninComponent},
  {path: 'signup', component: SignupComponent}
]

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
