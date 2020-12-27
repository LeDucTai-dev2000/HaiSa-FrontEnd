export class Showtimes{
    public showtimeId:number;
    public movieId:number;
    public roomId:number;
    public date:Date;
    public periodId:number;
    public employeeId:number;
 
    public status:number;

    constructor( showtimeId:number, movieId:number,  roomId:number, date:Date,  periodId:number,employeeId:number,status:number){
this.showtimeId=showtimeId;
this.movieId=movieId;
this.roomId=roomId;
this.date=date;
this.periodId=periodId;
this.employeeId=employeeId;

this.status=status
    }
}