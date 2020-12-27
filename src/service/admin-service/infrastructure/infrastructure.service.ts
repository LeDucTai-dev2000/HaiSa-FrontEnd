import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class InfrastructureService {
  private apiUrl= environment.apiUrl;
  constructor(public http : HttpClient) { }


  getInfrastructure(id:number):Observable<any>{
    const endPoint = `${this.apiUrl}/room/getroombycinema?id=`+id;
    return this.http.get(endPoint);
  }
}
