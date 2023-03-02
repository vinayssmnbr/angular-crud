import { Component } from '@angular/core';
import { json } from 'express';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.css']
})
export class LocalComponent {
    showDetail=false;

    constructor( public userservice:ServiceService){

  }
tododata:any

}

