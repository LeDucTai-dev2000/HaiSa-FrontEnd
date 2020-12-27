import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {Showtimes} from '../../../app/model/showtimes.model'
@Injectable({
  providedIn: 'root'
})
export class ShowtimesService {
  private apiUrl= environment.apiUrl;
  constructor(public http : HttpClient) { }

  getAll(name1:string,name2:string, id?: number,st?:number): Observable<any>{
    let url: string;
    if(name1){
      url = `${this.apiUrl}/showtimes/findbyname?name=`+name1+`&status=1`;
    }else if (name2) {
      url = `${this.apiUrl}/showtimes/findbyname?name=`+name2+`&status=2`;
    }
    else if (id) {
      url = `${this.apiUrl}/showtimes/findbyid?id=`+id;
    }
    else if(st){
      url = `${this.apiUrl}/showtimes/`+st;
    }
    else {
      url = `${this.apiUrl}/showtime`;
    }
    console.log(url);
    return this.http.get(url);
  }

  addShowtimes(stimes: Showtimes): Observable<any> {
    const add = `${this.apiUrl}/showtimes/add`;
    return this.http.post(add, stimes);
  }
  updateShowtimes(stimes: Showtimes): Observable<any> {
    const update = `${this.apiUrl}/showtimes/update`;
    return this.http.put(update, stimes);
  }

  deleteShowtimes(id: number): Observable<any> {
    const remove = `${this.apiUrl}/showtimes/delete?id=`+id;
    return this.http.put(remove, id);
  }
  getEmployeeId(email) :Observable<any>{
    const get = `${this.apiUrl}/employee/getemployee?email=`+email;
    return this.http.get(get)
  }
 
}

