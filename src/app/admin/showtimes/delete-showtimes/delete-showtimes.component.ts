import { Component, OnInit } from '@angular/core';
import {Showtimes} from '../../../model/showtimes.model'
import {ShowtimesService} from '../../../../service/admin-service/showtimes/showtimes.service'
import { RouterModule, Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-delete-showtimes',
  templateUrl: './delete-showtimes.component.html',
  styleUrls: ['./delete-showtimes.component.css']
})
export class DeleteShowtimesComponent implements OnInit {

  public showtimes: Showtimes={
    "date":null,
    "employeeId":null,
    "movieId":null,
    "periodId":null,
    "roomId":null,
    "showtimeId":null,
    "status":null
  }

  constructor(
    public showtimesService: ShowtimesService,
    public routerService : Router,
    public activatedRoute : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.onLoad()
  }
  
  onLoad(){
    this.activatedRoute.queryParams.subscribe(data => {
       let id : number = data.id;
     
      this.showtimesService.getAll(null,null,id,null).subscribe(data => {
        this.showtimes = data.data;
       
      }, error => {
        console.log(error);
      })
    })
  }

  onDelete(answer : boolean){
    if (answer) {
  
      this.showtimesService.deleteShowtimes(this.showtimes.showtimeId).subscribe(data => {
         this.routerService.navigate(['/admin/listshowtimes']);
       
        alert("The showtime has been deleted successfully")
      }, error => {
         console.log(error);
        // console.log(this.movies.movieId)
      })
    } else {
      this.routerService.navigate(['/admin/listshowtimes']);
      
    }

  }
}
