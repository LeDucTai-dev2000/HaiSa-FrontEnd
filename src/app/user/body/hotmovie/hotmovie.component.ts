import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/service/userservice.service';

@Component({
  selector: 'app-hotmovie',
  templateUrl: './hotmovie.component.html',
  styleUrls: ['./hotmovie.component.css'],
})
export class HotmovieComponent implements OnInit {
  movies;
  constructor(
    private userService: UserserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadHotMovie();
  }

  loadHotMovie(): void {
    this.userService.getHotMovie().subscribe(
      (data) => {
        this.movies = data.data;
      },
      (error) => console.log(error)
    );
  }
}
