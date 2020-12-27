import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { UserserviceService } from 'src/service/userservice.service';

@Component({
  selector: 'app-seat-select',
  templateUrl: './seat-select.component.html',
  styleUrls: ['./seat-select.component.css'],
})
export class SeatSelectComponent implements OnInit {
  seatStatus: any;
  showtimeId;
  size;
  seatStatusId = [];
  saveSeatStatusId: { seatStatusId: any };
  seatId = [];
  saveSeatId: { seatId: any };
  seatName = [];
  saveName: { name: string };
  modalRef: BsModalRef;
  chon = false;
  choose;
  dem = 0;
  changeColorTemp;
  changeColorTempDeleted;
  constructor(
    private userService: UserserviceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.showtimeId = this.userService.showtimeId;
    this.size = Number(sessionStorage.getItem('seatQuality'));
    this.loadSeat();
  }

  loadSeat(): void {
    this.userService.getSeatStatus().subscribe(
      (data) => {
        this.seatStatus = data.data;
        this.checkSeat();
      },
      (error) => console.log(error)
    );
  }

  checkSeat(): void {
    for (let i = 0; i < this.seatStatus.length; i++) {
      if (this.seatStatus[i].status == false) {
        this.dem++;
      }
    }
    if (this.size > this.dem) {
      alert(
        'Giờ chiếu này không đủ ghế dành cho bạn            ' +
          'Còn trống: ' +
          this.dem +
          ' ghế'
      );
      this.router.navigate([
        '/single-movie/' + sessionStorage.getItem('movieId'),
      ]);
    }
  }

  select(seatID: number, seatStatusID: number, seatName: string) {
    this.choose = this.seatName.findIndex((x) => x.name === seatName);
    if (this.choose !== -1) {
      this.seatName.splice(this.choose, 1);
      this.seatId.splice(this.choose, 1);
      this.seatStatusId.splice(this.choose, 1);
      if (this.seatId.length == this.size) {
        this.chon = true;
      } else {
        this.chon = false;
      }
    } else {
      if (this.seatId.length < this.size) {
        this.saveSeatStatusId = { seatStatusId: seatStatusID };
        this.seatStatusId.push(this.saveSeatStatusId);
        this.saveSeatId = { seatId: seatID };
        this.seatId.push(this.saveSeatId);
        this.saveName = { name: seatName };
        this.seatName.push(this.saveName);
        if (this.seatId.length == this.size) {
          this.chon = true;
        } else {
          this.chon = false;
        }
      } else {
        // biến tạm để đổi màu button với dữ liệu là giá trị bị xóa trong mảng seatId
        this.changeColorTemp =  this.seatId.shift();
        this.seatStatusId.shift();
        this.seatName.shift();
        this.saveSeatStatusId = { seatStatusId: seatStatusID };
        this.seatStatusId.push(this.saveSeatStatusId);
        this.saveSeatId = { seatId: seatID };
        this.seatId.push(this.saveSeatId);
        this.saveName = { name: seatName };
        this.seatName.push(this.saveName);
      }
    }
  }

  changeColor(seatID: any) {
    if (this.seatId.findIndex((x) => x.seatId === seatID) !== -1) {
      if (this.seatId.length < this.size) {
        document.getElementById(seatID).style.background = 'red';
      } else {
        if(this.changeColorTemp !== undefined ){
        document.getElementById(this.changeColorTemp.seatId).style.background = '#ffd000';
      }
        document.getElementById(seatID).style.background = 'red';
      }
    } else {
      document.getElementById(seatID).style.background = '#ffd000';
    }
  }

  onSubmit() {
    sessionStorage.setItem('listSeat', JSON.stringify(this.seatId));
    sessionStorage.setItem('listSeatStatus', JSON.stringify(this.seatStatusId));
    sessionStorage.setItem('listSeatName', JSON.stringify(this.seatName));
    this.router.navigate(['/food']);
  }
}
