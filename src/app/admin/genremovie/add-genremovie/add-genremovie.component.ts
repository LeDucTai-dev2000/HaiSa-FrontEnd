import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {GenreMovie} from '../../../model/genremovie.model';
import  {GenremovieService} from '../../../../service/admin-service/genremovie/genremovie.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-genremovie',
  templateUrl: './add-genremovie.component.html',
  styleUrls: ['./add-genremovie.component.css']
})
export class AddGenremovieComponent implements OnInit {

  public genres: GenreMovie[]=[];
  genreId:number;
  name:string;
  constructor(
    private GenremovieService: GenremovieService,
    public routerService : Router
  ) { }

    formcheck = new FormGroup({
      Name: new FormControl('',[Validators.required,Validators.pattern(/[!^\w\s]$/)])
    })

  ngOnInit(): void {
  }
  onaddGenre(){
    console.log(`${this.genreId}-${this.name}`);
    let genre = new GenreMovie(this.genreId,this.name)
    this.GenremovieService.addGenre(genre).subscribe(
      data => {
        this.genres = data.data;
        alert('The genre movie has been added successfully')
        this.routerService.navigate(['/admin/listgenremovie']);
        

      },
      error => {
        console.log(error);
      }
    )

  }
  back(){
    this.routerService.navigate(['/admin/listgenremovie'])
  }
}
