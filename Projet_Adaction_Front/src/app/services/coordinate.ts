import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Coordinate{
id : number,
lat : number,
lng : number
}

@Injectable({
  providedIn: 'root'
})
export class Coordinate {
  private ApiUrl = "./api/coordinates";
}
