import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PeriodService } from './../../../../service/admin-service/period/period.service';
import { Period } from './../../../model/period.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-period',
  templateUrl: './update-period.component.html',
  styleUrls: ['./update-period.component.css']
})
export class UpdatePeriodComponent implements OnInit {

  public period:Period={
  periodId: null,
  startTime:"",
  statusDay:null,
  price:null
  }
  constructor(
    public periodService:PeriodService,
    public routerService:Router,
    public activatedRoute:ActivatedRoute


  ) { }

  formcheck = new FormGroup({
    StartTime: new FormControl('',Validators.required),
    StatusDay: new FormControl('',Validators.required),
    Price: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")])
  })
  ngOnInit(): void {
    this.onLoad();
  }

  onLoad():void{
    this.activatedRoute.queryParams.subscribe(data => {
      let id : number = data.id;
     
     this.periodService.getAll(id,null).subscribe(data => {
       this.period = data.data;
     
     }, error => {
       console.log(error);
     })
   })
  }

  onupdatePeriod(){
    this.periodService.updatePeriod(this.period).subscribe(data => {
     
      alert('The period has been updated successfully')
      this.routerService.navigate(['/admin/listperiod']);
    }, error => {
      console.log(error);
    })
  }
back(){
  this.routerService.navigate(['admin/listperiod'])
}
}
