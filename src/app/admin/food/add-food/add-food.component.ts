import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import  { Food } from '../../../model/food.model';
import {FoodService} from '../../../../service/admin-service/food/food.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
  public foods:Food[]=[];
  foodId: number;
  name:string;
  price:number;
  status:number
  constructor(
    private FoodService: FoodService,
    public routerService : Router
  ) { }

  formcheck = new FormGroup({
    Name: new FormControl('',[Validators.required,Validators.pattern(/[!^\w\s]$/)]),
    Price: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")])
  })

  ngOnInit(): void {
  }

  onaddFood(){

    let food = new Food(this.foodId,this.name,this.price,this.status)
    this.FoodService.addFood(food).subscribe(
      data => {
        this.foods = data.data;
        alert('The food has been added successfully')
        this.routerService.navigate(['/admin/listfood']);
       
      },
      error => {
        console.log(error);
      }
    )

  }
  back(){
    this.routerService.navigate(['/admin/listfood'])
  }
}
