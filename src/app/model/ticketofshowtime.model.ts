export class TicketOfShowtime{
    public cinemaName :string
    public ticketQuantity:number
    public startTime:string

    constructor(cinemaName:string, ticketQuantity:number,startTime:string){
        this.cinemaName = cinemaName
        this.ticketQuantity = ticketQuantity
        this.startTime = startTime
    }

}