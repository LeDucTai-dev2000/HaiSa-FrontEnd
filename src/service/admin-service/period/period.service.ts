import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {Period} from '../../../app/model/period.model'
@Injectable({
  providedIn: 'root'
})
export class PeriodService {
  private apiUrl= environment.apiUrl;
  constructor(public http : HttpClient) { }
  getAll (id?: number,st?:number): Observable<any>{
    let url: string;
    if(id){
      url = `${this.apiUrl}/period/findbyid?id=`+id;
    }
    else if(st){
      url = `${this.apiUrl}/period/`+st;
    }
    else {
      url = `${this.apiUrl}/period`;
    }
    console.log(url);
    return this.http.get(url);
  }

  addPeriod(period: Period): Observable<any> {
    const add = `${this.apiUrl}/period/add`;
    return this.http.post(add, period);
  }
  updatePeriod(period: Period): Observable<any> {
    const update = `${this.apiUrl}/period/update`;
    return this.http.put(update, period);
  }

}
