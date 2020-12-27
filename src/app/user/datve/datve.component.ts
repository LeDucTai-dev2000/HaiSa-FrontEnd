import { error } from '@angular/compiler/src/util';
import { Component, OnChanges, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserserviceService } from 'src/service/userservice.service';

@Component({
  selector: 'app-datve',
  templateUrl: './datve.component.html',
  styleUrls: ['./datve.component.css'],
})
export class DatveComponent implements OnInit{
  modalRef: BsModalRef;
  showtime:any;
  id;
  i = 1;
  total;
  tot;
  min = true;
  max = false;
  seat;
  sl;
  loginFail = false;
  token = JSON.parse(sessionStorage.getItem('token'));
  constructor(
    private activatedroute: ActivatedRoute,
    private modalService: BsModalService,
    private userService: UserserviceService
  ) {}

  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((params) => {
      this.id = params.get('id');
      this.userService.setShotimeId(this.id);
    });
      this.loadMovie();
      if(this.token == null){
        this.loginFail = true;
      }
  }

  loadMovie(): void {
    this.userService.getShowtimeById().subscribe(
      (data) => {
        this.showtime = data.data;
        this.total=this.showtime.period.price;
      },
      (error) => console.log(error)
    )
  }


  onSubmit(){
    this.userService.setSetSeatQuality(this.i);
    this.userService.setTotalPriceofSeat(this.total);
  }

  tang() {
    this.i++;
    if (this.i == 10){
      this.max = true;
      this.min = false;
    }
    else{
      this.max = false;
      this.min = false;
    }
    this.loadTotal();
  }
  giam() {
    this.i--;
    if (this.i == 1){
      this.min = true;
      this.max = false;
    }
    else{
      this.min = false;
      this.max = false;
    }
    this.loadTotal();
  }
  loadTotal(): void {
    this.tot = this.i * this.showtime.period.price;
    this.total = this.tot;
  }


}
