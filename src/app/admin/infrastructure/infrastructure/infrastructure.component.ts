import { Component, OnInit } from '@angular/core';
import {InfrastructureService} from '../../../../service/admin-service/infrastructure/infrastructure.service'
@Component({
  selector: 'app-infrastructure',
  templateUrl: './infrastructure.component.html',
  styleUrls: ['./infrastructure.component.css']
})
export class InfrastructureComponent implements OnInit {
  public  cinema1 =[]
  public  cinema2 =[]
  public  cinema3 =[]
  public  cinema4 =[]
  constructor(
    private infrastructureService: InfrastructureService
  ) { }

  ngOnInit(): void {
    this.getCinema1();
    this.getCinema2();
    this.getCinema3();
    this.getCinema4();
    
  }
  getCinema1():void{
    this.infrastructureService.getInfrastructure(1).subscribe(data =>{
      this.cinema1 = data.data
    })
  }
  getCinema2():void{
    this.infrastructureService.getInfrastructure(2).subscribe(data =>{
      this.cinema2 = data.data
    })
  }
  getCinema3():void{
    this.infrastructureService.getInfrastructure(3).subscribe(data =>{
      this.cinema3 = data.data
     
    })
  }
  getCinema4():void{
    this.infrastructureService.getInfrastructure(4).subscribe(data =>{
      this.cinema4 = data.data
  
    })
  }
}
