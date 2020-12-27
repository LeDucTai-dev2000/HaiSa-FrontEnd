import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Cinema} from '../../../model/cinema.model';
import {CinemaService} from '../../../../service/admin-service/cinema/cinema.service';
@Component({
  selector: 'app-add-cinema',
  templateUrl: './add-cinema.component.html',
  styleUrls: ['./add-cinema.component.css']
})
export class AddCinemaComponent implements OnInit {
  public cinemas: Cinema[]=[];
  cinemaId:number;
  name:string;
  address:string;

  constructor(
    private cinemaService: CinemaService,
    public routerService : Router
  ) { }

    formcheck = new FormGroup({
      Name: new FormControl('',[Validators.required,Validators.pattern(/[!^\w\s]$/)]),
      Address: new FormControl('',[Validators.required,Validators.pattern(/[!^\w\s]$/)])
    })

  ngOnInit(): void {
  }
  onaddCinema(){

    let cinema = new Cinema(this.cinemaId,this.name,this.address)
    this.cinemaService.addCinema(cinema).subscribe(
      data => {
        this.cinemas = data.data;
        alert('The cinema has been added successfully')
        this.routerService.navigate(['/admin/listcinema']);
      

      },
      error => {
        console.log(error);
      }
    )

  }
  back(){
    this.routerService.navigate(['/admin/listcinema'])
  }
}
