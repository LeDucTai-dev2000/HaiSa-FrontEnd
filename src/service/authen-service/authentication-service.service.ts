import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { User } from './user';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class AuthenticationServiceService {
  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;
  private apiUrl = environment.apiUrl;
  credentials = { username: '', password: '' };
  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(
      JSON.parse(localStorage.getItem('currentUser'))
    );
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): any {
    return this.currentUserSubject.value;
  }

  // login(username: string, password: string) {
  //   const headers = new HttpHeaders({
  //     authorization : 'Basic ' + btoa(username + ':' + password)
  // } );
  // this.http.get(`${this.apiUrl}/seat`, {headers: headers}).subscribe(data => {

  // });
  // // debugger
  //   return this.http.post
  //     <any>(`${this.apiUrl}/seat`, 'asd',{
  //      headers:headers
  //     })
  //     .pipe(
  //       map((any) => {
  //         console.log('pipe');
  //         any.authdata = window.btoa(username + ':' + password);
  //         localStorage.setItem('currentUser', JSON.stringify(any));
  //         this.currentUserSubject.next(any);
  //         return any;
  //       })
  //     );
  // }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
