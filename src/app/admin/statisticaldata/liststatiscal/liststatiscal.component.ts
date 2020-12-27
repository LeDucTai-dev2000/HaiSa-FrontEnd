import { Component, OnInit } from '@angular/core';
import {TicketOfMonth} from '../../../model/ticketofmonth.model';
import {StatisticalService} from '../../../../service/admin-service/statistical/statistical.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-liststatiscal',
  templateUrl: './liststatiscal.component.html',
  styleUrls: ['./liststatiscal.component.css']
})
export class ListstatiscalComponent implements OnInit {
  public month1 : TicketOfMonth[]=[]
  public month2 : TicketOfMonth[]=[]
  public month3 : TicketOfMonth[]=[]
  public month4 : TicketOfMonth[]=[]
  public month5 : TicketOfMonth[]=[]
  public month6 : TicketOfMonth[]=[]
  public month7 : TicketOfMonth[]=[]
  public month8 : TicketOfMonth[]=[]
  public month9 : TicketOfMonth[]=[]
  public month10 : TicketOfMonth[]=[]
  public month11 : TicketOfMonth[]=[]
  public month12 : TicketOfMonth[]=[]

  totalRecord1:string;
  totalRecord2:string;
  totalRecord3:string;
  totalRecord4:string;
  totalRecord5:string;
  totalRecord6:string;
  totalRecord7:string;
  totalRecord8:string;
  totalRecord9:string;
  totalRecord10:string;
  totalRecord11:string;
  totalRecord12:string;
  p1: number = 1;
  p2: number = 1;
  p3: number = 1;
  p4: number = 1;
  p5: number = 1;
  p6: number = 1;
  p7: number = 1;
  p8: number = 1;
  p9: number = 1;
  p10: number = 1;
  p11: number = 1;
  p12: number = 1;
  constructor(
    private statisticalService: StatisticalService
  ) { }

  ngOnInit(): void {
    this.getAllTicketOfMonth1();
    this.getAllTicketOfMonth2();
    this.getAllTicketOfMonth3();
    this.getAllTicketOfMonth4();
    this.getAllTicketOfMonth5();
    this.getAllTicketOfMonth6();
    this.getAllTicketOfMonth7();
    this.getAllTicketOfMonth8();
    this.getAllTicketOfMonth9();
    this.getAllTicketOfMonth10();
    this.getAllTicketOfMonth11();
    this.getAllTicketOfMonth12();
  }

  getAllTicketOfMonth1():void{
    this.statisticalService.getTicketOfMonth(1).subscribe(data =>{
      this.month1 = data.data
      this.totalRecord1=data.data.length;
     

    })

  }
  getAllTicketOfMonth2():void{
    this.statisticalService.getTicketOfMonth(2).subscribe(data =>{
      this.month2 = data.data
      this.totalRecord2=data.data.length;
     

    })

  }
  getAllTicketOfMonth3():void{
    this.statisticalService.getTicketOfMonth(3).subscribe(data =>{
      this.month3 = data.data
      this.totalRecord3=data.data.length;
     

    })

  }
  getAllTicketOfMonth4():void{
    this.statisticalService.getTicketOfMonth(4).subscribe(data =>{
      this.month4 = data.data
      this.totalRecord4=data.data.length;
     
    })

  }
  getAllTicketOfMonth5():void{
    this.statisticalService.getTicketOfMonth(5).subscribe(data =>{
      this.month5 = data.data
      this.totalRecord5=data.data.length;
    

    })

  }
  getAllTicketOfMonth6():void{
    this.statisticalService.getTicketOfMonth(6).subscribe(data =>{
      this.month6 = data.data
      this.totalRecord6=data.data.length;
     

    })

  }
  getAllTicketOfMonth7():void{
    this.statisticalService.getTicketOfMonth(7).subscribe(data =>{
      this.month7 = data.data
      this.totalRecord7=data.data.length;
     
    })

  }
  getAllTicketOfMonth8():void{
    this.statisticalService.getTicketOfMonth(8).subscribe(data =>{
      this.month8 = data.data
      this.totalRecord8=data.data.length;
     

    })

  }
  getAllTicketOfMonth9():void{
    this.statisticalService.getTicketOfMonth(9).subscribe(data =>{
      this.month9 = data.data
      this.totalRecord9=data.data.length;
    

    })

  }
  getAllTicketOfMonth10():void{
    this.statisticalService.getTicketOfMonth(10).subscribe(data =>{
      this.month10 = data.data
      this.totalRecord10=data.data.length;
    
    })

  }
  getAllTicketOfMonth11():void{
    this.statisticalService.getTicketOfMonth(11).subscribe(data =>{
      this.month11 = data.data
      this.totalRecord11=data.data.length;
    

    })

  }
  getAllTicketOfMonth12():void{
    this.statisticalService.getTicketOfMonth(12).subscribe(data =>{
      this.month12 = data.data
      this.totalRecord12=data.data.length;
     
    })

  }

  // xuất excel
// month1
fileName= 'Junuary.xlsx';
exportexcel(): void
  {
     /* table id is passed over here */
     let element = document.getElementById('excel-table-1');
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     /* save to file */
     XLSX.writeFile(wb, this.fileName);

  }
// month2
fileName2= 'February.xlsx';
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
//month3
fileName3= 'March.xlsx';
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

//month4
fileName4= 'April.xlsx';
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

  // month5
fileName5= 'May.xlsx';
exportexcel5(): void
  {
     /* table id is passed over here */
     let element = document.getElementById('excel-table-5');
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     /* save to file */
     XLSX.writeFile(wb, this.fileName5);

  }
// month6
fileName6= 'June.xlsx';
exportexcel6(): void
  {
     /* table id is passed over here */
     let element = document.getElementById('excel-table-6');
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     /* save to file */
     XLSX.writeFile(wb, this.fileName6);

  }
//month7
fileName7= 'July.xlsx';
exportexcel7(): void
  {
     /* table id is passed over here */
     let element = document.getElementById('excel-table-7');
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     /* save to file */
     XLSX.writeFile(wb, this.fileName7);

  }

//month8
fileName8= 'August.xlsx';
exportexcel8(): void
  {
     /* table id is passed over here */
     let element = document.getElementById('excel-table-8');
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     /* save to file */
     XLSX.writeFile(wb, this.fileName8);

  }
  //month9
fileName9= 'September.xlsx';
exportexcel9(): void
  {
     /* table id is passed over here */
     let element = document.getElementById('excel-table-9');
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     /* save to file */
     XLSX.writeFile(wb, this.fileName9);

  }
// month10
fileName10= 'October.xlsx';
exportexcel10(): void
  {
     /* table id is passed over here */
     let element = document.getElementById('excel-table-10');
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     /* save to file */
     XLSX.writeFile(wb, this.fileName10);

  }
//month11
fileName11= 'November.xlsx';
exportexcel11(): void
  {
     /* table id is passed over here */
     let element = document.getElementById('excel-table-11');
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     /* save to file */
     XLSX.writeFile(wb, this.fileName11);

  }

//month12
fileName12= 'December.xlsx';
exportexcel12(): void
  {
     /* table id is passed over here */
     let element = document.getElementById('excel-table-12');
     const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

     /* generate workbook and add the worksheet */
     const wb: XLSX.WorkBook = XLSX.utils.book_new();
     XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

     /* save to file */
     XLSX.writeFile(wb, this.fileName12);

  }

}
