import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Cinema} from '../../../app/model/cinema.model';
@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  private apiUrl= environment.apiUrl;
  constructor(public http : HttpClient) { }

  getAll(name?:string, id?: number): Observable<any>{
    let url: string;
    if(name){
      url = `${this.apiUrl}/cinema/findbyname?name=`+name;
    }
    
    else if (id) {
      url = `${this.apiUrl}/cinema/findbyid?id=`+id;
    }
    
    else {
      url = `${this.apiUrl}/cinema`;
    }
    console.log(url);
    return this.http.get(url);
  }
  
  addCinema(cinema: Cinema): Observable<any> {
    const add = `${this.apiUrl}/cinema/add`;
    return this.http.post(add, cinema);
  }
  updateCinema(cinema: Cinema): Observable<any> {
    const update = `${this.apiUrl}/cinema/update`;
    return this.http.put(update, cinema);
  }
}
