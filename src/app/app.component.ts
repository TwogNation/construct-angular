import { HttpClient } from '@angular/common/http';
import { HttpService } from './services/http/http.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'construct-angular';
  scores$: Observable<any> = this.http.get('/api/scores');

  constructor(
    //private httpService: HttpService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // this.httpService.sendGetRequest().subscribe((responseBody: any) => {
    //   console.log(responseBody);
    // });
  }

  /*token() {
    // 1. access token variable from C3
    const token = 123456789;
    const out = document.getElementById('out');
    const c3 = document.getElementById('c3');

    const base = 'c3/index.html';
    // 2. send token by query string to C3
    document.getElementById('submit').addEventListener('click', () => {
      let url;
      if (token) {
        url = `${base}?url=${token}`;
      } else {
        url = base;
      }
      c3.src = url;
    });
    // 3. call function from C3 to get token
    function getToken() {
      return token;
    }
    console.log('token value> ' + token);
  }*/
}
