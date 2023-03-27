import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashService {
  home: boolean = true;
  about: boolean = false;
  contact: boolean = false;
  teacherdetails: boolean = false;
  studentdetails: boolean = false;
  constructor(private http: HttpClient) {}

  //news api
  private apiUrl = 'http://localhost:8000/api/news';
  getNews() {
    return this.http.get<any>(this.apiUrl);
  }

  searchnews(query: string, source: string[], page: number) {
    console.log(query, source, page);
    return this.http.get<any>(
      `${this.apiUrl}?searchTerm=${query}&source=${source}&page=${page}`
    );
  }

  // filternews(source: string[]) {
  //   return this.http.get<any>(`${this.apiUrl}?source=${source}`);
  // }
  // nextnews(page) {
  //   return this.http.get<any>(`{this.apiUrl}?page=${page}`);
  // }

  clear() {
    this.home = false;
    this.about = false;
    this.contact = false;
    this.teacherdetails = false;
    this.studentdetails = false;
  }
  aboutf() {
    this.clear();
    this.about = true;
    console.log(this.about);
  }
  contactf() {
    this.clear();
    this.contact = true;
  }
  teacher() {
    this.clear();
    this.teacherdetails = true;
    console.log(this.teacherdetails);
  }
  student() {
    this.clear();
    this.studentdetails = true;
  }
}
