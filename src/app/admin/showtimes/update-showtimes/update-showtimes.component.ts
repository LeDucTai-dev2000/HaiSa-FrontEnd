import { Component, OnInit } from '@angular/core';
import { Showtimes } from '../../../model/showtimes.model'
import { ShowtimesService } from '../../../../service/admin-service/showtimes/showtimes.service'
import { Router, ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../../../../service/admin-service/employee/employee.service'
import { RoomService } from '../../../../service/admin-service/room/room.service'
import { MovieService } from '../../../../service/admin-service/movie/movieservice.service'
import { PeriodService } from '../../../../service/admin-service/period/period.service'
import { Employee } from '../../../model/employee.model'
import { Movie } from '../../../model/movie.model'
import { Period } from '../../../model/period.model'
import { Room } from '../../../model/room.model'
import { Cinema } from '../../../model/cinema.model'
import { CinemaService } from '../../../../service/admin-service/cinema/cinema.service'
import { NullTemplateVisitor } from '@angular/compiler';
import { FormBuilder, FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
@Component({
  selector: 'app-update-showtimes',
  templateUrl: './update-showtimes.component.html',
  styleUrls: ['./update-showtimes.component.css']
})
export class UpdateShowtimesComponent implements OnInit {
  public employees: Employee[] = [];
  public movies: Movie[] = [];
  public periods: Period[] = [];
  public rooms: Room[] = [];
  public cinemas: Cinema[] = [];
  form: FormGroup;

  constructor(
    public routerService: Router,
    public activatedRoute: ActivatedRoute,
    public showtimesService: ShowtimesService,
    private movieService: MovieService,
    private roomService: RoomService,
    private periodService: PeriodService,
    private employeeService: EmployeeService,
    public cinemaService: CinemaService,
    private fb: FormBuilder,
  ) { }

  public date: Date
  public employeeId: number
  public movieId: number
  public periodId: number
  public roomId: number
  public showtimeId: number


  // public movies1:any
  ngOnInit(): void {
    this.onLoad();

    this.form = this.fb.group({
      employeeId: [],
      movieId: [],
      roomId: [],
      showtimeId: [],
      periodId: [],
      date: []
    })
    this.loadAllMovie();
    this.loadAllPeriod();
    this.loadAllRoom();
    this.loadAllEmployee();
    this.loadAllCinema();
  }

  onLoad() {
    this.activatedRoute.queryParams.subscribe(data => {
      let id: number = data.id;
      
      this.showtimesService.getAll(null,null, id, null).subscribe(data => {
        this.employeeId = data.data.employee.employeeId
        this.showtimeId = data.data.showtimeId
        this.roomId = data.data.room.roomId
        this.date = data.data.date
        this.periodId = data.data.period.periodId
        this.movieId = data.data.movie.movieId
        this.form = this.fb.group({
          employeeId: [this.employeeId],
          movieId: [this.movieId],
          roomId: [this.roomId],
          showtimeId: [this.showtimeId],
          periodId: [this.periodId],
          date: [this.date]
        })
      }, error => {
        console.log(error);
      })
    })
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

  loadAllEmployee(): void {
    this.employeeService.getAll(null, null, null, null).subscribe(
      (data) => {
        this.employees = data.data;
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

  onupdateShowtimes() {
    this.showtimesService.updateShowtimes(this.form.value).subscribe(data => {
      let showtime = data.data;
        if (showtime === 'DATA NOT FOUND!') {
          alert('The showtime has NOT been updated, Showtime not exists')
        } else if (showtime === 'error') {
          alert('The showtime has NOT been updated, You cannot update showtime with date smaller than the current date')
        } else {
          alert('The showtime has been updated successfully')
        }
      this.routerService.navigate(['/admin/listshowtimes']);
    }, error => {
      console.log(error);
      this.routerService.navigate(['/admin/listshowtimes']);
    })
  }

  back() {
    this.routerService.navigate(['/admin/listshowtimes'])
  }
}


