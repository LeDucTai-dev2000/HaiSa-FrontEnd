import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {  Food } from '../../../app/model/food.model';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  private apiUrl= environment.apiUrl;
  constructor(public http : HttpClient) { }
  
  getAll(name1?:string,name2?:string, id?: number,st?:number): Observable<any>{
    let url: string;
    if(name1){
      url = `${this.apiUrl}/food/findbyname?name=`+name1 +`&status=1`;
    }
    else if (name2) {
      url = `${this.apiUrl}/food/findbyname?name=`+name2 +`&status=2`;
    }
    else if (id) {
      url = `${this.apiUrl}/food/findbyid?id=`+id;
    }
    else if(st){
      url = `${this.apiUrl}/food/`+st;
    }
    else {
      url = `${this.apiUrl}/food`;
    }
    console.log(url);
    return this.http.get(url);
  }
  
  addFood(food: Food): Observable<any> {
    const add = `${this.apiUrl}/food/add`;
    return this.http.post(add, food);
  }
  updateFood(food: Food): Observable<any> {
    const update = `${this.apiUrl}/food/update`;
    return this.http.put(update, food);
  }

  deleteFood(id: number): Observable<any> {
    const remove = `${this.apiUrl}/food/delete?id=`+id;
    return this.http.put(remove, id);
  }



}
