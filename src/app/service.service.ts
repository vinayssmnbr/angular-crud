import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Todo } from './model/todo';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  group(arg0: { username: (string | ((control: import("@angular/forms").AbstractControl<any, any>) => import("@angular/forms").ValidationErrors))[]; email: (string | ((control: import("@angular/forms").AbstractControl<any, any>) => import("@angular/forms").ValidationErrors)[])[]; password: (string | ((control: import("@angular/forms").AbstractControl<any, any>) => import("@angular/forms").ValidationErrors)[])[]; confirmpassword: (string | ((control: import("@angular/forms").AbstractControl<any, any>) => import("@angular/forms").ValidationErrors))[]; company: (string | ((control: import("@angular/forms").AbstractControl<any, any>) => import("@angular/forms").ValidationErrors))[]; }): import("@angular/forms").FormGroup<any> {
    throw new Error('Method not implemented.');
  }
  dataArray:any[]=[]
  data:any={
  Id:0,
  name:'',
  email:''
  }
  name: any;

  constructor(private http: HttpClient) {
    const localData=localStorage.getItem('studentdetail')
    // if(localData!=null){
    //   this.dataArray=JSON.parse(localData)
    // }
  }


sendData(data:any) {
  console.log(data)
  const url = 'https://webhook.site/1baed120-aef0-440e-82b7-3feecf6a5aa9';
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  let postOpt = Object.assign({ headers: headers, method: 'post' });
  return this.http.post(url,data, postOpt);
}




addData(){
  this.data.Id=this.dataArray.length+1
  this.dataArray.push(new Todo({
    Id:this.data.Id,
    name:this.data.name,
    email:this.data.email}
    ))
  console.log(this.data,this.dataArray)
  localStorage.setItem('studentdetail',JSON.stringify(this.dataArray))
  this.data={
    Id:0,
    name:'',
    email:''
    }
}

editData(item:any){
  this.data=item
  localStorage.setItem('studentdetail',JSON.stringify(this.data))

}

updateData(){
  const record=this.dataArray.find(m=>m.Id==this.data.Id)
  localStorage.setItem('studentdetail',JSON.stringify(record))

  record.name=this.name;
}

removeData(id:any){
for(let i=0; i<this.dataArray.length; i++){
  if(this.dataArray[i].Id ==id){
    this.dataArray.splice(i,1);
  }
}


}}
