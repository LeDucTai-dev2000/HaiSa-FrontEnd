import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/service/userservice.service';

@Component({
  selector: 'app-list-coming',
  templateUrl: './list-coming.component.html',
  styleUrls: ['./list-coming.component.css']
})
export class ListComingComponent implements OnInit {
  movies:[];
  pageOfItems: Array<any>;
  constructor(private userService:UserserviceService) { }

  ngOnInit(): void {
    this.loadMovieComing();
  }

  onChangePage(pageOfItems: Array<any>) {
    this.pageOfItems = pageOfItems;
  }

  loadMovieComing(): void {
    this.userService.getMovieComing().subscribe(
      (data) => {
        this.movies = data.data;
      },
      (error) => {
        console.log(error);
      }
    )
  }

}
