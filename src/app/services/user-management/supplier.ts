import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { ISupplier } from "../../interfaces/supplier";

@Injectable({
    providedIn: 'root'
})
export class SupplierService {
    addSupplier(supplier: any): Observable<ISupplier> {
      return this.http.post<any>(this.#supplierAPi, supplier);
    }

    constructor(
        private http: HttpClient
    ) {}

    #supplierAPi = environment.baseUrl + '/supplier';

    deleteSupplier(id: any): Observable<any> {
      return this.http.delete<any>(`${this.#supplierAPi}/${id}`, id);
    }

    
    getAllSupplier(): Observable<ISupplier[]> {
        return this.http.get<ISupplier[]>(this.#supplierAPi);
    }

}