import { Injectable } from '@angular/core';
import {CountTicketMovie} from '../../../app/model/countticketmovie.model'
import { environment } from '../../../environments/environment.prod';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CountticketmovieService {
  private apiUrl= environment.apiUrl;
  constructor(public http : HttpClient) { }

  getAll(): Observable<any> {
    const endPoint = `${this.apiUrl}/view/ticketbymovie/1`;
    return this.http.get(endPoint);
  }
}
