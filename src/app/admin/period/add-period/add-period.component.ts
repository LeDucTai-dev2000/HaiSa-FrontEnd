import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PeriodService } from './../../../../service/admin-service/period/period.service';
import { Period } from './../../../model/period.model';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-add-period',
  templateUrl: './add-period.component.html',
  styleUrls: ['./add-period.component.css']
})
export class AddPeriodComponent implements OnInit { 

  public period: Period[]=[];
  periodId:number;
  startTime:string;
  statusDay:number;
  price:number;

  constructor(
    private periodService: PeriodService,
    public routerService : Router
  ) { }

  formcheck = new FormGroup({
    StartTime: new FormControl(''),
    StatusDay: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
    Price: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")])
  })

  ngOnInit(): void {
  }

  onaddPeriod(){

    let period = new Period(this.periodId,this.startTime,this.statusDay,this.price)
    this.periodService.addPeriod(period).subscribe(
      data => {
        this.period = data.data;
        alert('The period has been added successfully')
        this.routerService.navigate(['/admin/listperiod']);
       
      },
      error => {
        console.log(error);
      }
    )

  }
  back(){
    this.routerService.navigate(['/admin/listperiod'])
  }
}
