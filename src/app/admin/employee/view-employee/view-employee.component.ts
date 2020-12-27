import { Component, OnInit } from '@angular/core';
import { RouterModule, Router,ActivatedRoute } from '@angular/router';
import {EmployeeService} from '../../../../service/admin-service/employee/employee.service'
import {Cinema} from '../../../model/cinema.model'
import {CinemaService} from '../../../../service/admin-service/cinema/cinema.service'
import { Role} from '../../../model/role.model'
import { Employee } from 'src/app/model/employee.model';
@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {

  constructor(
    public employeeService : EmployeeService,
    public cinemaService: CinemaService,
    public routerService : Router,
    public activatedRoute : ActivatedRoute,
  ) { }
  public cinema:string
public employees : Employee ={
"address":"",
"birthday":null,
"cinemaId":null,
"email":"",
"employeeId":null,
"idCard":null,
"name":"",
"password":"",
"phone":null,
"listRole":null,
"status":null

} 
public roles :Role[]=[]
  ngOnInit(): void {
    this.onLoad();
  }


  onLoad(){
    this.activatedRoute.queryParams.subscribe(data => {
       let id : number = data.id;
     
      this.employeeService.getAll(null,null,id,null,null).subscribe(data => {
        this.employees = data.data;
        this.cinema = data.data.cinema.name
       console.log(data)
     
      }, error => {
        console.log(error);
      })
      this.employeeService.getRoleEmployee(id).subscribe(data => {
        this.roles = data.data;
      
      })

    })
   
  }

}
