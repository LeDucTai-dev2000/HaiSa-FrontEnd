export class Food{
 public foodId:number;
 public name:string;
 public price:number;
 public status:number;

 constructor(foodId:number,name:string,price:number,status:number){
this.foodId=foodId;
this.name=name;
this.price=price;
this.status=status;
 }

}