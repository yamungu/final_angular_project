import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EntrepreneurService {
  private entrepreneurUrl = 'http://localhost:8080/api/v1/entrepreneur/entrepreneur'; // Corrected URL

  constructor(private http: HttpClient) {}

  registerEntrepreneur(entrepreneur: any): Observable<any> {
    return this.http.post<any>(this.entrepreneurUrl, entrepreneur);
  }
}
