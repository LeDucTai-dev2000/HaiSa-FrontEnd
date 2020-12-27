import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/service/userservice.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css'],
})
export class EdituserComponent implements OnInit {
  info: FormGroup;
  submitted = false;
  infoMember;
  member: {
    memberId: any;
    memberName: any;
    phone: any;
    address: any;
    birthday: any;
    idCard: any;
  };
  constructor(
    private userService: UserserviceService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.infoMember = JSON.parse(sessionStorage.getItem('InfoMember'));
    this.info = this.formBuilder.group({
      name: [this.infoMember.memberName, Validators.required],
      phone: [
        this.infoMember.phone,
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(11),
          Validators.pattern(/^[0-9]*$/),
        ],
      ],
      address: [this.infoMember.address, Validators.required],
      //  date format yyyy-mm-dd
      date: [
        this.infoMember.birthday,
        [
          Validators.required,
          Validators.pattern(
            /^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/
          ),
        ],
      ],
      idcard: [
        this.infoMember.idCard,
        [
          Validators.required,
          Validators.minLength(9),
          Validators.maxLength(12),
          Validators.pattern(/^[0-9]*$/),
        ],
      ],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.info.controls;
  }

  updateMember() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.info.invalid) {
      return;
    }

    this.member = {
      memberId: sessionStorage.getItem('memberId'),
      memberName: this.info.value.name,
      phone: this.info.value.phone,
      address: this.info.value.address,
      birthday: this.info.value.date,
      idCard: this.info.value.idcard,
    };
    this.userService.updateMembers(this.member).subscribe((data) => {
      sessionStorage.setItem('InfoMember',JSON.stringify(this.member));
      this.router.navigate(["/done"])
    });
  }
}
