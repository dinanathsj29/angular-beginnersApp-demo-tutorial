import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../interface/IEmployee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl: string = '../assets/data/data.json';

  // DI for httpClient
  constructor(private http: HttpClient) { }

  getEmployeeData() {
    return [
      {
        name: 'Akshay1',
        isOnline: true
      },
      {
        name: 'Sunny1',
        isOnline: true
      },
      {
        name: 'Ranbir1',
        isOnline: false
      },
      {
        name: 'Amitabh1',
        isOnline: true
      }
    ];
  }

  // http service with interface
  getEmployeeHttpData(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.dataUrl);
  }
}
