import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Volunteer{
id: number, 
firstname: string,
lastname: string,
email: string,
password: string,
location: string,
created_at: Date,
updated_at: Date,
total_points: number,
donation_points: number
}

@Injectable({
  providedIn: 'root'
})

export class VolunteerService {
  private apiUrl = "/api/volunteers";

  constructor(private http: HttpClient) {}

  getAllVolunteers(): Observable<Volunteer[]> {
    return this.http.get<Volunteer[]>(this.apiUrl);
  }
}


