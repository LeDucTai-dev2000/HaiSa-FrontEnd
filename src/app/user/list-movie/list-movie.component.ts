import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../../../service/userservice.service';

@Component({
  selector: 'app-list-movie',
  templateUrl: './list-movie.component.html',
  styleUrls: ['./list-movie.component.css']
})
export class ListMovieComponent implements OnInit {
movies:[];
pageOfItems: Array<any>;
  constructor(private userService: UserserviceService) { }

  ngOnInit(): void {
    this.loadMovie();
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

loadMovie(): void {
  this.userService.getMovie().subscribe(
    (data) => {
      this.movies = data.data;
    },
    (error) => {
      console.log(error);
    }
  )
}

}
