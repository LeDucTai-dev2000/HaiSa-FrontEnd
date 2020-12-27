import { Component, OnInit } from '@angular/core';
import { UserserviceService } from 'src/service/userservice.service';

@Component({
  selector: 'app-member-history',
  templateUrl: './member-history.component.html',
  styleUrls: ['./member-history.component.css'],
})
export class MemberHistoryComponent implements OnInit {
  ticket;
  date;
  constructor(private userService: UserserviceService) {}

  ngOnInit(): void {
    this.loadTickets();
  }
  loadTickets(): void {
    this.userService.getTicketByMemberId().subscribe(
      (data) => {
        this.ticket = data.data;
      },
      (err) => {
        console;
      }
    );
  }
}
