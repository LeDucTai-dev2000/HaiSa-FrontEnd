import { Component, OnInit } from '@angular/core';
import {Employee} from '../../../model/employee.model';
import {EmployeeService} from '../../../../service/admin-service/employee/employee.service';
import  {Cinema} from '../../../model/cinema.model';
import {CinemaService} from '../../../../service/admin-service/cinema/cinema.service';
import { RouterModule, Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  constructor(
    public employeeService : EmployeeService,
    public cinemaService: CinemaService,
    public routerService : Router,
    public activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.loadAllCinema();
    this.onLoad();
  }
  public employees :Employee={
    "employeeId":null,
    "address":"",
    "birthday":null,
    "cinemaId":null,
    "email":"",
    "idCard":null,
    "name":"",
    "password":"",
    "phone":null,
    "listRole":null,
    "status":null,
    
  }
  
  public cinemas :Cinema={
    "address":" ",
    "cinemaId":null,
    "name":""
  }
  onLoad(){
    this.activatedRoute.queryParams.subscribe(data => {
       let id : number = data.id;
     
      this.employeeService.getAll(null,null,id,null).subscribe(data => {
        this.employees = data.data;
       
      }, error => {
        console.log(error);
      })
    })
  }
  onDelete(answer : boolean){
    if (answer) {
  
      this.employeeService.deleteEmployee(this.employees.employeeId).subscribe(data => {
         this.routerService.navigate(['/admin/listemployee']);

       
      }, error => {
         console.log(error);
        // console.log(this.movies.movieId)
      })
    } else {
      this.routerService.navigate(['/admin/listmovie']);
      
    }

  }
  loadAllCinema(): void {
    this.cinemaService.getAll().subscribe(
      (data) => {
        this.cinemas = data.data;
        
    
        
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
