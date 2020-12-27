import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ViewService {
  private apiUrl= environment.apiUrl;
  constructor(public http : HttpClient) { }

  getFindCount(): Observable<any> {
    const endPoint = `${this.apiUrl}/view/findcount`;
    return this.http.get(endPoint);
  }
}
