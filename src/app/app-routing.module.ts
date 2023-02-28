import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalComponent } from './local/local.component';
import { LoginComponent } from './login/login.component';
import { SecondlocalComponent } from './secondlocal/secondlocal.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {
  path:'login',
  component:LoginComponent
},
{
  path:'signup',
  component:SignupComponent
},
{
path:'local',
component:LocalComponent
},
{
  path:'adddetail',
  component:SecondlocalComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
