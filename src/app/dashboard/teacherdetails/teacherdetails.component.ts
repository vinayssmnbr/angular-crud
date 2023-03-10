import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-teacherdetails',
  templateUrl: './teacherdetails.component.html',
  styleUrls: ['./teacherdetails.component.css']
})
export class TeacherdetailsComponent {
  showDetail=false;
  dataArray:any[]=[]
  data:any={
    Id:0,
  name:'',
  email:'',
  phone:'',
  userid:'',
  pincode:'',
  address:''
  }

  teacherdetail:FormGroup;
  constructor(private fb:FormBuilder){}
  ngOnInit(){
    this.teacherdetail=this.fb.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      userid:['',[Validators.required, Validators.minLength(8),Validators.maxLength(8)]],
      phone: ['', [ Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(10), Validators.maxLength(10)]],
      pincode:['',Validators.required],
      address:['',Validators.required],

    }

    )
  };

  onAdd(){
    console.log(this.teacherdetail.value)
    this.dataArray.push(this.data)
  }

  get namevalidators(){
    return this.teacherdetail.get('name')
  }
  get emailvalidators(){
    return this.teacherdetail.get('email')
  }
  get uservalidators(){
    return this.teacherdetail.get('userid')
  }
  get phonevalidators(){
    return this.teacherdetail.get('phone')
  }
  get pinvalidators(){
    return this.teacherdetail.get('pincode')
  }
  get addressvalidators(){
    return this.teacherdetail.get('address')
  }

  editData(item:any){

  }

  // removeData(id:any){
  //   for(let i=0; i<this.dataArray.length; i++){
  //     if(this.dataArray[i].Id ==id){
  //       this.dataArray.splice(i,1);
  //     }
  //   }
  // }


}
