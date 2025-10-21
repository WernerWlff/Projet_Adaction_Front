import { Injectable } from '@angular/core';

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
