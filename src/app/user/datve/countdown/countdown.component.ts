import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  constructor(private router: Router,) { }

  ngOnInit(): void {
  }

  onTimerFinished(e:Event){
    if (e["action"] == "done"){

    this.router.navigate(['/timeout'])
     }
   }

}
