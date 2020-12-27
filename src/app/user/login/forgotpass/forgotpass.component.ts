import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/service/userservice.service';

@Component({
  selector: 'app-forgotpass',
  templateUrl: './forgotpass.component.html',
  styleUrls: ['./forgotpass.component.css'],
})
export class ForgotpassComponent implements OnInit {
  forgot: FormGroup;
  submitted = false;
  mail: {
    email: any;
  };
  saiMail = false;
  failMail = false;
  constructor(
    private userService: UserserviceService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.forgot = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  get f() {
    return this.forgot.controls;
  }

  getEmail() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.forgot.invalid) {
      return;
    }

    this.mail = {
      email: this.forgot.value.email,
    };
    this.userService.forgotPassword(this.mail).subscribe((data) => {
      if ((data.data == "DATA NOT FOUND!")) {
        this.saiMail = true;
      }
      else if ((data.data == "error")){
        this.failMail = true;
      }
      else{
        this.router.navigate(['/backlogin']);
      }
    });


  }
}
