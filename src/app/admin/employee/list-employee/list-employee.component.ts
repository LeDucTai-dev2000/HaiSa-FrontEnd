import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {Employee} from '../../../model/employee.model';
import {EmployeeService} from '../../../../service/admin-service/employee/employee.service';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {


  public employee1: Employee[] = [];
  public employee2: Employee[] = [];
  public status: number;
  movieId:number;
  totalRecord:string;
  totalRecord2:string;
  name1:string;
  name2:string;
  p: number = 1;
  p2: number = 1;

  constructor(
    public routerService : Router,
  private employeeService : EmployeeService
  ) { }

  check =true;

  ngOnInit(): void {
    
    let checkRole = sessionStorage.getItem('ROLE');
   
    if(checkRole == 'Staff'){
      this.check = true
     
    }else {
      this.check = false
     
    }

    this.loadAllEmployee1();
    this.loadAllEmployee2();
  }

  loadAllEmployee1(): void {
    this.employeeService.getAll(null,null,null,1,null).subscribe(
      (data) => {
        this.employee1 = data.data;
        this.totalRecord=data.data.length;
        

      },
      (error) => {
        console.log(error);
      }
    );
  }
  loadAllEmployee2(): void {
    this.employeeService.getAll(null,null,null,2,null).subscribe(
      (data) => {
        this.employee2 = data.data;
        this.totalRecord2=data.data.length;
      
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onSearch(name1: string){
    if(name1){
     this.employeeService.getAll(name1,null,null,null,null).subscribe(
       (data) => {
         this.employee1 = data.data;
        
       },
       (error) => {
         console.log(error);
       }
     );
     }else{
       this.loadAllEmployee1();
     }
    }
    onSearch2(name2: string){
      if(name2){
       this.employeeService.getAll(null,name2,null,null,null).subscribe(
         (data) => {
           this.employee2 = data.data;
           
         },
         (error) => {
           console.log(error);
         }
       );
       }else{
         this.loadAllEmployee2();
       }
      }
    onUpdate(employee){

      this.routerService.navigate(['/admin/listemployee/update'], { queryParams: {id: employee.employeeId} });
          // console.log(movie);
      }
      onDelete(employee){

        this.routerService.navigate(['/admin/listemployee/delete'], { queryParams: {id: employee.employeeId} });
            // console.log(movie);
        }

        onView(employee){

          this.routerService.navigate(['/admin/listemployee/view'], { queryParams: {id: employee.employeeId} });
              // console.log(movie);
          }
  

      }

