import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from 'src/service/userservice.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css']
})
export class SingleMovieComponent implements OnInit {
  private id;
  movie:any;
  genres: any;
  constructor(private activatedroute:ActivatedRoute, private userService: UserserviceService) { }

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.userService.setMovieId(this.id);
      this.loadMovie();
      this.loadGenre();
  });
  }

  loadMovie(): void {
    this.userService.getMovieById().subscribe(
      (data) => {
        this.movie = data.data;
        this.userService.setMovieName(this.movie.movieName);
    },
    (error) => {
      console.log(error);
    }
      )
  }

  loadGenre(): void {
    this.userService.getGenreByMovieId().subscribe(
      (data) => {
        this.genres = data.data;
    },
    (error) => {
      console.log(error);
    }
    )
  }
}
