import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from 'src/service/userservice.service';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {
foods;
foodCart =[];
foodName = [];
saveFood : { name: string};
foodQuantity = [];
food : {
  foodId : any;
  quantity : any;
  total : any;
};
choosen;
totalTicket;
totalSeat;
totalFood = 0;
totalTemp;
movieName = sessionStorage.getItem('movieName');
  constructor(private userService: UserserviceService, private router: Router) { }

  ngOnInit(): void {
    this.totalSeat = Number(sessionStorage.getItem('totalPriceofSeat'))
    this.totalTicket = this.totalSeat;
    this.loadFood();
  }

  loadFood(): void {
    this.userService.getFood().subscribe(
      (data) => {
        this.foods = data.data
      },
      (error) => console.log(error)
      )
  }

  onSubmit() {
    sessionStorage.setItem('foodBill',JSON.stringify(this.foodCart));
    sessionStorage.setItem('total',this.totalTicket);
    sessionStorage.setItem('foodName',JSON.stringify(this.foodName));
    this.router.navigate(['/bill-detail'])
  }

  chon(item: any): void {
    this.addFood(item);
  };

  tang(item: any): void {
    this.addFood(item);
  }
  giam(item: any) {
    this.removeFood(item);
  }

  addFood(item: any): void {
    this.choosen = this.foodCart.findIndex(x => x.foodId === item.foodId);
    if (this.choosen !== -1) {
      this.foodCart[this.choosen].quantity++;

      this.foodCart[this.choosen].total = this.foodCart[this.choosen].quantity * item.price;
      this.foodQuantity.splice(this.choosen,1,this.foodCart[this.choosen].quantity);
    } else {
      this.food = {
      foodId : item.foodId,
      quantity : 1,
      total : item.price,
    }
    this.saveFood={name: item.name};
    this.foodName.push(this.saveFood);
    this.foodQuantity.push(1);
    this.foodCart.push(this.food);
    }
    this.totalFood += item.price;
      this.totalTicket = this.totalFood + this.totalSeat
  }

  removeFood(item: any): void {
    this.choosen = this.foodCart.findIndex(x => x.foodId === item.foodId);
    this.foodCart[this.choosen].quantity--;
    this.foodCart[this.choosen].total = this.foodCart[this.choosen].quantity * item.price;
    this.foodQuantity.splice(this.choosen,1,this.foodCart[this.choosen].quantity);
    this.totalFood -= item.price;
    this.totalTicket -= item.price;
    if(this.foodCart[this.choosen].quantity == 0){
      this.foodName.splice(this.choosen,1);
      this.foodCart.splice(this.choosen,1);
      this.foodQuantity.splice(this.choosen,1)
    }
  }
}
