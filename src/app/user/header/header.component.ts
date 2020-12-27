import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/service/userservice.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
token;
member;
  constructor(private userService: UserserviceService, private router: Router) { }

  ngOnInit(): void {
    this.token = JSON.parse(sessionStorage.getItem('token'));
    if(this.token !== null){
    this.loadName(this.token.username)}
  }

  onSubmit(i: any) {
    this.userService.setSearchName(i);
    location.replace("/search");
  }

  loadName(email: any):void {

    this.userService.getNameMember(email).subscribe((data) => {
      this.member = data.data;
        sessionStorage.setItem("memberId",this.member.memberId);
        sessionStorage.setItem('InfoMember',JSON.stringify(this.member))
      },
      (error) => { console.log(error) })
  }
}
