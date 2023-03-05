import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalComponent } from './local/local.component';
import { SecondlocalComponent } from './secondlocal/secondlocal.component';
import { ServiceService } from './service.service';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule }   from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';


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
    DashboardModule




  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
