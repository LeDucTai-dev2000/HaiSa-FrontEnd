import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/service/userservice.service';
import { MustMatch } from '../../_helpers/must-match.validator';

@Component({
  selector: 'app-changepass',
  templateUrl: './changepass.component.html',
  styleUrls: ['./changepass.component.css'],
})
export class ChangepassComponent implements OnInit {
  change: FormGroup;
  submitted = false;
  member = JSON.parse(sessionStorage.getItem('token'));
  saipass = false;
  mess;
  pass: {
    email: any;
    oldPassword: any;
    newPassword: any;
  };
  token:{
    username: any;
    password: any;
  };
  constructor(
    private userService: UserserviceService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.change = this.formBuilder.group(
      {
        password: ['', Validators.required],
        newpass: ['', [Validators.required, Validators.minLength(6)]],
        repass: ['', Validators.required],
      },
      {
        validator: MustMatch('newpass', 'repass'),
      }
    );
  }

  get f() {
    return this.change.controls;
  }

  changePass(): void {
    this.submitted = true;
    if (this.change.invalid) {
      return;
    }

    this.pass = {
      email: this.member.username,
      oldPassword: this.change.value.password,
      newPassword: this.change.value.newpass,
    };
    this.userService.changePassword(this.pass).subscribe(
      (data) => {
        this.mess = data.data;
        if (this.mess == "Success") {
          sessionStorage.removeItem("token");
          this.token = {
            username: this.member.username,
            password:this.pass.newPassword
          }
          sessionStorage.setItem("token",JSON.stringify( this.token));
          alert("Đổi mật khẩu thành công.")
          location.replace('/');
        } else {
          this.saipass = true;
        }
      },
      (error) => console.log(error)
    );
  }
}
