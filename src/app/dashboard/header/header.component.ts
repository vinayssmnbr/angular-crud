import { Component, EventEmitter, Output } from '@angular/core';
import { DashService } from '../dash.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
//   @Output() featureSelected=new EventEmitter<string>();
//   onselect(feature:string)
//   {
// this.featureSelected.emit(feature)
//   }
  constructor(public link:DashService){}

}
