import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {Room} from '../../../app/model/room.model'
@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl= environment.apiUrl;
  constructor(public http : HttpClient) { }

  getAll(): Observable<any>{
    let url: string;
      url = `${this.apiUrl}/room`;
      console.log(url);
      return this.http.get(url);
  }

  addRoom(room: Room): Observable<any> {
    const add = `${this.apiUrl}/room/add`;
    return this.http.post(add, room);
  }

}


