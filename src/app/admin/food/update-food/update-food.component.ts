import { Component, OnInit } from '@angular/core';
import  { Food } from '../../../model/food.model';
import {FoodService} from '../../../../service/admin-service/food/food.service';
import { RouterModule, Router,ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-food',
  templateUrl: './update-food.component.html',
  styleUrls: ['./update-food.component.css']
})
export class UpdateFoodComponent implements OnInit {

  constructor(
    public foodService: FoodService,
    public routerService : Router,
    public activatedRoute : ActivatedRoute
  ) { }

  formcheck = new FormGroup({
    Name: new FormControl('',[Validators.required,Validators.pattern(/[!^\w\s]$/)]),
    Price: new FormControl('',[Validators.required,Validators.pattern("^[0-9]*$")])
  })

  ngOnInit(): void {
    this.onLoad();
  }

  public foods: Food = {
    "foodId" :null,
    "name" : "",
    "price" : null,
    "status" : null,
  }

  onLoad(){
    this.activatedRoute.queryParams.subscribe(data => {
       let id : number = data.id;
     
      this.foodService.getAll(null,null,id,null).subscribe(data => {
        this.foods = data.data;
     
      }, error => {
        console.log(error);
      })
    })
  }
  onUpdateFood(){
    this.foodService.updateFood(this.foods).subscribe(data => {
     
      alert('The food has been updated successfully')
      this.routerService.navigate(['/admin/listfood']);
    }, error => {

    })
  }
  back(){
    this.routerService.navigate(['/admin/listfood'])
  }
}
