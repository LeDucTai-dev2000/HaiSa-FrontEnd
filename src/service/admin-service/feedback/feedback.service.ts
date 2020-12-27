import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Feedback} from '../../../app/model/feedback.model';
@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  private apiUrl= environment.apiUrl;
  constructor(public http : HttpClient) { }



  getAllFeedback(): Observable<any> {
    const endPoint = `${this.apiUrl}/feedback`;
    return this.http.get(endPoint);
  }
}
