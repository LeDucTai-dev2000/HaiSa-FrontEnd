import { Component, OnInit } from '@angular/core';
import  { Food } from '../../../model/food.model';
import {FoodService} from '../../../../service/admin-service/food/food.service';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-list-food',
  templateUrl: './list-food.component.html',
  styleUrls: ['./list-food.component.css']
})
export class ListFoodComponent implements OnInit {
  public food1: Food[] = [];
  public food2: Food[] = [];
  foodId:number
  name1:string;
  name2:string;
  totalRecord:string;
  totalRecord2:string;
  p: number = 1;
  p2: number = 1;
  constructor(
    public routerService : Router,
    private foodService: FoodService

  ) { }

check = true

  ngOnInit(): void {

    let checkRole = sessionStorage.getItem('ROLE');
    console.log(checkRole)
    
    if(checkRole == 'Staff'){
      this.check = true
    
    }else {
      this.check = false
     
    }




    this.loadAllFood1();
    this.loadAllFood2();
  }

  loadAllFood1(): void {
    this.foodService.getAll(null,null,null,1).subscribe(
      (data) => {
        this.food1 = data.data;
        this.totalRecord=data.data.length;
          
        
      },
      (error) => {
        console.log(error);
      }
    );
  }

  loadAllFood2(): void {
    this.foodService.getAll(null,null,null,2).subscribe(
      (data) => {
        this.food2 = data.data;
        this.totalRecord2=data.data.length;
         
        
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSearch(name1: string){
    if(name1){
     this.foodService.getAll(name1,null,null,null).subscribe(
       (data) => {
         this.food1 = data.data;
       
       },
       (error) => {
        
       }
     );
     }else{
       this.loadAllFood1();
     }
    }
    onSearch2(name2: string){
     if(name2){
      this.foodService.getAll(null,name2,null,null).subscribe(
        (data) => {
          this.food2 = data.data;
         
        },
        (error) => {
          console.log(error);
        }
      );
      }else{
        this.loadAllFood2();
      }
     }

     onUpdate(food){

      this.routerService.navigate(['/admin/listfood/update'], { queryParams: {id: food.foodId} });
        
      }
      onDelete(food){
    
        this.routerService.navigate(['/admin/listfood/delete'], { queryParams: {id: food.foodId} });
           
        }
}
