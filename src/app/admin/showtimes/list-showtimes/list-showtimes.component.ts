import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {Showtimes} from '../../../model/showtimes.model';
import {ShowtimesService} from '../../../../service/admin-service/showtimes/showtimes.service';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

@Component({
  selector: 'app-list-showtimes',
  templateUrl: './list-showtimes.component.html',
  styleUrls: ['./list-showtimes.component.css']
})
export class ListShowtimesComponent implements OnInit {
  check =true;
  checkDate
  public showtimes1: Showtimes[] = [];
  public showtimes2: Showtimes[] = [];
  public name1:string
  public name2:string
  public status: number;
  totalRecord:string;
  totalRecord2:string;
  p: number = 1;
  p2: number = 1;
  constructor(
    public routerService : Router,
    private showtimesService : ShowtimesService,

  ) { }

  ngOnInit(): void {
    let checkRole = sessionStorage.getItem('ROLE');
    console.log(checkRole)
    if(checkRole == 'Staff'){
      this.check = true
    }else {
      this.check = false
    }
    this.loadAllShowtimes1();
    this.loadAllShowtimes2();
  }
  loadAllShowtimes1(): void {
    this.showtimesService.getAll(null,null,null,1).subscribe(
      (data) => {
        this.showtimes1 = data.data;
        this.totalRecord=data.data.length;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  loadAllShowtimes2(): void {
    this.showtimesService.getAll(null,null,null,2).subscribe(
      (data) => {
        this.showtimes2 = data.data;
        this.totalRecord2=data.data.length;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onSearch(name1: string){
    if(name1){
     this.showtimesService.getAll(name1,null,null,null).subscribe(
       (data) => {
         this.showtimes1 = data.data;
       
       },
       (error) => {
         console.log(error);
       }
     );
     }else{
       this.loadAllShowtimes1();
     }
    }
    onSearch2(name2: string){
      if(name2){
       this.showtimesService.getAll(null,name2,null,null).subscribe(
         (data) => {
           this.showtimes2 = data.data;
           
         },
         (error) => {
           console.log(error);
         }
       );
       }else{
         this.loadAllShowtimes1();
       }
      }

  onUpdate(showtime){

    this.routerService.navigate(['/admin/listshowtimes/update'], { queryParams: {id: showtime.showtimeId} });
        // console.log(movie);
    }
    onDelete(showtime){

      this.routerService.navigate(['/admin/listshowtimes/delete'], { queryParams: {id: showtime.showtimeId} });
          // console.log(movie);
      }
}
