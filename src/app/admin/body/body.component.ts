import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../../assets/js/canvasjs.min.js';
import {TotalCinema} from '../../model/totalCinema.model'
import { Chart } from 'chart.js';
import {TotalcinemaService} from '../../../service/admin-service/totalCinema/totalcinema.service'
import {ViewService} from '../../../service/admin-service/listview/view.service'
import {FindCount} from '../../model/findcount.model';
import { AuthenticationServiceService } from 'src/service/authen-service/authentication-service.service.js';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  data: TotalCinema[];  
  Cinema = [];  
  Total = []; 
  barchart= [];
  name :string
countmovie:number
countmember:number
countticket:number
countfeedback:number
  findcount: FindCount[]=[]
  constructor(
    private totalCinemaService: TotalcinemaService,
    private viewService : ViewService,
    private authenService: AuthenticationServiceService
  ) { }

  ngOnInit(): void {
   this.onLoadFindCount();
    }  

onLoadFindCount():void{
  this.viewService.getFindCount().subscribe((data)=>{
    this.countmovie = data.data.movie
    this.countfeedback = data.data.feedback
    this.countmember = data.data.member
    this.countticket = data.data.ticket
  })
}

      }