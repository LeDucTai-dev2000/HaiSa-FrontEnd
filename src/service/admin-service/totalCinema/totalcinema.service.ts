import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {TotalCinema} from '../../../app/model/totalCinema.model'
@Injectable({
  providedIn: 'root'
})
export class TotalcinemaService {
  private apiUrl= environment.apiUrl;
  constructor(public http : HttpClient) { }

  getAll(): Observable<any> {
    const endPoint = `${this.apiUrl}/view/totalbycinema`;
    return this.http.get(endPoint);
  }
}
