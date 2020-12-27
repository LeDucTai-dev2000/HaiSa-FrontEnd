import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserserviceService } from 'src/service/userservice.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  movies:[];
  pageOfItems: Array<any>;
  constructor(private userService: UserserviceService) { }
@ViewChild('audioElement') audioElement:ElementRef;
  ngOnInit(): void {
    this.loadMovie();
  }
ngAfterViewInit(): void {
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
