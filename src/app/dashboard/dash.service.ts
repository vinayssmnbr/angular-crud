import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashService {
  home:boolean=true;
  about:boolean=false;
  contact:boolean=false;
  constructor() { }
  clear(){
    this.home=false;
    this.about=false;
    this.contact=false
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

}
