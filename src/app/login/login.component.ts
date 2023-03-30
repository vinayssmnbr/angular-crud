import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { BehaviorSubject } from 'rxjs';
import { ServiceService } from '../service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  list: [] = [];
  name: string;
  password: string;
  constructor(
    private fb: ServiceService,
    private router: Router,
    private cookie: CookieService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      console.log(params);
      const token = params['token'];
      console.log(token);
      if (token) {
        localStorage.setItem('token', token);
        this.router.navigate(['/dashboard']);
      }
    });
  }
  loginForm1 = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
  });
  isLoggedIn = new BehaviorSubject<boolean>(false);

  loginuser(data) {
    this.fb.sendData(data).subscribe((res: any) => {
      if (res?.token) {
        this.fb.sendData(data);

        {
          console.log(res);
          this.cookie.set('token', res.token);
          localStorage.setItem('token', res.token);
          this.fb.isLoggedIn.next(true);
        }
      }
      (error) => {
        error: error;
        alert('error');
        console.log(error);
      };
    });
  }

  loginwithGoogle() {
    window.location.href = 'http://localhost:8000/auth/google';

  }
  get uservalidators() {
    return this.loginForm1.get('user');
  }

  get passwordValidators() {
    return this.loginForm1.get('password');
  }
}
