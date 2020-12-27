export class TotalCinemaOfMonth{
    public total:number
    public cinemaName:string
    public month:number
    public totalFood:number
    public totalTicket:number
    
    constructor(total:number,cinemaName:string,month:number,totalFood:number,totalTicket:number){
        this.total=total
        this.cinemaName=cinemaName
        this.month=month
        this.totalFood=totalFood
        this.totalTicket=totalTicket

    }
}