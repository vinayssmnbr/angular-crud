import { Component } from '@angular/core';
import { json } from 'express';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent {
  // name: any;
  // email:any
    
    constructor( public userservice:ServiceService){
    
  }

  // session:any;
  // dataArray:any[]=[]
  // data:any={
  // Id:0, 
  // name:'',
  // email:''
  // }
  // ngOninit(){
  //   const localData=localStorage.getItem('studentdetail')
  //   if(localData!=null){
  //     this.dataArray=JSON.parse(localData)
  //   }
  // }
// addData(){
//   debugger
//   this.data.Id=this.dataArray.length+1
//   this.dataArray.push(this.data)
//   console.log(this.data)
//   localStorage.setItem('studentdetail',JSON.stringify(this.dataArray))
//   this.data={
//     Id:0,
//     name:'',
//     email:''
//     }
// }

// editData(item:any){
//   debugger
//   this.data=item

// }

// updateData(){
//   debugger
//   const record=this.dataArray.find(m=>m.Id==this.data.Id)
//   record.name=this.name;
//   // record.name=this.email
// }

// removeData(id:any){
// for(let i=0; i<this.dataArray.length; i++){
//   debugger
//   if(this.dataArray[i].Id ==id){
//     this.dataArray.splice(i,1);
//   }
// }  

}
  







  // addData(){
  //   let data={id:1,name:'vinay'}
  //   localStorage.setItem('session',JSON.stringify(data))
  // }

  // getData(){
  //   let data:any=localStorage.getItem('session')
  //   this.session=JSON.parse(data)

  // }

  // name='';
  // email='';
  // userData=[]
  // updateData(){

  // }

// }
