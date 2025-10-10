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
export class CollectService {
  private ApiUrl = "./api/collects";

  constructor(private http: HttpClient) {}

  createCollect(collect: Collect): Observable<Collect>{
    return this.http.post<Collect>(this.ApiUrl, collect);
  }

  updateCollect(collect: Collect): Observable<Collect>{
    return this.http.put<Collect>(this.ApiUrl, collect);
  }

  getAllCollects(): Observable<Collect[]>{
    return this.http.get<Collect[]>(this.ApiUrl);
  }

}
