import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  list:[]=[]
  name:string
  password:string
  constructor(private fb:ServiceService,private router:Router, private cookie:CookieService ){
  }
  loginForm1 = new FormGroup({
    email : new FormControl('',[ Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(5)])
  })
isLoggedIn=new BehaviorSubject<boolean>(false)


  loginuser(data){
    this.fb.sendData(data).subscribe((res:any)=>{
      if(res?.token){
      this.fb.sendData(data)


      {
      console.log(res)
      this.cookie.set("token",res.token)
      localStorage.setItem("token",res.token)
      this.fb.isLoggedIn.next(true);


    }

      }
      error=>{
        error:error;
        alert("error")
        console.log(error)
      }
    }
    )

  }


  get uservalidators(){
    return this.loginForm1.get('user')
  }

  get passwordValidators(){
    return this.loginForm1.get('password')
  }



}
