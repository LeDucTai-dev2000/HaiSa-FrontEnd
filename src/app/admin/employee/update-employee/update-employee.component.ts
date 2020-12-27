import { FormBuilder,FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router,ActivatedRoute } from '@angular/router';
import {EmployeeService} from '../../../../service/admin-service/employee/employee.service'
import {RoomService} from '../../../../service/admin-service/room/room.service'
import {MovieService} from '../../../../service/admin-service/movie/movieservice.service'
import {PeriodService} from '../../../../service/admin-service/period/period.service'
import {Employee} from '../../../model/employee.model'
import {Movie} from '../../../model/movie.model'
import {Period} from '../../../model/period.model'
import {Room} from '../../../model/room.model'
import {Showtimes} from '../../../model/showtimes.model'
import {ShowtimesService} from '../../../../service/admin-service/showtimes/showtimes.service'
import {Cinema} from '../../../model/cinema.model'
import {CinemaService} from '../../../../service/admin-service/cinema/cinema.service'
import { Role} from '../../../model/role.model'
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  form: FormGroup;
  listRole :any
  constructor(
    public employeeService : EmployeeService,
    public cinemaService: CinemaService,
    public routerService : Router,
    public activatedRoute : ActivatedRoute,
    private fb: FormBuilder,
  ) { }

public roles :Role[]=[]
  roleId : number

public cinemas :Cinema[]=[]
employeeId:number
name:string;
email:string;
phone:string;
address:string;
birthday:Date;
idCard:string;
cinemaId:number;
status:number;
  ngOnInit(): void {
    this.onLoad();
    this.form = this.fb.group({
      employeeId:[],
      address: [,[Validators.required,Validators.pattern(/[!^\w\s]$/)]],
      birthday: [,Validators.required],
      cinemaId:[,Validators.required],
      name: [,[Validators.required,Validators.pattern(/[!^\w\s]$/)]],
      phone: [,[Validators.required,Validators.minLength(10),Validators.pattern("^[0-9]*$")]],
      idCard:[,[Validators.required,Validators.minLength(9),Validators.pattern("^[0-9]*$")]],
      listRole: this.fb.array([''])
    })
    this.loadAllCinema();
    this.loadAllRole();
  }
  onLoad(){
    this.activatedRoute.queryParams.subscribe(data => {
       let id : number = data.id;
      console.log(id);
      this.employeeService.getAll(null,null,id,null,null).subscribe(data => {
        this.employeeId=data.data.employeeId
        this.address = data.data.address;
        this.birthday = data.data.birthday.slice(0,10);
        this.name = data.data.name
        this.phone = data.data.phone
        this.idCard = data.data.idCard
        this.cinemaId =data.data.cinema.cinemaId
        // console.log(data);
        this.form = this.fb.group({
          employeeId: this.employeeId,
          address: this.address,
          birthday: this.birthday,
          name: this.name,
          phone: this.phone,
          idCard : this.idCard,
          cinemaId : this.cinemaId,
          listRole: this.fb.array([])
        })
      
      }, error => {
        console.log(error);
      })
      this.employeeService.getRoleEmployee(id).subscribe(data =>{
        this.listRole = data.data
      
        this.form = this.fb.group({
          employeeId: this.employeeId,
          address: this.address,
          birthday: this.birthday,
          name: this.name,
          phone: this.phone,
          idCard : this.idCard,
          cinemaId : this.cinemaId,
          listRole: this.fb.array([])
        })
      });

    })
  }
  onUpdateEmployee(){
  
    this.employeeService.updateEmployee(this.form.value).subscribe(data => {
   
      alert('The staff has been updated successfully')
     this.routerService.navigate(['/admin/listemployee']);
    }, error => {
      console.log(error);
    })
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
      roles.push(new FormControl({roleId}));
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
