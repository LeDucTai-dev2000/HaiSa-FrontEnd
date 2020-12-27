import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Room } from './../../../model/room.model';
import { Router } from '@angular/router';
import { RoomService } from './../../../../service/admin-service/room/room.service';
import { Component, OnInit } from '@angular/core';
import  {Cinema} from '../../../model/cinema.model';
import {CinemaService} from '../../../../service/admin-service/cinema/cinema.service';
@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {
  public room: Room[]=[];
  public cinemas: Cinema[] = [];
  roomID:number;
  roomName:number;
  seatAmount:number;
  cinemaId:number;
  constructor(
    private roomService: RoomService,
    private cinemaService: CinemaService,
    public routerService : Router
  ) { }

  formcheck = new FormGroup({
    RoomName: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
    SeatAmount: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")]),
    CinemaId: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")])
  })

  ngOnInit(): void {
    this.loadAllCinema()

  }

  onaddRoom(){

    let room = new Room(this.roomID,this.roomName,this.seatAmount,this.cinemaId)
    this.roomService.addRoom(room).subscribe(
      data => {
        this.room = data.data;
        alert('The room has been added successfully')
        this.routerService.navigate(['/admin/listroom']);
       
      },
      error => {
        console.log(error);
      }
    )

  }
  back(){
    this.routerService.navigate(['/admin/listroom'])
  }
  loadAllCinema(): void {
    this.cinemaService.getAll().subscribe(
      (data) => {
        this.cinemas = data.data;

       

      },
      (error) => {
        console.log(error);
      }
    );
  }
}
