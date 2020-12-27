import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {Movie} from '../../../app/model/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private apiUrl= environment.apiUrl;
  constructor(public http : HttpClient) { }



  // getAll(): Observable<any> {
  //   const endPoint = `${this.apiUrl}/movie`;
  //   return this.http.get(endPoint);
  // }

  getAll(name1?: string,name2?: string,name3?: string, id?: number,st?:number): Observable<any>{
    let url: string;
    if(name1){
      url = `${this.apiUrl}/movie/findbyname?name=`+name1+`&status=1`;
    }
    else if (name2) {
      url = `${this.apiUrl}/movie/findbyname?name=`+name2+`&status=2`;
    }
    else if (name3) {
      url = `${this.apiUrl}/movie/findbyname?name=`+name3+`&status=3`;
    }
    else if (id) {
      url = `${this.apiUrl}/movie/findbyid?id=`+id;
    }
    else if(st == 0){
      url = `${this.apiUrl}/movie/getall`;
    }
    else if(st){
      url = `${this.apiUrl}/movie/`+st;
    }
    else {
      url = `${this.apiUrl}/movie`;
    }
    console.log(url);
    return this.http.get(url);
  }

  addMovie(movie: Movie): Observable<any> {
    const add = `${this.apiUrl}/movie/add`;
    return this.http.post(add, movie);
  }

  updateMovie(form: Movie): Observable<any> {
    const update = `${this.apiUrl}/movie/update`;
    return this.http.put(update, form);
  }

  deleteMovie(id: number): Observable<any> {
    const remove = `${this.apiUrl}/movie/delete?id=`+id;
    return this.http.put(remove, id);
  }

  // findMoviebyname(name: string): Observable<any> {
  //   const findname = `${this.apiUrl}/findbyname/`;
  //   let params1 = new HttpParams().set('name',name);
  //   return this.http.get(findname,{params:params1});
  // }
  // findMoviebyid(id: string): Observable<any>{
  //   const findid =  `${this.apiUrl}/findbyid/`;
  //   let params2 = new HttpParams().set('idmovie',id);
  //   return this.http.get(findid,{params:params2});
  // }
}
