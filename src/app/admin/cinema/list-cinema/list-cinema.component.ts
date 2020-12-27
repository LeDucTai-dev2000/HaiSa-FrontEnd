import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Cinema} from '../../../model/cinema.model';
import {CinemaService} from '../../../../service/admin-service/cinema/cinema.service';
import { disableDebugTools } from '@angular/platform-browser';
@Component({
  selector: 'app-list-cinema',
  templateUrl: './list-cinema.component.html',
  styleUrls: ['./list-cinema.component.css']
})
export class ListCinemaComponent implements OnInit {
  public cinemas: Cinema[]=[];

  constructor(
    private cinemaService: CinemaService,
    public routerService : Router
  ) { }
   check = true
  ngOnInit(): void {
    
    let checkRole = sessionStorage.getItem('ROLE');
   
    
   
    if(checkRole == 'Staff'){
      this.check = true
      
    }else {
      this.check = false
     
    }


    this.loadAllCinema();
  }
  loadAllCinema():void{
    this.cinemaService.getAll().subscribe(
      (data) =>{
        this.cinemas = data.data;
        
  
      },
      (error) =>{
        console.log(error);
      }
    )

  }

  onUpdate(cinema){

    this.routerService.navigate(['/admin/listcinema/update'], { queryParams: {id: cinema.cinemaId} });
       
    }



}
