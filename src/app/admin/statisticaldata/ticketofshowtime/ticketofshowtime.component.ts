import { Component, OnInit } from '@angular/core';
import {TicketOfShowtime} from '../../../model/ticketofshowtime.model';
import {StatisticalService} from '../../../../service/admin-service/statistical/statistical.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-ticketofshowtime',
  templateUrl: './ticketofshowtime.component.html',
  styleUrls: ['./ticketofshowtime.component.css']
})
export class TicketofshowtimeComponent implements OnInit {
  public ticketshowtimes1 : TicketOfShowtime[]=[]
  public ticketshowtimes2 : TicketOfShowtime[]=[]
  public ticketshowtimes3 : TicketOfShowtime[]=[]
  public ticketshowtimes4 : TicketOfShowtime[]=[]
  totalRecord1:string;
  totalRecord2:string;
  totalRecord3:string;
  totalRecord4:string;
  p1: number = 1;
  p2: number = 1;
  p3: number = 1;
  p4: number = 1;
  constructor(
    private statisticalService: StatisticalService
  ) { }

  ngOnInit(): void {
this.getAllTicketOfShowtime1();
this.getAllTicketOfShowtime2();
this.getAllTicketOfShowtime3();
this.getAllTicketOfShowtime4();
  }
getAllTicketOfShowtime1():void{
  this.statisticalService.getTicketOfShowtime(1).subscribe(data =>{
    this.ticketshowtimes1 = data.data
    this.totalRecord1=data.data.length;
   
  })
}
getAllTicketOfShowtime2():void{
  this.statisticalService.getTicketOfShowtime(2).subscribe(data =>{
    this.ticketshowtimes2 = data.data
    this.totalRecord2=data.data.length;
    
  })
}
getAllTicketOfShowtime3():void{
  this.statisticalService.getTicketOfShowtime(3).subscribe(data =>{
    this.ticketshowtimes3 = data.data
    this.totalRecord3=data.data.length;
   
  })
}
getAllTicketOfShowtime4():void{
  this.statisticalService.getTicketOfShowtime(4).subscribe(data =>{
    this.ticketshowtimes4 = data.data
    this.totalRecord4=data.data.length;
   
  })
}

// xuất excel
// cinema1
fileName= 'showtime.xlsx';
  exportexcel(): void
    {
       /* table id is passed over here */
       let element = document.getElementById('excel-table');
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName);

    }
  // cinema2
  fileName2= 'showtime2.xlsx';
  exportexcel2(): void
    {
       /* table id is passed over here */
       let element = document.getElementById('excel-table-2');
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName2);

    }
  //cinema3
  fileName3= 'showtime3.xlsx';
  exportexcel3(): void
    {
       /* table id is passed over here */
       let element = document.getElementById('excel-table-3');
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName3);

    }

  //cinema4
  fileName4= 'showtime3.xlsx';
  exportexcel4(): void
    {
       /* table id is passed over here */
       let element = document.getElementById('excel-table-4');
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

       /* save to file */
       XLSX.writeFile(wb, this.fileName4);

    }
}
