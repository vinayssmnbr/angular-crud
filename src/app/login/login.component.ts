import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from 'express';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  list:[]=[]
  constructor(private fb:ServiceService, ){}
  loginForm1 = new FormGroup({
    name : new FormControl('',[ Validators.required,Validators.email]),
    password : new FormControl('',[Validators.required,Validators.minLength(5)])
  })
  loginuser(data){
    this.fb.sendData(data).subscribe((res:any)=>{
      this.fb.sendData(data)
      console.log(res)
    })
    // if(username==name)

  // loginuser(data:any){
  //   this.fb.users(data).subscribe((res:any)=>{
  //     this.fb.users(this.loginForm1)
  //     console.log(res)

  //   })



  }
  get uservalidators(){
    return this.loginForm1.get('user')
  }

  get passwordValidators(){
    return this.loginForm1.get('password')
  }



  // update


}
