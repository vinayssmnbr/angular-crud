import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { LocalComponent } from './local/local.component';
import { LoginComponent } from './login/login.component';
import { SecondlocalComponent } from './secondlocal/secondlocal.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
{
  path:'',
  component:HomeComponent
},
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
},
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  canActivate:[AuthGuard]
 }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
