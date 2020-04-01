import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private url = 'https://corona.lmao.ninja/countries';
  constructor(private http: HttpClient) { }

  public getListCountries() {
    return this.http.get(this.url);
  }
}
