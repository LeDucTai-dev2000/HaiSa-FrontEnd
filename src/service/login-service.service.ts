import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService  {
  authenticated = false;
  private apiUrl = environment.apiUrl;
  private api = environment.apiUrl;
  constructor(private httpClient: HttpClient) {}

  login(userName, password):Observable<any> {
    const headers = new HttpHeaders({
      Authorization : 'Basic ' + btoa(userName + ':' + password)});
    return this.httpClient.post(`${this.api}/login`,{userName}, {headers: headers});

  }

  getInfor_User(){
    return this.httpClient.get(
      `${this.apiUrl}/showtimes/findbyid?id=` +
        sessionStorage.getItem('showtimeId')
    );
  }


}
