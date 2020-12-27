export class TicketOfMonth{
    public movieName:string
    public ticketQuantity:number
    public month:number

    constructor(movieName:string,ticketQuantity:number,month:number){
        this.movieName=movieName
        this.ticketQuantity=ticketQuantity
        this.month=month
    }

}