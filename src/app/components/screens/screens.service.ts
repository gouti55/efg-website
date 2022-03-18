import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScreensService {

  constructor(private http: HttpClient) {

  }

  getSample(type:any): Observable<any> {
    return this.http.get("localhost:8080/sms/homebrew/services/"+type)
      .pipe(
        map((data:any) => data)
      )
  }
}
