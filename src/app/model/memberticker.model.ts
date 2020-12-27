export class MemberTicket {
    ticketId: number;
    code: string;
    memberName: string;
    birthday: Date;
    movieName: string;
    startTime: string;
    roomName: number;
    name: string;
    ticketPriceAmount: string;
    ticketQuantity: number;
    total: number;

    constructor(
        ticketId: number,
        code: string,
        memberName: string,
        birthday: Date,
        movieName: string,
        startTime: string,
        roomName: number,
        name: string,
        ticketPriceAmount: string,
        ticketQuantity: number,
        total: number
    ) { 
        this.ticketId =ticketId
        this.code =code
        this.memberName = memberName
        this.birthday =birthday
        this.movieName = movieName
        this.startTime = startTime
        this.roomName = roomName
        this.name = name
        this.ticketPriceAmount = ticketPriceAmount
        this.ticketQuantity = ticketQuantity
        this.total = total
    }
}
