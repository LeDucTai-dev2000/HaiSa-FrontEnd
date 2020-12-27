import { UserserviceService } from 'src/service/userservice.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchmovie',
  templateUrl: './searchmovie.component.html',
  styleUrls: ['./searchmovie.component.css'],
})
export class SearchmovieComponent implements OnInit {
  private name;
  movie;
  constructor(
    private userService: UserserviceService,
    private activatedroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadMovie();
  }

  loadMovie(): void {
    this.userService.getMovieFromSearch().subscribe(
      (data) => {
        this.movie = data.data;
      },
      (error) => console.log(error)
    );
  }
}
