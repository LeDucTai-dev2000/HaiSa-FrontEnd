import { Component, OnInit } from '@angular/core';
import {CountTicketMovie} from '../../../model/countticketmovie.model'
import { Chart } from 'chart.js';
import {CountticketmovieService} from '../../../../service/admin-service/countticket/countticketmovie.service'
@Component({
  selector: 'app-countviewmovie',
  templateUrl: './countviewmovie.component.html',
  styleUrls: ['./countviewmovie.component.css']
})
export class CountviewmovieComponent implements OnInit {
  data: CountTicketMovie[];  
  TicketQuantity = [];  
  MovieName = []; 
  barchart= [];
  constructor(private countticketmovieService: CountticketmovieService) { }

  ngOnInit(): void {

    this.countticketmovieService.getAll().subscribe((result:CountTicketMovie[])=>{
      result.forEach(x =>{
        this.TicketQuantity.push(x.ticketQuantity);
        this.MovieName.push(x.movieName);
      });
      this
      this.barchart = new Chart('canvas2', {  
        type: 'bar',  
        data: {  
          labels: this.MovieName,  
          datasets: [  
            {  
              data: this.TicketQuantity,  
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
                "Blue"  
              ],  
              fill: true  
            }  
          ]  
        },  
        options: {  
          legend: {  
            display: false 
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
