import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IProduct } from "../../interfaces/product";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    addProduct(product: any): Observable<IProduct> {
      return this.http.post<any>(this.#productAPi, product);
    }

    constructor(
        private http: HttpClient
    ) {}

    #productAPi = environment.baseUrl + '/product';

    deleteProduct(id: any): Observable<any> {
      return this.http.delete<any>(`${this.#productAPi}/${id}`, id);
    }

    
    getAllProducts(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.#productAPi);
    }

}