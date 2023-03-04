import { Component,ViewChild } from '@angular/core';
import { DashService } from './dash.service';
import { FooterComponent } from "./footer/footer.component";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  constructor(public link:DashService){}
 

}
