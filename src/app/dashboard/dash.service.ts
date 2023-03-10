import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashService {
  home:boolean=true;
  about:boolean=false;
  contact:boolean=false;
  teacherdetails:boolean=false;
  studentdetails:boolean=false;
  constructor() { }
  clear(){
    this.home=false;
    this.about=false;
    this.contact=false;
    this.teacherdetails=false;
    this.studentdetails=false
  }
  aboutf()
  {
    this.clear();
    this.about=true;
    console.log(this.about)
  }
  contactf(){
    this.clear();
    this.contact=true
  }
  teacher(){
    this.clear();
    this.teacherdetails=true;
    console.log(this.teacherdetails)
  }
  student(){
    this.clear();
    this.studentdetails=true
  }

}
