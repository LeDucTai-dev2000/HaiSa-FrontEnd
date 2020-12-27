import { Router } from '@angular/router';
import { Period } from './../../../model/period.model';
import { Component, OnInit } from '@angular/core';
import { PeriodService } from '../../../../service/admin-service/period/period.service';


@Component({
  selector: 'app-list-period',
  templateUrl: './list-period.component.html',
  styleUrls: ['./list-period.component.css']
})
export class ListPeriodComponent implements OnInit {

  public period:Period[]=[];
  totalRecord: string;
  p: number = 1;

  constructor(
    private periodService:PeriodService,
    public routerService:Router
  ) { }
check = true
  ngOnInit(): void {
    let checkRole = sessionStorage.getItem('ROLE');
    console.log(checkRole)
    if(checkRole == 'Staff'){
      this.check = true
    
    }else {
      this.check = false
     
    }
    this.loadAllPeriod();
  }

  loadAllPeriod():void{
    this.periodService.getAll(null,null).subscribe(
      (data)=>{
        this.period = data.data;
        this.totalRecord=data.data.length;
     
      },
      (error) =>{
        console.log(error);
      }

    )
  }


  onUpdate(period){

    this.routerService.navigate(['/admin/listperiod/update'], { queryParams: {id: period.periodId} });
        
    }

    onSearch(id?: number){
      if(id){
       this.periodService.getAll(id,null).subscribe(
         (data) => {
           this.period = data.data;
          
         },
         (error) => {
           console.log(error);
         }
       );
       }else{
         this.loadAllPeriod();
       }
      }

}
