import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEntrepreneur } from '../../interfaces/entrepreneur';

@Injectable({
  providedIn: 'root'
})
export class EntrepreneurService {

  constructor(private http: HttpClient) { }

  #baseUri = environment.baseUrl 

  registerSupplier(dataInfo: any): Observable<IEntrepreneur> {
    return this.http.post<IEntrepreneur>(`${this.#baseUri}/entrepreneur`, dataInfo);
  }

}
