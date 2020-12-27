import { Component, OnInit } from '@angular/core';
import { GenreMovie } from '../../../model/genremovie.model';
import {  GenremovieService} from '../../../../service/admin-service/genremovie/genremovie.service';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-list-genremovie',
  templateUrl: './list-genremovie.component.html',
  styleUrls: ['./list-genremovie.component.css']
})
export class ListGenremovieComponent implements OnInit {
  public genremovies: GenreMovie[]=[];
  totalRecord:string;
  p:number =1;

  constructor(
    private GenremovieService: GenremovieService,
    public routerService : Router
  ) { }
  check =true;
  ngOnInit(): void {
    let checkRole = sessionStorage.getItem('ROLE');
   
    if(checkRole == 'Staff'){
      this.check = true
    
    }else {
      this.check = false
    
    }
    this.loadAllGenreMovie();
  }
  loadAllGenreMovie():void{
    this.GenremovieService.getAll().subscribe(
      (data) =>{
        this.genremovies = data.data;
        this.totalRecord=data.data.length;
       
      },
      (error) =>{
        console.log(error);
      }
    )

  }

  onUpdate(genre){

    this.routerService.navigate(['/admin/listgenremovie/update'], { queryParams: {id: genre.genreId} });
       
    }
}
