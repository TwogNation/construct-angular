import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiUrl = '/api/endpoint';
  constructor(private http: HttpClient) {}

  sendGetRequest() {
    return this.http.get(this.apiUrl);
  }

  sendPostRequest(data: Object): Observable<Object> {
    return this.http.post(this.apiUrl, data);
  }
}
