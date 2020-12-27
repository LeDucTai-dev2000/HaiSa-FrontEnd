import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../../../service/admin-service/employee/employee.service'
import { RoomService } from '../../../../service/admin-service/room/room.service'
import { MovieService } from '../../../../service/admin-service/movie/movieservice.service'
import { PeriodService } from '../../../../service/admin-service/period/period.service'
import { Employee } from '../../../model/employee.model'
import { Movie } from '../../../model/movie.model'
import { Period } from '../../../model/period.model'
import { Room } from '../../../model/room.model'
import { Showtimes } from '../../../model/showtimes.model'
import { ShowtimesService } from '../../../../service/admin-service/showtimes/showtimes.service'
import { Cinema } from '../../../model/cinema.model'
import { CinemaService } from '../../../../service/admin-service/cinema/cinema.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-showtimes',
  templateUrl: './add-showtimes.component.html',
  styleUrls: ['./add-showtimes.component.css']
})

export class AddShowtimesComponent implements OnInit {
  public employees: Employee[] = [];
  public movies: Movie[] = [];
  public periods: Period[] = [];
  public rooms: Room[] = [];
  public showtimes: Showtimes[] = [];
  public cinemas: Cinema[] = [];

  public showtimeId: number;
  public movieId: number;
  public roomId: number;
  public date: Date;
  public periodId: number;
  public employeeId: number;
  public cinemaId: number;
  public status: number;

  constructor(
    private movieService: MovieService,
    private roomService: RoomService,
    private showtimesService: ShowtimesService,
    private periodService: PeriodService,
    private employeeService: EmployeeService,
    public routerService: Router,
    public cinemaService: CinemaService) { }

  formcheck = new FormGroup({
    movie: new FormControl('', Validators.required),
    period: new FormControl('', Validators.required),
    room: new FormControl('', Validators.required),
    date: new FormControl('', Validators.required)
  })

  // public employeeId =1

  ngOnInit(): void {
    this.getName();
    this.loadAllMovie();
    this.loadAllPeriod();
    this.loadAllRoom();
    this.loadAllCinema();
    this.loadEmployee();

  }
  loadAllMovie(): void {
    this.movieService.getAll(null, null, null, null, 0).subscribe(
      (data) => {
        this.movies = data.data;
      
      },
      (error) => {
        console.log(error);
      }
    );
  }
  loadAllPeriod(): void {
    this.periodService.getAll(null, null).subscribe(
      (data) => {
        this.periods = data.data;
       
      },
      (error) => {
        console.log(error);
      }
    );
  }
  loadAllRoom(): void {
    this.roomService.getAll().subscribe(
      (data) => {
        this.rooms = data.data;

       

      },
      (error) => {
        console.log(error);
      }
    );
  }

  public name: string
  getName() {
    const currentUser = JSON.parse(sessionStorage.getItem('token'));
    this.name = currentUser.username
    // console.log(this.name)
  }

  loadEmployee(): void {
    this.showtimesService.getEmployeeId(this.name).subscribe(
      (data) => {
      
        this.employeeId = data.data.employeeId;
       
      },
      (error) => {
        console.log(error);
      }
    );
  }
  loadAllCinema(): void {
    this.cinemaService.getAll(null, null).subscribe(
      (data) => {
        this.cinemas = data.data;
       
      },
      (error) => {
        console.log(error);
      }
    );
  }
  onaddShowtimes() {
    let showtime = new Showtimes(this.showtimeId, this.movieId, this.roomId, this.date, this.periodId, this.employeeId, this.status)
    this.showtimesService.addShowtimes(showtime).subscribe(
      data => {
        let showtime = data.data;
        if (showtime === 'Data already exists') {
          alert('The showtime has NOT been added, Data already exists')
        } else if (showtime === 'error'){
          alert('The showtime has NOT been added, You cannot add showtime with date smaller than the current date')
        } else {
          alert('The showtime has been added successfully')
        }
        this.routerService.navigate(['/admin/listshowtimes']);
      },
      error => {
        this.routerService.navigate(['/admin/listshowtimes']);
      }
    )
  }

  back() {
    this.routerService.navigate(['/admin/listshowtimes'])
  }
}
