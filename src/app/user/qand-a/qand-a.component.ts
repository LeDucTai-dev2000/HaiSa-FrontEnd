import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/model/feedback.model';
import { UserserviceService } from 'src/service/userservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-qand-a',
  templateUrl: './qand-a.component.html',
  styleUrls: ['./qand-a.component.css']
})
export class QandAComponent implements OnInit {
  feebackId: number;
  email: string;
  sdt: string;
  content: string;
  constructor(private userService: UserserviceService, private router: Router) { }


  formcheck = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.pattern(/[!^\w\s]$/), Validators.email]),
    sdt: new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]),
    content: new FormControl('', Validators.required)
  })
  ngOnInit(): void {
  }

  addFB: {
    email: String;
    phone: String;
    content: String;
  };

  onSubmit() {
    let feedback = new Feedback(this.feebackId, this.email, this.sdt, this.content)
    this.userService.addFB(feedback).subscribe((data) => {
    });
    this.router.navigate(["/thank"])
  };

}
