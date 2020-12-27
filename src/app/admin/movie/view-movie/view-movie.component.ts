import { Component, OnInit } from '@angular/core';
import { Movie } from '../../../model/movie.model';
import { MovieService } from '../../../../service/admin-service/movie/movieservice.service';
import { GenreMovie} from '../../../model/genremovie.model';
import { GenremovieService } from '../../../../service/admin-service/genremovie/genremovie.service';
import {MovieGenreDetail} from '../../../model/moviegenredetail.model'
import { RouterModule, Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.css']
})
export class ViewMovieComponent implements OnInit {

  constructor(
    public movieService: MovieService,
    public routerService : Router,
    public activatedRoute : ActivatedRoute,
    public genremovieService: GenremovieService,
  ) { }

  ngOnInit(): void {
    this.onLoad();
  }
cinemaname: any
  public movies: Movie = {
    "description" : "",
    "duration" : null,
    "movieId" : null,
    "movieName" : "",
    "thumbnail" : "",
    "actors" : "",
    "status" : null,
    "ageLimit" : null,
    "director" : "",
    "trailer" : "",
    "listGenre":null
};
public genredetails : MovieGenreDetail[]=[]

onLoad(){
  this.activatedRoute.queryParams.subscribe(data => {
     let id : number = data.id;
    console.log(id);
    this.movieService.getAll(null,null,null,id,null).subscribe(data => {
      this.movies = data.data;
      
     
    }, error => {
      console.log(error);
    })

  this.genremovieService.getAll(null,null,id).subscribe(data =>{
     this.genredetails = data.data   
    
  })
  })
 
}
back(){
  this.routerService.navigate(['/admin/listmovie'])
}
}