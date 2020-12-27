import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class StatisticalService {
  private apiUrl= environment.apiUrl;
  constructor(public http : HttpClient) { }


  getTicketOfMonth(month:number): Observable<any> {
    const endPoint = `${this.apiUrl}/view/ticketofmonth?month=`+month;
    return this.http.get(endPoint);
  }

  
  getTicketOfShowtime(id:number): Observable<any> {
    const endPoint = `${this.apiUrl}/view/ticketbyshowtime?id=`+id;
    return this.http.get(endPoint);
  }

  getTotalCinemaOfMonth(id:number): Observable<any> {
    const endPoint = `${this.apiUrl}/view/totalofmonth?id=`+id;
    return this.http.get(endPoint);
  }

}
