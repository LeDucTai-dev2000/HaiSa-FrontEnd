import { Component, OnInit } from '@angular/core';
import  { Food } from '../../../model/food.model';
import {FoodService} from '../../../../service/admin-service/food/food.service';
import { RouterModule, Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-delete-food',
  templateUrl: './delete-food.component.html',
  styleUrls: ['./delete-food.component.css']
})
export class DeleteFoodComponent implements OnInit {

  constructor(
    public foodService: FoodService,
    public routerService : Router,
    public activatedRoute : ActivatedRoute
  ) { }
  public foods: Food = {
    "foodId" :null,
    "name" : "",
    "price" : null,
    "status" : null,

};
  ngOnInit(): void {
    this.onLoad();
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

  onDelete(answer : boolean){
    if (answer) {
  
      this.foodService.deleteFood(this.foods.foodId).subscribe(data => {
         this.routerService.navigate(['/admin/listfood']);
       
      }, error => {
         console.log(error);
        // console.log(this.movies.movieId)
      })
    } else {
      this.routerService.navigate(['/admin/listfood']);
      console.log(this.foods.foodId)
    }

  }


}
