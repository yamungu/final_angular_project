import { Injectable } from "@angular/core";
import { environment } from "../../../environments/environment.development";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { IFeedback } from "../../interfaces/feedback";

@Injectable({
    providedIn: 'root'
})
export class FeedbackService {
    addFeedback(feedback: any): Observable<IFeedback> {
      return this.http.post<any>(this.#feedbackAPi, feedback);
    }

    constructor(
        private http: HttpClient
    ) {}

    #feedbackAPi = environment.baseUrl + '/feedback';

    deleteFeedback(id: any): Observable<any> {
      return this.http.delete<any>(`${this.#feedbackAPi}/${id}`, id);
    }

    
    getAllFeedbacks(): Observable<IFeedback[]> {
        return this.http.get<IFeedback[]>(this.#feedbackAPi);
    }

}