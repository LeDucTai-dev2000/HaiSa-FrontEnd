import { Component, OnInit } from '@angular/core';
import {ShowtimesService} from '../../../service/admin-service/showtimes/showtimes.service'
import { Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';
@Component({
  selector: 'app-viewemployeelogin',
  templateUrl: './viewemployeelogin.component.html',
  styleUrls: ['./viewemployeelogin.component.css']
})
export class ViewemployeeloginComponent implements OnInit {

  constructor(
    private showtimesService : ShowtimesService,
    private router: Router,
  ) { }
  public email :string
  public name :string
  public cinema : string
  public date : Date
  ngOnInit(): void {
    this.getName();
    this.loadEmployee();
  }
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
   
  getName(){
    const currentUser = JSON.parse(sessionStorage.getItem('token'));
   this.email = currentUser.username
   
  }
  loadEmployee(): void {
    this.showtimesService.getEmployeeId(this.email).subscribe(
      (data) => {
        this.employees = data.data
        this.cinema = data.data.cinema.name
        this.date = data.data.birthday.slice(0,10)
    
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
