import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
// import { MustMatch } from './_helpers/must-match.validator';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerForm:FormGroup;
  submitted=false;
  constructor(private fb:FormBuilder,private fb1:ServiceService){}

  ngOnInit(){
    this.registerForm=this.fb.group({
      username:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmpassword:['',Validators.required],
      company:['',Validators.required]

    }
    //  ,{validator:MustMatch('password','confirmmpassword')}
    )
  };

  onSubmit(){
    // console.log(this.registerForm.value)
    this.fb1.sendData(this.registerForm.value).subscribe((res:any)=>{
      console.log(res)})
    this.submitted=true;
    console.log()
    if(this.registerForm.invalid){
      return;
    }
 
  }
  get uservalidators(){
    return this.registerForm.get('username')
  }
  
  get passwordValidators(){
    return this.registerForm.get('password')
  }

}


