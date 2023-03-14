import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Todo } from './model/todo';
import { BehaviorSubject } from 'rxjs';
import { Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  dataArray:any[]=[]
  data:any={
  Id:0,
  name:'',
  email:''
  }
name:any

  constructor(private http: HttpClient,private router:Router) {
    const localData=localStorage.getItem('studentdetail');
    console.log(localData);
    // this.dataArray=JSON.parse(localData)

    // if(this.dataArray!=null){
    //   this.dataArray=JSON.parse(localData)
    // }
  }


isLoggedIn=new BehaviorSubject<boolean>(false)
sendData(data:any) {
  console.log(data)
  const url = 'http://localhost:3000/api/studentroute/store';
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  this.isLoggedIn.next(true);
  let postOpt = Object.assign({ headers: headers, method: 'post' });
  return this.http.post(url,data, postOpt);
}

url="http://localhost:3000/api/studentroute/store"
url1="http://localhost:3000/api/studentroute/show"


users(username: string, password: string){
  return this.http.get(this.url1)
}
saveUser(data){
  this.isLoggedIn.next(true);
  return this.http.post(this.url,data)

}



addData(){
  this.data.Id=this.dataArray.length+1
  this.dataArray.push(({
    Id:this.data.Id,
    name:this.data.name,
    email:this.data.email}
    ));
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


