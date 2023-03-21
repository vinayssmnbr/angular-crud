import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn:'root'
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


// url="http://localhost:3000/api/register"
// url1="http://localhost:3000/api/login"

url="http://localhost:8000/api/user/register"
url1="http://localhost:8000/api/user/login"



sendData(data:any){
  const data1=this.http.post(this.url1,data)
  return data1

}
allDataLogin(){
  let headers=new HttpHeaders()
  .set("Authorization",`bearer ${localStorage.getItem('token')}`)
  this.http.get("http://localhost:8000/api/user/auth",{headers}).subscribe((res:any)=>{
    if(res?.token){
      this.data

      {
      console.log(res)
      localStorage.setItem("token",res.token)
      this.isLoggedIn.next(true);

    }

      }
      error=>{
        error:error;
        alert("error")
        console.log(error)
      }
  })
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


function result(value: Object): void {
  throw new Error('Function not implemented.');
}

