import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISupplier } from '../../interfaces/supplier';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }

  #baseUri = environment.baseUrl + '/api/v1';

  registerSupplier(dataInfo: any): Observable<ISupplier> {
    return this.http.post<ISupplier>(`${this.#baseUri}/supplier`, dataInfo);
  }

}
