import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/service/userservice.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
})
export class TimelineComponent implements OnInit {
  showtime: any;
  member;

  constructor(
    private userService: UserserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.member = JSON.parse(sessionStorage.getItem('token'));
    this.loadShowtime();
  }

  loadShowtime(): void {
    this.userService.getShowtimeByMovieId().subscribe(
      (data) => {
        this.showtime = data.data;
      },
      (error) => console.log(error)
    );
  }

  choose(id: any): void {
    this.router.navigate(['/ticketing', id]);
  }
}
