import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MemberticketService {
  private apiUrl= environment.apiUrl;
  constructor(public http : HttpClient) { }


  getMemberTicket(id:number):Observable<any>{
    const endPoint = `${this.apiUrl}/ticket/getticketbycinema?id=`+id;
    return this.http.get(endPoint);
  }

  getNameMember(id:number):Observable<any>{
    const endPoint = `${this.apiUrl}/ticket/findbyid?id=`+id;
    return this.http.get(endPoint);
  }
  getAll(name1?: string,name2?: string,name3?: string, name4?:string): Observable<any>{
    let url: string;
    if(name1){
      url = `${this.apiUrl}/ticket/findbyname?id=1`+`&name=`+name1;
    }
    else if (name2) {
      url = `${this.apiUrl}/ticket/findbyname?id=2`+`&name=`+name2;
    }
    else if (name3) {
      url = `${this.apiUrl}/ticket/findbyname?id=3`+`&name=`+name3;
    }
    else if (name4) {
      url = `${this.apiUrl}/ticket/findbyname?id=4`+`&name=`+name4;
    } 
    
    console.log(url);
    return this.http.get(url);
  }
}
