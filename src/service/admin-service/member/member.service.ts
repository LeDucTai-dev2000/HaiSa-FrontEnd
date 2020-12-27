import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { Member } from '../../../app/model/member.model'
@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private apiUrl= environment.apiUrl;
  constructor(public http : HttpClient) { }



  getAll(name?:string): Observable<any>{
    let url: string;
    if(name){
      url = `${this.apiUrl}/member/findbyname?name=`+name;
    }
    else {
      url = `${this.apiUrl}/member`;
    }
    console.log(url);
    return this.http.get(url);
  }
}


  

