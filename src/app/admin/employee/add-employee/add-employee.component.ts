import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee} from '../../../model/employee.model';

import { Role} from '../../../model/role.model'
import {EmployeeService} from '../../../../service/admin-service/employee/employee.service';
import  {Cinema} from '../../../model/cinema.model';
import {CinemaService} from '../../../../service/admin-service/cinema/cinema.service';
import { FormGroup, FormBuilder, FormControl, Validators,FormArray } from '@angular/forms';
import { error } from 'jquery';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  public employees: Employee [] = [];
  employeeId: number;
  name: string;
  password: string;
  role: number;
  email: string;
  phone: string;  
  address: string;
  birthday: Date;
  idCard: string;
  cinemaId: number;
  status: number;

  public roles :Role[]=[]
  roleId : number
  listRole :any
  public cinemas: Cinema[] = [];

  form: FormGroup;

  masterSelected: boolean;

  constructor(
    private employeeService: EmployeeService,
    public routerService : Router,
    private cinemaService: CinemaService,
    private fb : FormBuilder
  ) { }


  // formcheck = new FormGroup({
  //   Name: new FormControl('',[Validators.required,Validators.pattern(/[!^\w\s]$/)]),
  //   Password: new FormControl('',[Validators.required,Validators.minLength(6)]),
  //   Role: new FormControl('',Validators.required),
  //   Email: new FormControl('',[Validators.required,Validators.email]),
  //   Phone: new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern("^[0-9]*$")]),
  //   Address: new FormControl('',[Validators.required,Validators.pattern(/[!^\w\s]$/)]),
  //   Birthday: new FormControl('',Validators.required),
  //   IdCard: new FormControl('',[Validators.required,Validators.minLength(9),Validators.pattern("^[0-9]*$")]),
  //   cinema: new FormControl('',Validators.required)
  // })

  ngOnInit(): void {
    this.loadAllCinema();
    this.loadAllRole();
    this.form = this.fb.group({
      name: ['',[Validators.required,Validators.pattern(/[!^\w\s]$/)]],
      password: ['',[Validators.required,Validators.minLength(6)]],
      email: ['',[Validators.required,Validators.email]],
      phone: ['',[Validators.required,Validators.minLength(10),Validators.pattern("^[0-9]*$")]],
      address: ['',[Validators.required,Validators.pattern(/[!^\w\s]$/)]],
      birthday:['',Validators.required],
      idCard:['',[Validators.required,Validators.minLength(9),Validators.pattern("^[0-9]*$")]],
      cinemaId: ['',Validators.required],
      listRole : this.fb.array([])

    })

  }
  onaddEmployee(){
    // console.log(`${this.employeeId}-${this.name}-${this.password}-${this.role}-${this.email}-${this.phone}-${this.address}-${this.birthday}-${this.idCard}-${this.cinemaId}-${this.status}`)
    // let employee = new Employee(this.employeeId,this.name,this.password,this.role,this.email,this.phone,this.address,this.birthday,this.idCard,this.cinemaId,this.status)
    this.employeeService.addEmployee(this.form.value).subscribe(
      data => {
        this.employees = data;
        alert('The staff has been added successfully')
        this.routerService.navigate(['/admin/listemployee']);
      
      },
      error => {
        console.log(error);
      }
    )

  



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


  loadAllRole():void{
    this.employeeService.getRole().subscribe(
      (data) =>{
        this.roles = data.data
      
      },
      (error) =>{
        console.log(error)
      }
    )
  }

  onChange(roleId: number, isChecked: boolean) {
    const roles = (this.form.controls.listRole as FormArray);

    if (isChecked) {
      roles.push(new FormControl({ roleId }));
    } else {
      const index = roles.controls.findIndex(x => x.value === { roleId });
      roles.removeAt(index);
    }
  }
  submit() {
   
  }
  back(){
    this.routerService.navigate(['/admin/listemployee'])
  }
}
