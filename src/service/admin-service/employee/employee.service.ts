import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.prod';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import {  Employee} from '../../../app/model/employee.model';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl= environment.apiUrl;
  constructor(public http : HttpClient) { }

  getAll(name1?: string,name2?: string, id?: number,st?:number,role?:number): Observable<any>{
    let url: string;
    if(name1){
      url = `${this.apiUrl}/employee/findbyname?name=`+name1 +`&status=1`;
    }
    else if (name2) {
      url = `${this.apiUrl}/employee/findbyname?name=`+name2 + +`&status=2`;
    }
    else if (id) {
      url = `${this.apiUrl}/employee/findbyid?id=`+id;
    }
    else if(st){
      url = `${this.apiUrl}/employee/`+st;
    }
    else if(role){
      url = `${this.apiUrl}/employee/findbyrole/`+role;
    }

    else {
      url = `${this.apiUrl}/employee`;
    }
    console.log(url);
    return this.http.get(url);
  }

  addEmployee(employee: Employee): Observable<any> {
    const add = `${this.apiUrl}/employee/add`;
    return this.http.post(add, employee);
  }
  updateEmployee(employee: Employee): Observable<any> {
    const update = `${this.apiUrl}/employee/update`;
    return this.http.put(update, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    const remove = `${this.apiUrl}/employee/delete?id=`+id;
    return this.http.put(remove, id);
  }

  getRole():Observable<any>{
    const role = `${this.apiUrl}/role`;
    return this.http.get(role)
  }

  getRoleEmployee(id): Observable<any>{
    let url: string;
   
      url = `${this.apiUrl}/employee/getrole?employeeId=`+id;
    
    console.log(url);
    return this.http.get(url);
  }
}
