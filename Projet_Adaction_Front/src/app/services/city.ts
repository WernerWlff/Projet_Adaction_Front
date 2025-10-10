import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coordinate } from './coordinate';

export interface City{
  id : number,
  name : String,
  coordinates_id : number,
  coordinates : Coordinate
}

@Injectable({
  providedIn: 'root'
})
export class CityService {
  private ApiUrl = "./api/cities";

  constructor(private http: HttpClient){}

  getAllCities(): Observable<City[]> {
    return this.http.get<City[]>(this.ApiUrl);  
  }
}

