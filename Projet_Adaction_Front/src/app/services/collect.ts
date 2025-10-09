import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from './city';
import { Volunteer } from './volunteer';

export interface Collect{
  id : number,
  date : Date,
  city_id : number,
  glass_nb : number,
  butt_nb : number,
  plastic_nb : number,
  electronics_nb : number,
  others_nb : number,
  volunteer_id : number,
  city : City;
  volunteer : Volunteer;
}
@Injectable({
  providedIn: 'root'
})
export class Collect {
  private ApiUrl = "./api/collects";

}
