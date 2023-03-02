import { Component, Input } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-secondlocal',
  templateUrl: './secondlocal.component.html',
  styleUrls: ['./secondlocal.component.css']
})
export class SecondlocalComponent {
  showDetail=false;
constructor(public userservice:ServiceService){}
  @Input() parent:any

}
