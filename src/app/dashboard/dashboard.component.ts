import { Component,ViewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import { DashService } from './dash.service';
import { FooterComponent } from "./footer/footer.component";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  newsList: any[]=[];
  query='';
  articless= [];
  constructor(public link:DashService,public fb:ServiceService){}
  ngOnInit():void{
    this.fb.allDataLogin();

    this.link.getNews().subscribe((result)=>{
      console.log(result)
      this.newsList=result.response

    })
  }
  search(){
    this.link.searchnews(this.query).subscribe(response=>{
      this.articless=response.articles
    })
  }





}
