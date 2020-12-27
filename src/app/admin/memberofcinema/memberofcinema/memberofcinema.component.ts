import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import {MemberticketService} from '../../../../service/admin-service/memberticket/memberticket.service'
import { Member } from '../../../model/member.model';
import { MemberService } from '../../../../service/admin-service/member/member.service';
@Component({
  selector: 'app-memberofcinema',
  templateUrl: './memberofcinema.component.html',
  styleUrls: ['./memberofcinema.component.css']
})
export class MemberofcinemaComponent implements OnInit {
  public cinema1 =[]
  public cinema2 =[]
  public cinema3 =[]
  public cinema4 =[]
  public name1:string
  public name2:string
  public name3:string
  public name4:string



  
  totalRecord1:string;
  p1: number = 1
  totalRecord2:string;
  p2: number = 1
  totalRecord3:string;
  p3: number = 1
  totalRecord4:string;
  p4: number = 1
  constructor(
    public routerService : Router,
    private memberTicket : MemberticketService,
    private memberService: MemberService
  ) { }

  ngOnInit(): void {
    this.getMembercinema1()
    this.getMembercinema2()
    this.getMembercinema3()
    this.getMembercinema4()
  }
getMembercinema1():void{
  this.memberTicket.getMemberTicket(1).subscribe(data=>{
this.cinema1 = data.data
this.totalRecord1 = data.data.length

  })
}
getMembercinema2():void{
  this.memberTicket.getMemberTicket(2).subscribe(data=>{
this.cinema2 = data.data
this.totalRecord2 = data.data.length


  })
}
getMembercinema3():void{
  this.memberTicket.getMemberTicket(1).subscribe(data=>{
this.cinema3 = data.data
this.totalRecord3 = data.data.length


  })
}
getMembercinema4():void{
  this.memberTicket.getMemberTicket(4).subscribe(data=>{
this.cinema4 = data.data
this.totalRecord4 = data.data.length


  })
}
onView(data){

  this.routerService.navigate(['/admin/viewmember'], { queryParams: {id: data.ticketId} });
       
  }
  onSearch(name1: string){
    if(name1){
     this.memberTicket.getAll(name1).subscribe(
       (data) => {
         this.cinema1 = data.data;
       
       },
       (error) => {
         console.log(error);
       }
     );
     }else{
       this.getMembercinema1();
     }
    }

    onSearch2(name2: string){
      if(name2){
       this.memberTicket.getAll(null,name2,null,null).subscribe(
         (data) => {
           this.cinema2 = data.data;
          
         },
         (error) => {
           console.log(error);
         }
       );
       }else{
         this.getMembercinema2();
       }
      }
      onSearch3(name3: string){
        if(name3){
         this.memberTicket.getAll(null,null,name3,null).subscribe(
           (data) => {
             this.cinema1 = data.data;
            
           },
           (error) => {
             console.log(error);
           }
         );
         }else{
           this.getMembercinema3();
         }
        }
        onSearch4(name4: string){
          if(name4){
           this.memberTicket.getAll(null,null,null,name4).subscribe(
             (data) => {
               this.cinema4 = data.data;
                  
             },
             (error) => {
               console.log(error);
             }
           );
           }else{
             this.getMembercinema4();
           }
          }
}
