import { Component, OnInit } from '@angular/core';
import {TotalCinema} from '../../../model/totalCinema.model'
import { Chart } from 'chart.js';
import {TotalcinemaService} from '../../../../service/admin-service/totalCinema/totalcinema.service'
@Component({
  selector: 'app-charttotalcinema',
  templateUrl: './charttotalcinema.component.html',
  styleUrls: ['./charttotalcinema.component.css']
})
export class CharttotalcinemaComponent implements OnInit {

  data: TotalCinema[];  
  Cinema = [];  
  Total = []; 
  piechart= [];
  constructor( private totalCinemaService: TotalcinemaService,) { }

  ngOnInit(): void {

    this.totalCinemaService.getAll().subscribe((result:TotalCinema[])=>{
      result.forEach(x =>{
        this.Cinema.push(x.cinemaName);
        this.Total.push(x.total);
      });
      this
      this.piechart = new Chart('canvas', {  
        type: 'pie',  
        data: {  
          labels: this.Cinema,  
          datasets: [  
            {  
              data: this.Total,  
              borderColor: 'black',  
              backgroundColor: [  
                "#3cb371",  
                "#0000FF",  
                "#9966FF",  
                "#4C4CFF",  
                "#00FFFF",  
                "#f990a7",  
                "#aad2ed",  
                "#FF00FF",  
                "Blue",  
                "Red",  
                "Yellow"  
              ],  
              fill: true  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: true  
          },  
          scales: {  
            xAxes: [{  
              display: true  
            }],  
            yAxes: [{  
              display: true  
            }], 
          }  
        }  
      });  
    });  

 
  }

}
