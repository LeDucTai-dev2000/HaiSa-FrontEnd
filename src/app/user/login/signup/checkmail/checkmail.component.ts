import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/service/userservice.service';

@Component({
  selector: 'app-checkmail',
  templateUrl: './checkmail.component.html',
  styleUrls: ['./checkmail.component.css'],
})
export class CheckmailComponent implements OnInit {
  checkmail: FormGroup;
  member;
  code;
  sai = false;
  saiMail= false;
  submitted = false;
  constructor(
    private userService: UserserviceService,
    private router: Router, private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.member = JSON.parse(sessionStorage.getItem('member'));
    this.loadCode();
    this.checkmail = this.formBuilder.group({
      code: ['', Validators.required]})
  }

  get f() { return this.checkmail.controls; }

  loadCode(): void {
    this.userService.getCode(this.member.email).subscribe(
      (data) => {

        if(data.data == "Data already exists"){
          this.saiMail = true;
        }
        else {
          this.code = data.data;
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addMember() {
    if (this.checkmail.value.code == this.code) {
      this.userService.addMembers(this.member).subscribe(
        (data) => {},
        (error) => {
          console.log(error);
        }
      );
      sessionStorage.removeItem("member");
      this.router.navigate(["/welcome"])
    } else {
      this.sai = true;
    }
  }

  remove(){
    sessionStorage.removeItem("member");
    this.router.navigate(["/sign-up"])
  }
}
