import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Movie } from '../../../model/movie.model';
import { MovieService } from '../../../../service/admin-service/movie/movieservice.service';
import { RouterModule, Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {

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
  constructor(
    public movieService: MovieService,
    public routerService : Router,
    public activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.onLoad();
  }

  onLoad(){
    this.activatedRoute.queryParams.subscribe(data => {
       let id : number = data.id;
   
      this.movieService.getAll(null,null,null,id,null).subscribe(data => {
        this.movies = data.data;
       
      }, error => {
        console.log(error);
      })
    })
  }

  onDelete(answer : boolean){
    if (answer) {
  
      this.movieService.deleteMovie(this.movies.movieId).subscribe(data => {
         this.routerService.navigate(['/admin/listmovie']);
        alert("STOPS SHOWING SUCCESS")
        
      }, error => {
         console.log(error);
        // console.log(this.movies.movieId)
      })
    } else {
      this.routerService.navigate(['/admin/listmovie']);
     
    }

  }

}
