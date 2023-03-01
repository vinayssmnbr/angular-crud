import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  registerForm:FormGroup;
  constructor(private fb:FormBuilder, private fb1:ServiceService){}

  ngOnInit(){
    this.registerForm=this.fb.group({
      username:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.minLength(6)]],
      confirmpassword:['',Validators.required,],
      company:['',Validators.required]

    }

    )
  };

  onSubmit(){
    console.log(this.registerForm.value)
    this.fb1.sendData(this.registerForm.value).subscribe((res:any)=>{
      this.fb1.sendData(this.registerForm)
      console.log(res)
    })
    }

}





