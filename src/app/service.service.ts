import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  

  constructor(private http: HttpClient) {}
sendData(data:any) {
  console.log(data)
  const url = 'https://webhook.site/1baed120-aef0-440e-82b7-3feecf6a5aa9';
  let headers = new HttpHeaders({
    'Content-Type': 'application/json',
  });
  let postOpt = Object.assign({ headers: headers, method: 'post' });
// console.log(data)
  return this.http.post(url,data, postOpt);
}

}
