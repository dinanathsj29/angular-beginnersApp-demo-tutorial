import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICountry } from '../interface/ICountry';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private countryUrl: string = '../assets/data/country.json';

  constructor(private http: HttpClient) { }

  getCountryData() {
    return [
      { 'name': 'India', 'code': 91, 'acronym': 'IN' },
      { 'name': 'Nepal', 'code': 11, 'acronym': 'NP' },
      { 'name': 'Srilanka', 'code': 12, 'acronym': 'SL' },
      { 'name': 'Bangladesh', 'code': 13, 'acronym': 'BD' }
    ];
  }

  // http service with Interface
  getCountryHttpData(): Observable<ICountry[]> {
    return this.http.get<ICountry[]>(this.countryUrl);
  }
}
