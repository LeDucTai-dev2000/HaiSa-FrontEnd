import { Component, OnInit } from '@angular/core';
import {StatisticalService} from '../../../../service/admin-service/statistical/statistical.service';
import {TotalCinemaOfMonth} from '../../../model/totalcinemaofmonth.model';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-totalcinemaofmonth',
  templateUrl: './totalcinemaofmonth.component.html',
  styleUrls: ['./totalcinemaofmonth.component.css']
})
export class TotalcinemaofmonthComponent implements OnInit {
  public totalcinema1 : TotalCinemaOfMonth[]=[]
  public totalcinema2 : TotalCinemaOfMonth[]=[]
  public totalcinema3 : TotalCinemaOfMonth[]=[]
  public totalcinema4 : TotalCinemaOfMonth[]=[]
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
    this.getTotalCinemaOfMonth1();
    this.getTotalCinemaOfMonth2();
    this.getTotalCinemaOfMonth3();
    this.getTotalCinemaOfMonth4();
  }


  getTotalCinemaOfMonth1():void{
    this.statisticalService.getTotalCinemaOfMonth(1).subscribe(data =>{
      this.totalcinema1 = data.data
      this.totalRecord1=data.data.length;
   
      
    })
  }

  getTotalCinemaOfMonth2():void{
    this.statisticalService.getTotalCinemaOfMonth(2).subscribe(data =>{
      this.totalcinema2 = data.data
      this.totalRecord2=data.data.length;
     
    })
  }

  getTotalCinemaOfMonth3():void{
    this.statisticalService.getTotalCinemaOfMonth(3).subscribe(data =>{
      this.totalcinema3 = data.data
      this.totalRecord3=data.data.length;
     
    })
  }

  getTotalCinemaOfMonth4():void{
    this.statisticalService.getTotalCinemaOfMonth(4).subscribe(data =>{
      this.totalcinema4 = data.data
      this.totalRecord4=data.data.length;
     
    })
  }


// xuất excel
// cinema1
fileName= 'haisanamkikhoinghia.xlsx';
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
fileName2= 'haisanguyenkiem.xlsx';
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
fileName3= 'haisaquangtrung.xlsx';
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
fileName4= 'haisahoangsa.xlsx';
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
