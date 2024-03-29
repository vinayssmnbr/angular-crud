import { Component } from '@angular/core';
import { ServiceService } from '../service.service';
import { DashService } from './dash.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  newsList: any[] = [];
  query = '';
  page = 1;
  articless = [];
  source: Array<any> = [];
  isChecked: { [key: string]: boolean } = {};

  sourceDetails: string[] = ['Engadget', 'MacRumors', '9to5Mac', 'CNET'];

  constructor(public link: DashService, public fb: ServiceService) {}
  ngOnInit(): void {
    this.fb.allDataLogin();

    this.link
      .searchnews(this.query, this.source, this.page)
      .subscribe((result) => {
        console.log(result);
        this.newsList = result.response;
      });
  }

  search() {
    this.link
      .searchnews(this.query, this.source, this.page)
      .subscribe((res) => {
        console.log(res);
        this.newsList = res.response;
      });
  }
  filter(checkbox) {
    if (this.isChecked[checkbox.value] == true) {
      this.isChecked[checkbox.value] = false;
    } else {
      this.isChecked[checkbox.value] = true;
    }
    this.addSkill();
  }

  addSkill() {
    this.source = Object.keys(this.isChecked).filter(
      (key) => this.isChecked[key]
    );
    console.log('this:', this.source);
    this.link
      .searchnews(this.query, this.source, this.page)
      .subscribe((resp) => {
        console.log(resp);
        this.newsList = resp.response;
      });
  }
  next() {
    this.page++;
    this.link
      .searchnews(this.query, this.source, this.page)
      .subscribe((res) => {
        console.log(res);
        this.newsList = res.response;
      });
  }
  prev() {
    this.page--;
    this.link
      .searchnews(this.query, this.source, this.page)
      .subscribe((res) => {
        console.log(res);
        this.newsList = res.response;
      });
  }
}
