import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../../service/userservice.service';

@Component({
  selector: 'app-theater',
  templateUrl: './theater.component.html',
  styleUrls: ['./theater.component.css'],
})
export class TheaterComponent implements OnInit {
  cinemas: [];
  constructor(private userService: UserserviceService) {}

  ngOnInit(): void {
    this.loadAllCinemas();
  }

  loadAllCinemas(): void {
    this.userService.getAllCinema().subscribe(
      (data) => {
        this.cinemas = data.data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
