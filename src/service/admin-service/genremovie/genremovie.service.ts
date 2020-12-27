import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {GenreMovie} from '../../../app/model/genremovie.model';
@Injectable({
  providedIn: 'root'
})
export class GenremovieService {
  private apiUrl= environment.apiUrl;
  constructor(public http : HttpClient) { }

  // getAllGenremovie(): Observable<any> {
  //   const endPoint = `${this.apiUrl}/genre`;
  //   return this.http.get(endPoint);
  // }

  getAll(name?: string, id?: number,id2?:number): Observable<any>{
    let url: string;
    if(name){
      url = this.apiUrl+`findbyname?name=`+name;
    }
    else if (id) {
      url = `${this.apiUrl}/genre/findbyid?id=`+id;
    }
    else if (id2) {
      url = `${this.apiUrl}/genre/findbymovie?id=`+id2;
    }
    
    else {
      url = `${this.apiUrl}/genre`;
    }
    console.log(url);
    return this.http.get(url);
  }
  addGenre(genremovie: GenreMovie): Observable<any> {
    const add = `${this.apiUrl}/genre/add`;
    return this.http.post(add, genremovie);
  }
  updateGenre(genremovie: GenreMovie): Observable<any> {
    const update = `${this.apiUrl}/genre/update`;
    return this.http.put(update,genremovie);
  }
  // findGenrebyid(id: string): Observable<any>{
  //   const findid =  `${this.apiUrl}/genre/findbyid/`+id;
  //   // let params2 = new HttpParams().set('idmovie',id);
  //   // return this.http.get(findid,{params:params2});
  //   return this.http.get(findid)
  // }
}
