import { Component, NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalComponent } from './local/local.component';
import { SecondlocalComponent } from './secondlocal/secondlocal.component';
import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { AuthGuard } from './auth.guard';
import { SocialLoginModule } from 'angularx-social-login';




@NgModule({
  declarations: [
    AppComponent,
    LocalComponent,
    SecondlocalComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    BannerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    DashboardModule,
    SocialLoginModule






  ],
  providers: [ServiceService,CookieService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
