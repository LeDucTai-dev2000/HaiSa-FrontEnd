import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/service/userservice.service';

@Component({
  selector: 'app-cinemashowtime',
  templateUrl: './cinemashowtime.component.html',
  styleUrls: ['./cinemashowtime.component.css'],
})
export class CinemashowtimeComponent implements OnInit {
  @Input()
  cinemaid = String;
  showtime={};
  constructor(
    private userService: UserserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadShowtime();
  }

  loadShowtime() {
    this.userService.getShowtimeByCinemaId(this.cinemaid).subscribe(
      (data) => {
        this.showtime = data.data;
      },
      (error) => console.log(error)
    );
  }
}
