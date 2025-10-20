import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { decodeToken } from './token-util';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private apiUrl = './api';

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }
    
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  
  clearToken() {
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }

  
  logout() {
    this.clearToken();
    
    
  }

 getUserInfo(): any {
    const token = this.getToken();
    if (!token) return null;
    return decodeToken(token);
  }

}


