export class Period{
    public periodId:number;
    public startTime:string;
    public statusDay:number;
    public price:number;

    constructor(periodId:number,startTime:string,statusDay:number,price:number){
            this.periodId=periodId;
            this.startTime= startTime;
            this.statusDay=statusDay;
            this.price=price
    }


}