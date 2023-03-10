import { Component } from '@angular/core';
import { DashService } from '../dash.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  constructor(public link:DashService){}

}
