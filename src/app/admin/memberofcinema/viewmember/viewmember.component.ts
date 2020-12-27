import { Component, OnInit } from '@angular/core';
import {MemberticketService} from '../../../../service/admin-service/memberticket/memberticket.service'
import { RouterModule, Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-viewmember',
  templateUrl: './viewmember.component.html',
  styleUrls: ['./viewmember.component.css']
})
export class ViewmemberComponent implements OnInit {
  ticketId: number;
  code: string;
  memberName: string;
  birthday: Date;
  movieName: string;
  startTime: string;
  roomName: number;
  name: string;
  ticketPriceAmount:number;
  ticketQuantity: number;
  total: number;
  totalFood:number
  constructor(
    public routerService : Router,
    public activatedRoute : ActivatedRoute,
    private memberTicket : MemberticketService
  ) { }

  ngOnInit(): void {
this.onLoad()
  }

  onLoad(){
    this.activatedRoute.queryParams.subscribe(data => {
       let id : number = data.id;
     
      this.memberTicket.getNameMember(id).subscribe(data => {
        this.ticketId = data.data.ticketId  
        this.code = data.data.code
        this.memberName = data.data.member.memberName
        this.birthday = data.data.member.birthday
        this.movieName = data.data.showtimes.movie.movieName
        this.startTime = data.data.showtimes.period.startTime
        this.roomName = data.data.showtimes.room.roomName
        this.name = data.data.showtimes.room.cinema.name
        this.ticketPriceAmount = data.data.ticketPriceAmount
        this.ticketQuantity = data.data.ticketQuantity
        this.total = data.data.total
        
        this.totalFood = this.total - this.ticketPriceAmount
       
      }, error => {
        console.log(error);
      })

    })
   
  }

}
