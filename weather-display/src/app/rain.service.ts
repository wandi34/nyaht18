import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RainService {

  constructor(private httpclient: HttpClient) { }

  getWeather(): Observable<boolean> {
    return this.httpclient.get<boolean>('api/');
  }
}
