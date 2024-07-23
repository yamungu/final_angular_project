import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IEntrepreneur} from "../../interfaces/entrepreneur";

@Injectable({
    providedIn: 'root'
})
export class EntrepreneurService {
    addEntrepreneur(entrepreneur: any): Observable<IEntrepreneur> {
      return this.http.post<any>(this.#entrepreneurAPi, entrepreneur);
    }

    constructor(
        private http: HttpClient
    ) {}

    #entrepreneurAPi = environment.baseUrl + '/entrepreneur';

    deleteEntrepreneur(id: any): Observable<any> {
      return this.http.delete<any>(`${this.#entrepreneurAPi}/${id}`, id);
    }

    
    getAllEntrepreneurs(): Observable<IEntrepreneur[]> {
        return this.http.get<IEntrepreneur[]>(this.#entrepreneurAPi);
    }

}