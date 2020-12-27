import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/service/userservice.service';

@Component({
  selector: 'app-them',
  templateUrl: './them.component.html',
  styleUrls: ['./them.component.css']
})
export class ThemComponent implements OnInit {

  constructor(private userService: UserserviceService, private router: Router) { }

  ngOnInit(): void {
  }

  Logout(){
    sessionStorage.clear();
    location.replace("/")
  }
}
