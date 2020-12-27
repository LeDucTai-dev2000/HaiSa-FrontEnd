import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/service/userservice.service';
import { MustMatch } from '../../_helpers/must-match.validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signup: FormGroup;
  submitted = false;
  saimail = false;
  Member: {
      memberName : any;
      email : any;
      phone : any;
      password : any;
  }
  constructor(private userService: UserserviceService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.signup = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11), Validators.pattern(/^[0-9]*$/)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      repass: ['', Validators.required],

  }, {
      validator: MustMatch('password', 'repass')
  });
  }

  get f() { return this.signup.controls; }

  addMember(){

    this.submitted = true;
    // stop here if form is invalid
    if (this.signup.invalid) {
        return;
    }
    this.Member={
      memberName: this.signup.value.name,
      email: this.signup.value.email,
      phone: this.signup.value.phone,
      password: this.signup.value.password,
    }
    sessionStorage.setItem('member',JSON.stringify(this.Member))
    this.router.navigate(["/check-mail"])

  }
}
