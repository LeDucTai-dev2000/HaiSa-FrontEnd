import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Cinema} from '../../../model/cinema.model';
import {CinemaService} from '../../../../service/admin-service/cinema/cinema.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-update-cinema',
  templateUrl: './update-cinema.component.html',
  styleUrls: ['./update-cinema.component.css']
})
export class UpdateCinemaComponent implements OnInit {

  public cinemas: Cinema ={
    "cinemaId":null,
    "name":"",
    "address":""

  }
  constructor(
    public cinemaService : CinemaService,
    public routerService : Router,
    public activatedRoute : ActivatedRoute
  ) { }

  formcheck = new FormGroup({
    Name: new FormControl('',[Validators.required,Validators.pattern(/[!^\w\s]$/)]),
    Address: new FormControl('',[Validators.required,Validators.pattern(/[!^\w\s]$/)])
  })

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad(){
    this.activatedRoute.queryParams.subscribe(data => {
       let id : number = data.id;
    
      this.cinemaService.getAll(null,id).subscribe(data => {
        this.cinemas = data.data;
      
      }, error => {
        console.log(error);
      })
    })
  }
  onupdateCinema(){
    this.cinemaService.updateCinema(this.cinemas).subscribe(data => {
   
      alert('The cinema has been updated successfully')
      this.routerService.navigate(['/admin/listcinema']);
    }, error => {
      console.log(error);
    })
  }
  back(){
    this.routerService.navigate(['/admin/listcinema'])
  }
}
