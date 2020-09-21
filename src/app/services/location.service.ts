import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient) { }

  getLocationZipcodeByCountryCode(value) {
    return this.http.get('https://api.zippopotam.us/IN/'+ value);
  }
}
