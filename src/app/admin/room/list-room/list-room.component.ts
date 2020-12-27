
import { Component, OnInit } from '@angular/core';
import { Room } from './../../../model/room.model';
import { RoomService } from './../../../../service/admin-service/room/room.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.css']
})
export class ListRoomComponent implements OnInit {

  public rooms: Room[]=[];
  totalRecord:string;
  p:number =1;
  constructor(
    private roomService: RoomService,
    public routerService : Router
  ) { }
check =true;
  ngOnInit(): void {
    
    let checkRole = sessionStorage.getItem('ROLE');
    console.log(checkRole)
    if(checkRole == 'Staff'){
      this.check = true
     
    }else {
      this.check = false
     
    }


    this.loadAllRoom();
  }

  loadAllRoom(): void{
    this.roomService.getAll().subscribe(
      (data) =>{
        this.rooms = data.data;
        this.totalRecord=data.data.length;
       
      },
      (error) =>{
        console.log(error);
      }
    )
  }

}
