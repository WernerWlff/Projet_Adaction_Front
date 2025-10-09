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
export class City {
  private ApiUrl = "./api/cities";
}

