import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Member } from '../../../model/member.model';
import { MemberService } from '../../../../service/admin-service/member/member.service';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-list-member',
  templateUrl: './list-member.component.html',
  styleUrls: ['./list-member.component.css']
})
export class ListMemberComponent implements OnInit {
  public members: Member[]=[];
  totalRecord:string;
  p: number = 1;
  public name
  constructor(
    private memberService: MemberService,
    public routerService : Router
  ) { }

  ngOnInit(): void {
    this.loadAllMember();
  }
  loadAllMember():void{
    this.memberService.getAll().subscribe(
      (data) =>{
        this.members = data.data;
        this.totalRecord=data.data.length;
       

      },
      (error) =>{
        console.log(error);
      }
    )

  }
  onSearch(name: string){
    if(name){
     this.memberService.getAll(name).subscribe(
       (data) => {
         this.members = data.data;
        
       },
       (error) => {
         console.log(error);
       }
     );
     }else{
       this.loadAllMember();
     }
    }


  // xuất excel
fileName= 'Member.xlsx';

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

}
